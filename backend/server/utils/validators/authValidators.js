import InputValidator from './inputValidator';

export default class AuthValidator {
  static validateRegNo(args) {
    const isEmpty = InputValidator.isEmpty(args.regNo && 'regNo', args.regNo);
    const isAlphanumeric = InputValidator.isAlphanumeric(args.regNo && 'regNo', args.regNo);
    const minLength = InputValidator.isMinimumLength(args.regNo && 'regNo', args.regNo, 6);
    const errorMsg = isEmpty || isAlphanumeric || minLength;

    return errorMsg;
  }

  static validateEmail(args) {
    const isEmpty = InputValidator.isEmpty(args.email && 'email', args.email);
    const isEmail = InputValidator.isEmail(args.email);
    const errorMsg = isEmpty || isEmail;

    return errorMsg;
  }

  static validatePassword(args) {
    const isEmpty = InputValidator.isEmpty(args.password && 'password', args.password);
    const minLength = InputValidator.isMinimumLength(args.password && 'password', args.password, 6);
    const errorMsg = isEmpty || minLength;

    return errorMsg;
  }

  static validateName(args) {
    const isEmpty = InputValidator.isEmpty(args.name && 'name', args.name);
    const isAlphabet = InputValidator.isAlphabet(args.name && 'name', args.name);
    const errorMsg = isEmpty || isAlphabet;

    return errorMsg;
  }

  static validateSignup(args) {
    const nameError = AuthValidator.validateName(args);
    const emailError = AuthValidator.validateEmail(args);
    const passwordError = AuthValidator.validatePassword(args);
    const regNoError = AuthValidator.validateRegNo(args);
    const errorMsg = nameError || emailError || passwordError || regNoError;

    return errorMsg;
  }

  static validateLogin(args) {
    const emailError = AuthValidator.validateEmail(args);
    const passwordError = AuthValidator.validatePassword(args);
    const errorMsg = emailError || passwordError;

    return errorMsg;
  }
}
