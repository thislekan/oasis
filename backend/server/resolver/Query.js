const Query = {
  student: async (parent, args, context) => context.prisma.student({ id: args.id }),
  fetchStudents: async (parent, args, context) => {
    const where = args.filter ? {
      OR: [
        { regNo_contains: args.filter },
        { department: { name_contains: args.filter } },
        { faculty: { name_contains: args.filter } },
      ],
    } : {};
    const students = await context.prisma.students({
      where,
      skip: args.skip,
      first: args.first,
      orderBy: args.orderBy,
    });
    const count = await context.prisma
      .studentsConnection({ where })
      .aggregate()
      .count();

    return { students, count };
  },
};

export default Query;
