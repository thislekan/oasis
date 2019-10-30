import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import AuthSchema from '../utils/authSchema';
import { useMutation } from '@apollo/react-hooks';
import StudentAuthFormInput from '../components/StudentAuthForm';
import { CREATE_STUDENT, STUDENT_LOGIN } from '../utils/utils';

const verifyForm = (formState) => {
  for (const key in formState) {
    if (formState.hasOwnProperty(key)) {
      const error = AuthSchema[key](formState[key]);
      if (error) return error;
    }
    return;
  }
};

const formatError = (signUpResponse, loginResponse, route) => {
  if (signUpResponse.error && route === '/signup')
    return signUpResponse.error.graphQLErrors[0].message;
  if (loginResponse.error && route === '/login')
    return loginResponse.error.graphQLErrors[0].message;
  return;
};

const StudentAuthForm = ({ location }) => {
  const [formState, setFormState] = useState({});
  const [signUp, signUpResponse] = useMutation(CREATE_STUDENT);
  const [login, loginResponse] = useMutation(STUDENT_LOGIN);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const state = { ...formState, [name]: value };
    setFormState(state);
  };

  const clearError = () => setFormState({ ...formState, error: '' });

  const submitForm = (e) => {
    e.preventDefault();
    const error = verifyForm(formState);
    if (error) return setFormState({ ...formState, error });
    const data = formState;
    delete data.error;
    location.pathname === '/signup'
      ? signUp({ variables: { data } })
      : login({ variables: { email: data.email, password: data.password } });
  };

  const loading = signUpResponse.loading || loginResponse.loading;
  const data = signUpResponse.data || loginResponse.data;

  return (
    <form onSubmit={submitForm}>
      <StudentAuthFormInput
        location={location.pathname}
        onChangeHandler={onChangeHandler}
        loading={loading}
        data={data}
        error={
          formState.error ||
          formatError(signUpResponse, loginResponse, location.pathname)
        }
        clearError={clearError}
      />
    </form>
  );
};

export default withRouter(StudentAuthForm);
