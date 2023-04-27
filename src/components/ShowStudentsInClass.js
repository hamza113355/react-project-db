import React, {useContext, useEffect, useState} from "react";
import StudentTable from "./StudentsTable";

const ShowStudentsInClass = () => {
    const [classId, setClassId] = useState("");

    const handleInputChange = (e) => {
        setClassId(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setClassId("");
    }
    
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "linear-gradient(to bottom right, #ff6600, #ff9933)"}}>
            <form onSubmit={handleSubmit} className="form-container">
                <label className="form-label">Enter the Class ID</label>
                <input className="form-input" value={classId} onChange={handleInputChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ShowStudentsInClass;

