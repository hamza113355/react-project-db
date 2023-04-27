import { createContext, useEffect, useState } from "react";
import data from '../data/data.json';
import classesDataAPI from '../data/tables/classesData.json';

const StudentsContext = createContext();

const Provider = ({ children }) => {
    const [students, setStudents] = useState([]);

    // tables directory states
    const [classesData, setClassesData] = useState([]);

    const fetchData = () => {
        setStudents(data);
    };

    console.log("Provider: ", students);

    // Tables Directory "api calls"
    useEffect(() => {
        setClassesData(classesDataAPI.classes);
    }, []);

    


    const shareData = {
        fetchData,
        students,
        setStudents,
        classesData
    };

    return (
        <StudentsContext.Provider value={shareData}>
            { children }
        </StudentsContext.Provider>
    );
}

export { Provider };

export default StudentsContext;