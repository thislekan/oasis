import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotEnv from '../../config/config';

const Mutation = {
  createUser: async (parent, args, context) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userId: user.id }, dotEnv.JWT_SECRET);
    delete user.password;

    return { user, token };
  },

  login: async (parent, args, context) => {
    const user = await context.prisma.user({ email: args.email });
    if (!user) throw new Error('User does not exist');

    const validateUser = await bcrypt.compare(args.password, user.password);
    if (!validateUser) throw new Error('Email or Password incorrect');

    const token = jwt.sign({ userId: user.id }, dotEnv.JWT_SECRET);
    delete user.password;

    return { token, user };
  },
};

export { Mutation as default };
