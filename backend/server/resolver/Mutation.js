import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import dotEnv from '../../config/config';
import {
  signupMiddleware,
  loginMiddleware,
  profileMiddleware,
} from '../middlewares/index';
import getUserId, { expiryDate } from '../utils/auth';

const Mutation = {
  createUser: async (parent, args, context) => {
    signupMiddleware(args);

    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userId: user.id, exp: expiryDate }, dotEnv.JWT_SECRET);

    return { user, token };
  },

  login: async (parent, args, context) => {
    const user = await loginMiddleware(args, context);
    const token = jwt.sign({ userId: user.id, exp: expiryDate }, dotEnv.JWT_SECRET);

    return { token, user };
  },

  updateProfile: async (parent, args, context) => {
    profileMiddleware(args);

    const id = await getUserId(context);
    const { data } = args;
    const user = await context.prisma.updateUser({ data, where: { id } });

    return { user };
  },
};

export { Mutation as default };
