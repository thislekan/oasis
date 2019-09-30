import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import dotEnv from '../../config/config';
import { signupMiddleware, loginMiddleware } from '../middlewares/index';

const Mutation = {
  createUser: async (parent, args, context) => {
    signupMiddleware(args);

    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userId: user.id }, dotEnv.JWT_SECRET);

    return { user, token };
  },

  login: async (parent, args, context) => {
    const user = await loginMiddleware(args, context);
    const token = jwt.sign({ userId: user.id }, dotEnv.JWT_SECRET);

    return { token, user };
  },
};

export { Mutation as default };
