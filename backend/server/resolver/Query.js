const Query = {
  student: async (parent, args, context) => context.prisma.student({ id: args.id }),
};

export default Query;
