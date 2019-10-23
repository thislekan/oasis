export const Student = {
  faculty: async ({ id }, args, context) => context.prisma.student({ id }).faculty(),
  department: async ({ id }, args, context) => context.prisma.student({ id }).department(),
  courses: async ({ id }, args, context) => context.prisma.student({ id }).courses(),
  nextOfKin: async ({ id }, args, context) => context.prisma.student({ id }).nextOfKin(),
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
  student: async ({ id }, args, context) => context.prisma.courseHistory({ id }).student(),
  session: async ({ id }, args, context) => context.prisma.courseHistory({ id }).session(),
  result: async ({ id }, args, context) => context.prisma.courseHistory({ id }).result(),
};

export const NextOfKin = {
  student: async ({ id }, args, context) => context.prisma.nextOfKin({ id }).student(),
};
