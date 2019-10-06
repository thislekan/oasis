export const Student = {
  faculty: async ({ id }, args, context) => context.prisma.student({ id }).faculty(),
  department: async ({ id }, args, context) => context.prisma.student({ id }).department(),
  courses: async ({ id }, args, context) => context.prisma.student({ id }).courses(),
};

export const Faculty = {
  departments: async ({ id }, args, context) => context.prisma.faculty({ id }).departments(),
};

export const Department = {
  faculty: async ({ id }, args, context) => context.prisma.department({ id }).faculty(),
  courses: async ({ id }, args, context) => context.prisma.department({ id }).courses(),
  students: async ({ id }, args, context) => context.prisma.department({ id }).students(),
};

export const Course = {
  department: async ({ id }, args, context) => context.prisma.course({ id }).department(),
  students: async ({ id }, args, context) => context.prisma.course({ id }).students(),
  lecturer: async ({ id }, args, context) => context.prisma.course({ id }).lecturer(),
};

export const CourseHistory = {
  students: async ({ id }, args, context) => context.prisma.courseHistory({ id }).students(),
  sessions: async ({ id }, args, context) => context.prisma.courseHistory({ id }).sessions(),
  courses: async ({ id }, args, context) => context.prisma.courseHistory({ id }).courses(),
};
