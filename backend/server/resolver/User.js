const User = {
  faculty: async ({ id }, args, context) => context.prisma.user({ id }).faculty(),
  department: async ({ id }, args, context) => context.prisma.user({ id }).department(),
  courses: async ({ id }, args, context) => context.prisma.user({ id }).courses(),
};

export default User;
