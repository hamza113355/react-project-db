import React, {useContext, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Tables = () => {

    return (
        <div className="menu-container">
            <div>
                <Link to="/enroll-graduate-student"><button style={{marginLeft: "10px"}}>Students Table</button></Link>
                <Link to="/enroll-undergraduate-student"><button style={{marginLeft: "10px"}}>Courses Table</button></Link>
                <Link to="/classes-table"><button style={{marginLeft: "10px"}}>Classes Table</button></Link>
                <Link to="/enroll-undergraduate-student"><button style={{marginLeft: "10px"}}>Grades Table</button></Link> 
            </div>
            <div>
                <Link to="/enroll-undergraduate-student"><button style={{marginLeft: "10px"}}>Logs Table</button></Link>
                <Link to="/enroll-undergraduate-student"><button style={{marginLeft: "10px"}}>Course Credits Table</button></Link>
                <Link to="/enroll-undergraduate-student"><button style={{marginLeft: "10px"}}>Pre Requisites Table</button></Link>
                <Link to="/enroll-undergraduate-student"><button style={{marginLeft: "10px"}}>Graduate Enrollments Table</button></Link>
            </div>
        </div>
    );
};

export default Tables;