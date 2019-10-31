import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
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

const loginData = (loginResponse, route) => {
  if (loginResponse.data && route === '/login') {
    sessionStorage.setItem('token', loginResponse.data.login.token);
    sessionStorage.setItem('id', loginResponse.data.login.user.id);
    return loginResponse.data;
  }
  return;
};

const signUpData = (signUpResponse, route) => {
  if (signUpResponse.data && route === '/signup') {
    sessionStorage.setItem('token', signUpResponse.data.createStudent.token);
    sessionStorage.setItem('id', signUpResponse.data.createStudent.user.id);
    return signUpResponse.data;
  }
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

  return (
    <form onSubmit={submitForm}>
      {signUpData(signUpResponse, location.pathname) && (
        <Redirect to="/faculty/select" push />
      )}
      <StudentAuthFormInput
        location={location.pathname}
        onChangeHandler={onChangeHandler}
        loading={loading}
        data={loginData(loginResponse, location.pathname)}
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
