import React, {useContext, useEffect, useState} from "react";
import StudentTable from "./StudentsTable";

import StudentsContext from '../context/students';

const DropGraduateStudent = () => {
    
    const [BId, setBId] = useState("");
    const [classId, setClassId] = useState("");


    const handleBIdChange = (e) => {
        //console.log(e.target.value);
        setBId(e.target.value);
    };

    const handleClassIdChange = (e) => {
        //console.log(e.target.value);
        setClassId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        ;
        setBId("");
        setClassId("");
    };
    
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "linear-gradient(to bottom right, #ff6600, #ff9933)"}}>
            <form onSubmit={handleSubmit} className="form-container">
                <label className="form-label">Enter the B#</label>
                <input className="form-input" value={BId} onChange={handleBIdChange}/>

                <label className="form-label">Enter the Class ID</label>
                <input className="form-input" value={classId} onChange={handleClassIdChange}/>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default DropGraduateStudent;

