import { createError } from 'apollo-errors';

const errorFormat = (field, message) => {
  const ErrMsg = createError(field, { message });
  throw new ErrMsg();
};

export default errorFormat;
