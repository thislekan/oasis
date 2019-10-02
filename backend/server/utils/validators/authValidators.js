import InputValidator from './inputValidator';

export default class AuthValidator {
  static validateRegNo(args) {
    const isEmpty = args.regNo && InputValidator.isEmpty('regNo', args.regNo);
    const isAlphanumeric = args.regNo && InputValidator.isAlphanumeric('regNo', args.regNo);
    const minLength = args.regNo && InputValidator.isMinimumLength('regNo', args.regNo, 6);
    const errorMsg = isEmpty || isAlphanumeric || minLength;

    return errorMsg;
  }

  static validateEmail(args) {
    const isEmpty = args.email && InputValidator.isEmpty('email', args.email);
    const isEmail = InputValidator.isEmail(args.email);
    const errorMsg = isEmpty || isEmail;

    return errorMsg;
  }

  static validatePassword(args) {
    const isEmpty = args.password && InputValidator.isEmpty('password', args.password);
    const minLength = args.password && InputValidator.isMinimumLength('password', args.password, 6);
    const errorMsg = isEmpty || minLength;

    return errorMsg;
  }

  static validateName(args) {
    const isEmpty = args.name && InputValidator.isEmpty('name', args.name);
    const isAlphabet = args.name && InputValidator.isAlphabet('name', args.name);
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
