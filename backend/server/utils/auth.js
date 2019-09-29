import jwt from 'jsonwebtoken';
import dotEnv from '../../config/config';

const getUserId = (context) => {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, dotEnv.JWT_SECRET);
    return userId;
  }

  throw new Error('Not authenticated');
};

export default getUserId;
