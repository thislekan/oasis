import validator from 'validator';

export const isEmail = (email) => {
  console.log(validator.isEmail(email), 'emailcheck');
  if (!validator.isEmail(email)) return ({ field: 'email', error: 'Invalid email' });
  return '';
};

export const isAlphanumeric = (data) => {
  if (!validator.isAlphanumeric(data)) throw new Error('Field must contain alphanumeric characters');
};

export const isEmpty = (data) => {
  if (validator.isEmpty(data)) throw new Error('Field must not be empty');
};
