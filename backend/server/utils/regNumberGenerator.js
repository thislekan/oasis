const year = new Date().getFullYear().toString();
const countGenerator = async (context) => {
  const count = await context.prisma
    .studentsConnection()
    .aggregate()
    .count();
  if (!count) return '0001';
  if (count <= 9) return `00${count}`;
  if (count >= 100) return `0${count}`;
  return count;
};

const regNumberGenerator = async (context) => {
  const session = year.substr(2, year.length);
  const count = await countGenerator(context);
  const regNo = `U${session}NE${count}`;

  return regNo;
};

export default regNumberGenerator;
