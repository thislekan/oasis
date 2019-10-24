import dotEnv from 'dotenv';

dotEnv.config();
const { env } = process;

export default {
  JWT_SECRET: env.JWT_SECRET,
  NODE_ENV: env.NODE_ENV,
  PORT: env.PORT || 5001,
  PLAYGROUND: env.NODE_ENV === 'development' ? env.PLAYGROUND : undefined,
  PRISMA_SECRET: env.PRISMA_SECRET,
  PRISMA_MANAGEMENT_API_SECRET: env.PRISMA_MANAGEMENT_API_SECRET,
  PRISMA_ENDPOINT: env.PRISMA_ENDPOINT,
};
