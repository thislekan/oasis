import bcrypt from 'bcryptjs';

import AuthValidator from '../utils/validators/authValidators';
import ProfileValidator from '../utils/validators/profileValidator';
import regNumberGenerator from '../utils/regNumberGenerator';
import errorFormat from '../utils/errorFormat';

export const validateUser = async (inputPassword, userPassword) => {
  const foundUser = await bcrypt.compare(inputPassword, userPassword);
  if (!foundUser) return errorFormat('User', 'Email or Password incorrect');

  return foundUser;
};

export const findUser = async (args, context) => {
  const user = await context.prisma.student({ email: args.email });
  if (!user) return errorFormat('User', 'User does not exist');

  return user;
};

export const signupMiddleware = async (context, args) => {
  const errors = AuthValidator.validateSignup(args);
  const regNo = await regNumberGenerator(context);
  if (errors) return errors;

  return {
    ...args,
    regNo,
    email: args.email.trim(),
    phone: args.phone.trim(),
    name: args.name.trim(),
  };
};

export const loginMiddleware = async (args, context) => {
  const errors = AuthValidator.validateLogin(args);
  if (errors) return errors;

  const user = await findUser(args, context);
  await validateUser(args.password, user.password);

  return user;
};

export const profileMiddleware = (args) => {
  const errors = ProfileValidator.validateProfileInput(args);
  if (errors) return errors;

  return '';
};

export const confirmFaculty = async (id, context) => {
  const faculty = await context.prisma.faculty({ id });
  if (!faculty)
    return errorFormat(
      'faculty',
      'The faculty provided does not exist on our database'
    );

  return faculty;
};

export const confirmDepartment = async (id, context) => {
  const department = await context.prisma.department({ id });
  if (!department)
    return errorFormat(
      'department',
      'The department provided does not exist on our database'
    );

  return department;
};

export const verifyUser = (tokenId, payloadId) => {
  if (tokenId !== payloadId)
    return errorFormat(
      'authorization',
      'You do not have access to this information'
    );
  return true;
};
