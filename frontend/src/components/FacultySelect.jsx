import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

import Loader from './Loader';
import Notification from './Notification';
import { GET_FACULTIES, UPDATE_STUDENT_FACULTY } from '../utils/utils';

const FacultySelect = () => {
  const { loading, data, error } = useQuery(GET_FACULTIES, {
    variables: { orderBy: 'name_ASC' },
  });
  const [updateStudent, updatedStudent] = useMutation(UPDATE_STUDENT_FACULTY);
  const [state, setState] = useState({});

  const selectHandler = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
    if (name === 'faculty') filterDepartment(value);
  };

  const filterDepartment = (value) => {
    const { faculties } = data;
    faculties.find((faculty) => {
      if (faculty.id === value)
        return setState({
          ...state,
          departments: faculty.departments,
          faculty: value,
        });
    });
  };

  return (
    <form
      onSubmit={(e) => {
        console.log('clicked');
        e.preventDefault();
        if (!state.department || !state.faculty) {
          console.log('got here');
          return setState({
            ...state,
            error: 'Both faculty and department are required fields',
          });
        }
        updateStudent({
          variables: {
            data: { department: state.department, faculty: state.faculty },
          },
        });
      }}
    >
      <div className="fac-select">
        <div className="fac-select__wrapper">
          <div className="fac-select__wrapper__dropdown-div">
            <div className="select-div">
              <label htmlFor="faculty">Faculty</label>
              <select name="faculty" id="" onChange={selectHandler}>
                <option value="">Please select your faculty</option>
                {data &&
                  data.faculties &&
                  data.faculties.map((faculty) => (
                    <option value={faculty.id} key={faculty.name}>
                      {faculty.name}
                    </option>
                  ))}
              </select>
            </div>
            {(state.error || updatedStudent.error) && (
              <Notification
                message={state.error || updatedStudent.error.message}
              />
            )}
            {loading && <Loader />}
            {updatedStudent.data && <Redirect to="/home/me" push />}
            {state.departments && (
              <div className="select-div">
                <label htmlFor="department">Department</label>
                <select name="department" id="" onChange={selectHandler}>
                  <option value="">Please select your department</option>
                  {state.departments.map((department) => (
                    <option value={department.id} key={department.name}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="submit-btn-div">
              <input type="submit" value="SAVE" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FacultySelect;
