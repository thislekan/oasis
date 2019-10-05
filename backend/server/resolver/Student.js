const Student = {
  faculty: async ({ id }, args, context) => context.prisma.student({ id }).faculty(),
  department: async ({ id }, args, context) => context.prisma.student({ id }).department(),
  courses: async ({ id }, args, context) => context.prisma.student({ id }).courses(),
};

export default Student;
