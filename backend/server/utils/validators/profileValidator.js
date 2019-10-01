import InputValidator from './inputValidator';

export default class ProfileValidator {
  static nameCheck(args) {
    const isEmpty = InputValidator.isEmpty(args.data.name && 'name', args.data.name);
    const isAlphabet = InputValidator.isAlphabet(args.data.name && 'name', args.data.name);
    const errorMsg = isEmpty || isAlphabet;

    return errorMsg;
  }

  static addressCheck(args) {
    const isEmpty = InputValidator.isEmpty(args.data.address && 'email', args.data.address);

    return isEmpty;
  }

  static imageCheck(args) {
    const isEmpty = InputValidator.isEmpty(args.data.image && 'image', args.data.image);

    return isEmpty;
  }

  static genderCheck(args) {
    const isEmpty = InputValidator.isEmpty(args.data.gender && 'gender', args.data.gender);
    const isAlphabet = InputValidator.isAlphabet(args.data.gender && 'gender', args.data.gender);
    const errorMsg = isEmpty || isAlphabet;

    return errorMsg;
  }

  static phoneCheck(args) {
    const isEmpty = InputValidator.isEmpty(args.data.phone && 'phone', args.data.phone);
    return isEmpty;
  }

  static idCheck(args) {
    const isEmpty = InputValidator.isEmpty(args.filter, 'filter', args.filter);
    return isEmpty;
  }

  static validateProfileInput(args) {
    const payloadError = InputValidator.payloadCheck(args);
    const nameError = ProfileValidator.nameCheck(args);
    const phoneError = ProfileValidator.phoneCheck(args);
    const addressEror = ProfileValidator.phoneCheck(args);
    const imageError = ProfileValidator.imageCheck(args);
    const genderError = ProfileValidator.genderCheck(args);
    const idCheck = ProfileValidator.genderCheck(args);
    const errMsg = payloadError || nameError
      || addressEror || imageError || genderError || addressEror || idCheck || phoneError;

    return errMsg;
  }
}
