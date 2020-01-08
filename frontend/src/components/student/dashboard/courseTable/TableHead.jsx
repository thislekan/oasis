import React from 'react';

const TableHead = () => (
  <div className="thead">
    <div className="thead__wrapper">
      <div className="checkbox"></div>
      <div className="title">
        <p>Course Title</p>
      </div>
      <div className="code">
        <p>Course Code</p>
      </div>
      <div className="department centered">
        <p>Department</p>
      </div>
      <div className="unit centered">
        <p>Credit Unit</p>
      </div>
      <div className="type">
        <p>Type</p>
      </div>
    </div>
  </div>
);

export default TableHead;
