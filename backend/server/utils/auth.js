import jwt from 'jsonwebtoken';
import errorFormat from './errorFormat';
import dotEnv from '../../config/config';

export const expiryDate = Math.floor(Date.now() / 1000) + (60 * 60 * 72);

const getUserId = (context) => {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, dotEnv.JWT_SECRET);
    return userId;
  }

  return errorFormat('authentication', 'Please login to continue');
};

export default getUserId;
