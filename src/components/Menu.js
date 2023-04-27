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
                <Link to="/show-students-in-class"><button>Show Students in a Class</button></Link>
                <Link to="/get-all-pre-reqs"><button>Get All Pre-Requisites</button></Link>
                <Link to="/enroll-student"><button>Enroll Student</button></Link>
                <Link to="/drop-graduate-student"><button>Drop Graduate Student</button></Link>
                <Link to="/delete-student"><button>Delete Student</button></Link>
            </div>
        </div>
    );
};

export default Menu;