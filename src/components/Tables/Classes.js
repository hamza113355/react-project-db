import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import StudentsContext from '../../context/students';

const Classes = () => {
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
              <th>Class ID</th>
              <th>Dept Code</th>
              <th>Course#</th>
              <th>Sec#</th>
              <th>Year</th>
              <th>Semester</th>
              <th>Limit</th>
              <th>Class Size</th>
              <th>Room</th>
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
                <td>{student.Limit}</td>
                <td>{student.Class_Size}</td>
                <td>{student.Room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;


/**
 * 
 * {classs.map((class, index) => (
              <tr key={index}>
                <td>{class.id}</td>
                <td>{class.name}</td>
                <td>{class.email}</td>
                <td>{class.address}</td>
                <td>{class.gender}</td>
                <td>{class.dob}</td>
                <td>{class.section}</td>
                <td>{class.semester}</td>
                <td>{class.year}</td>
              </tr>
            ))}
 */