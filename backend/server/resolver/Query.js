import { verifyUser } from '../middlewares/index';
import getUserId from '../utils/auth';

const Query = {
  user: async (parent, args, context) => {
    const id = getUserId(context);
    verifyUser(id, args.id);
    const user = await context.prisma.user({ id });

    return user;
  },

};

export default Query;
