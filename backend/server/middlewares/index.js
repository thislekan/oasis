import bcrypt from 'bcryptjs';

import AuthValidator from '../utils/validators/authValidators';
import errorFormat from '../utils/errorFormat';

export const validateUser = async (inputPassword, userPassword) => {
  const foundUser = await bcrypt.compare(inputPassword, userPassword);
  if (!foundUser) return errorFormat('User', 'Email or Password incorrect');

  return foundUser;
};

export const findUser = async (args, context) => {
  const user = await context.prisma.user({ email: args.email });
  if (!user) return errorFormat('User', 'User does not exist');

  return user;
};

export const signupMiddleware = (args) => {
  const errors = AuthValidator.validateSignup(args);
  if (errors) return errors;

  return { ...args, email: args.email.trim() };
};

export const loginMiddleware = async (args, context) => {
  const errors = AuthValidator.validateLogin(args);
  if (errors) return errors;

  const user = await findUser(args, context);
  await validateUser(args.password, user.password);

  return user;
};
