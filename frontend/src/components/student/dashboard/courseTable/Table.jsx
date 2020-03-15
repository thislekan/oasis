import React from 'react';

import TableRow from './TableRow';
import TableHead from './TableHead';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Table = (props) => (
  <div className="courses-div">
    <div className="session">
      <p>
        Semester: <b>1st</b>
      </p>
      <p>
        Session: <b>2019/2020</b>
      </p>
    </div>
    <div className="table-div">
      <div
        className={` ${
          props.hideCheckBox ? 'table table--notEditable' : 'table'
        }`}
      >
        <TableHead />
        <div className="tbody">
          {data.map((value, index) => (
            <TableRow key={index} data={value} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Table;
