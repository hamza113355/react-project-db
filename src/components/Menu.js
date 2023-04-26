import React, {useContext, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentsContext from "../context/students";

const Menu = () => {
    const { fetchData } = useContext(StudentsContext);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="menu-container">
            <h1>Student Registration System</h1>
            <div className="menu-options">
                <Link to="/tables"><button>Display tables</button></Link>
                <Link to="/enroll-student"><button>Enroll Student</button></Link>
                <Link to="/show-all-courses"><button>Show All Courses</button></Link>
                <Link to="/show-all-students"><button>Show All Students</button></Link>
            </div>
        </div>
    );
};

export default Menu;