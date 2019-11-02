import React from 'react';
import { Link } from 'react-router-dom';
import Student from '../../assets/student.jpg';

const StudentDashboard = () => (
  <div className="student-home">
    <div className="student-home__wrapper">
      <div className="student-home__wrapper__content">
        <div className="details-div">
          <div className="details-div__bio">
            <div className="bio__img">
              <img src={Student} alt="user" />
            </div>
            <div className="bio__text">
              <p>Firstname Lastname Middlename</p>
              <p>200L Electrical engineering</p>
              <p>U19EE1001</p>
              <p>Male</p>
              <p>firstname@email.com</p>
            </div>
          </div>
          <div className="details-div__courses">
            <div>
              <p>Required Credit Unit:</p>
              <span>N/A</span>
            </div>
            <div>
              <p>Registered Credit Unit:</p>
              <span>N/A</span>
            </div>
            <div>
              <p>Core credit unit:</p>
              <span>N/A</span>
            </div>
            <div>
              <p>Elective credit unit:</p>
              <span>N/A</span>
            </div>
            <div>
              <p>Status:</p>
              <span>N/A</span>
            </div>
          </div>
        </div>
        <div className="courses-div">
          <div className="session">
            <p>2019/2020 Session</p>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr className="head-row">
                  <th></th>
                  <th>Course Title</th>
                  <th className="centered">Course Code</th>
                  <th className="centered">Credit Unit</th>
                  <th className="padded">Department</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>Introduction to Electrical Engineering</td>
                  <td className="centered">EEN 101</td>
                  <td className="centered">2</td>
                  <td className="padded">Electrical Engineering</td>
                  <td>Core</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Introduction to Electrical Engineering</td>
                  <td className="centered">EEN 101</td>
                  <td className="centered">2</td>
                  <td className="padded">Electrical Engineering</td>
                  <td>Core</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="footer-div">
          <Link to="/">ADD & DROP</Link>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
