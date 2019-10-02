import {
  fetchUserDepartment,
  fetchUserFaculty,
  verifyUser,
} from '../middlewares/index';
import getUserId from '../utils/auth';

const Query = {
  user: async (parent, args, context) => {
    const id = getUserId(context);
    verifyUser(id, args.id);
    const user = await context.prisma.user({ id });
    const faculty = await fetchUserFaculty(id, context);
    const department = await fetchUserDepartment(id, context);
    user.faculty = faculty;
    user.department = department;

    return user;
  },

};

export { Query as default };
