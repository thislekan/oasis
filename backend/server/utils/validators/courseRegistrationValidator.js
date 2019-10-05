// import DataLoader from 'dataloader';
import InputValidator from './inputValidator';
import errorFormat from '../errorFormat';

export default class CourseRegistrationValidator {
  static isEmpty(args) {
    const errorMsg = args.data.courses.forEach((element) => InputValidator.isEmpty('courses', element));
    return errorMsg;
  }

  static async confirmCourse(id, context) {
    const course = await context.prisma.course({ id });
    if (!course) return errorFormat('course', `The course with ID ${id} does not exist in our database`);
    return course;
  }

  static async batchingFunc(list, context) {
    return list.map((item) => this.confirmCourse(item, context));
  }
}
