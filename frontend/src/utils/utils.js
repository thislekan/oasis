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

export const FACULTY_SELECT_PAYLOAD = gql`
  mutation UpdateFaculty($data: FacultyPayload) {
    updateStudentFacultyAndDept(data: $data) {
      id
      department {
        name
        id
      }
      faculty {
        name
        id
      }
    }
  }
`;

export const GET_STUDENT = gql`
  query getStudent($id: ID!) {
    student(id: $id) {
      id
      department {
        name
        id
      }
      faculty {
        name
        id
      }
    }
  }
`;

export const GET_FACULTIES = gql`
  query getFaculties($orderBy: FacultyOrderByInput) {
    faculties(orderBy: $orderBy) {
      name
      id
      departments {
        name
        id
      }
    }
  }
`;

export const UPDATE_STUDENT_FACULTY = gql`
  mutation facultySelect($data: EditStudentFacultyAndDepartmentPayload) {
    updateStudentFacultyAndDept(data: $data) {
      id
      department {
        name
        id
      }
      faculty {
        name
        id
      }
    }
  }
`;
