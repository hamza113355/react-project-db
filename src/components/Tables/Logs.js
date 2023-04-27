import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import StudentsContext from '../../context/students';

const Logs = () => {
   const { classesData } = useContext(StudentsContext);
   console.log(classesData);

  return (
    <div className="table-container" style={{overflowY: "scroll" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px"}}>
          <div>
            <Link to="/"><button>Menu</button></Link>
          </div>
          <div style={{marginLeft: "100px"}}>
            <Link to="/enroll-class"><button>Enroll class</button></Link>
          </div>
      </div>  
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Log#</th>
              <th>User Name</th>
              <th>OP Time</th>
              <th>Table Name</th>
              <th>Operation</th>
              <th>Tuple KeyValue</th>
            </tr>
          </thead>
          <tbody>
          {classesData.map((student, index) => (
              <tr key={index}>
                <td>{student.Class_ID}</td>
                <td>{student.Dept_Code}</td>
                <td>{student.Course_ID}</td>
                <td>{student.Sec_ID}</td>
                <td>{student.Year}</td>
                <td>{student.Semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Logs;
