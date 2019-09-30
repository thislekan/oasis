import validator from 'validator';

import errorFormat from '../errorFormat';

export default class InputValidator {
  static isEmail(email) {
    if (!validator.isEmail(email.trim())) return errorFormat('email', 'Email is invalid');
    return '';
  }

  static isAlphanumeric(field, data) {
    if (field && !validator.isAlphanumeric(data.trim())) {
      return errorFormat(field, 'Field must contain alphanumeric characters');
    }
    return '';
  }

  static isEmpty(field, data) {
    if (field && validator.isEmpty(data.trim())) return errorFormat(field, 'Field must not be empty');
    return '';
  }

  static isMinimumLength(field, data, length) {
    if (field && !validator.isLength(data, { min: length })) {
      return errorFormat(field, `Field must be at least ${length} characters`);
    }
    return '';
  }

  static isString(field, data) {
    if (field && !validator.isString(data.trim())) return errorFormat(field, 'Field must be a string');
    return '';
  }

  static isAlphabet(field, data) {
    if (field && !validator.isAlpha(data.trim())) return errorFormat(field, 'Field must be letters only');
    return '';
  }

  static isNumber(field, data) {
    if (field && !validator.isNumeric(data)) return errorFormat(field, 'Field must be a numbers only');
    return '';
  }
}
