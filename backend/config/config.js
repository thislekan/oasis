import dotEnv from 'dotenv';

dotEnv.config();
const { env } = process;

export default {
  JWT_SECRET: env.JWT_SECRET,
  NODE_ENV: env.NODE_ENV,
  PORT: env.PORT,
};
