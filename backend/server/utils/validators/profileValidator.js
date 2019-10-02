import InputValidator from './inputValidator';

export default class ProfileValidator {
  static nameCheck(args) {
    const isEmpty = args.data.name && InputValidator.isEmpty('name', args.data.name);
    const isAlphabet = args.data.name && InputValidator.isAlphabet('name', args.data.name);
    const errorMsg = isEmpty || isAlphabet;

    return errorMsg;
  }

  static addressCheck(args) {
    const isEmpty = args.data.address && InputValidator.isEmpty('email', args.data.address);

    return isEmpty;
  }

  static imageCheck(args) {
    const isEmpty = args.data.image && InputValidator.isEmpty('image', args.data.image);

    return isEmpty;
  }

  static genderCheck(args) {
    const isEmpty = args.data.gender && InputValidator.isEmpty('gender', args.data.gender);
    const isAlphabet = args.data.gender && InputValidator.isAlphabet('gender', args.data.gender);
    const errorMsg = isEmpty || isAlphabet;

    return errorMsg;
  }

  static phoneCheck(args) {
    const isEmpty = args.data.phone && InputValidator.isEmpty('phone', args.data.phone);
    return isEmpty;
  }

  static idCheck(args) {
    const isEmpty = args.filter && InputValidator.isEmpty('filter', args.filter);
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
      || addressEror || imageError || genderError || idCheck || phoneError;

    return errMsg;
  }
}
