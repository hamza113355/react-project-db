import React, {useContext, useEffect, useState} from "react";
import StudentTable from "./StudentsTable";

import StudentsContext from '../context/students';

const GetAllPrerequisites = () => {
    const [deptCode, setDeptCode] = useState("");
    const [courseId, setCourseId] = useState("");


    const handleDeptCodeChange = (e) => {
        //console.log(e.target.value);
        setDeptCode(e.target.value);
    };

    const handleCourseIdChange = (e) => {
        //console.log(e.target.value);
        setCourseId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(deptCode);
        console.log(courseId);
        setDeptCode("");
        setCourseId("");
    };
    
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "linear-gradient(to bottom right, #ff6600, #ff9933)"}}>
            <form onSubmit={handleSubmit} className="form-container">
                <label className="form-label">Enter the Department Code</label>
                <input className="form-input" value={deptCode} onChange={handleDeptCodeChange}/>

                <label className="form-label">Enter the Course ID</label>
                <input className="form-input" value={courseId} onChange={handleCourseIdChange}/>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default GetAllPrerequisites;

