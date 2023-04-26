import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const EnrollStudent = () => {
    return (
        <div className="menu-container">
            <Link to="/enroll-graduate-student"><button>Enroll Graduate Student</button></Link>
            <Link to="/enroll-undergraduate-student"><button>Enroll Undergraduate Student</button></Link>
        </div>
    );
};

export default EnrollStudent;