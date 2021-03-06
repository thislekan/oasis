import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import DataLoader from 'dataloader';

import dotEnv from '../../config/config';
import getUserId, { expiryDate } from '../utils/auth';
import courseValidator from '../utils/validators/courseRegistrationValidator';
import {
  signupMiddleware,
  loginMiddleware,
  profileMiddleware,
  confirmFaculty,
  confirmDepartment,
} from '../middlewares/index';

const Mutation = {
  createStudent: async (parent, args, context) => {
    const payload = args.data;
    const data = await signupMiddleware(context, payload);

    const password = await bcrypt.hash(data.password, 10);
    const user = await context.prisma.createStudent({ ...data, password });
    const token = jwt.sign(
      { userId: user.id, exp: expiryDate },
      dotEnv.JWT_SECRET
    );

    return { user, token };
  },

  login: async (parent, args, context) => {
    const user = await loginMiddleware(args, context);
    const token = jwt.sign(
      { userId: user.id, exp: expiryDate },
      dotEnv.JWT_SECRET
    );

    return { token, user };
  },

  updateStudentProfile: async (parent, args, context) => {
    profileMiddleware(args);

    const id = await getUserId(context);
    const { data } = args;
    const student = await context.prisma.updateStudent({ data, where: { id } });

    return student;
  },

  updateStudentFacultyAndDept: async (parent, args, context) => {
    const id = await getUserId(context);
    const { data } = args;

    await confirmFaculty(data.faculty, context);
    await confirmDepartment(data.department, context);
    data.faculty = { connect: { id: data.faculty } };
    data.department = { connect: { id: data.department } };
    const student = await context.prisma.updateStudent({ data, where: { id } });

    return student;
  },

  registerCourse: async (parent, args, context) => {
    const connector = args.data.type === 'ADD' ? 'connect' : 'disconnect';
    const id = await getUserId(context);
    const { data } = args;
    const courseList = [];
    const courseLoader = new DataLoader((list) =>
      courseValidator.batchingFunc(list, context)
    );

    await courseValidator.isEmpty(args);
    data.courses.forEach((element) => {
      courseLoader.load(element);
      courseList.push({ id: element });
    });

    const courses = { courses: { [connector]: courseList } };
    const student = await context.prisma.updateStudent({
      data: courses,
      where: { id },
    });

    return student;
  },

  addNextOfKin: async (parent, args, context) => {
    const id = await getUserId(context);
    const { data } = args;
    data.student = { connect: { id } };

    const nextOfKin = await context.prisma.createNextOfKin({ ...data });
    return nextOfKin;
  },

  updateNextOfKin: async (parent, args, context) => {
    await getUserId(context);
    const { data, id } = args;
    const nextOfKin = await context.prisma.updateNextOfKin({
      where: { id },
      data,
    });

    return nextOfKin;
  },
};

export { Mutation as default };
