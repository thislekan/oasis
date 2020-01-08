import React from 'react';

import Table from '../courseTable/Table';

const RegisteredCourses = (props) => (
  <div className="body__table">
    <Table hideCheckBox={props.hideCheckBox} />
  </div>
);

export default RegisteredCourses;
