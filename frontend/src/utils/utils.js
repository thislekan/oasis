import gql from 'graphql-tag';

export const CREATE_STUDENT = gql`
  mutation CreateStudentMutation($data: CreateStudentPayload!) {
    createStudent(data: $data) {
      token
      user {
        id
        name
        email
        regNo
      }
    }
  }
`;

export const STUDENT_LOGIN = gql`
  mutation LoginStudentMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
        id
        email
        regNo
      }
    }
  }
`;
