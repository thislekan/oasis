class AuthSchema {
  static name(value) {
    const isEmpty = !!value.trim();
    const isAlphabet = /^[A-Za-z ]+$/.test(value);
    if (!isEmpty) return 'The name field cannot be empty';
    if (!isAlphabet) return 'The name field can only contain alphabets';
    return;
  }

  static email(value) {
    const isEmpty = !!value.trim();
    // const isEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //   value
    // );
    if (!isEmpty) return 'The email field cannot be empty';
    // if (!isEmail) return 'The emil provided is invalid';
    return;
  }

  static password(value) {
    const isEmpty = !!value.trim();
    const isMinLength = !!(value.length >= 6);
    if (!isEmpty) return 'The password field cannot be empty';
    if (!isMinLength) return 'Password needs a miminum of 6 characters';
    return;
  }

  static phone(value) {
    const isEmpty = !!value.trim();
    const isMinLength = !!(value.length >= 11);
    if (!isEmpty) return 'The phone field cannot be empty';
    if (!isMinLength) return 'Phone number needs a minimum of 11 characters';
    return;
  }
}

export default AuthSchema;
