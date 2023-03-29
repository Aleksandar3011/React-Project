import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { teacherServiceFactory } from "../services/teacherServices";
import { AuthContext } from "./AuthContext";

export const TeacherContext = createContext();

export const TeacherProvider = ({
    children
}) => {
    const {token, userType} = useContext(AuthContext)
    
    const teacherService = teacherServiceFactory(token);


    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const [currTeacher, setCurrTeacher] = useState({})

    const onTeacherCreate = async (values) => {
        if(userType !== 'teacher'){
            alert('You are not a teacher!')
            return;
        }
        await teacherService.create(values);

        navigate('/teachers')
    };

    const onTeacherGetAll = async () => {
        try {
            const result = await teacherService.getAll();
            setTeachers(result)
        } catch (error) {
            setTeachers(false)
        }
        
    };

    const onGetOne = async (teacherId) => {
        const result = await teacherService.getOne(teacherId);
        setCurrTeacher(result);
        return;
    };

    const onTeacherUpdate = async (values) => {
        const result = await teacherService.edit(values._id, values);

        setTeachers(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/teacher/${values._id}`);
    };

    const onDeleteClick = async (currTeacher) => {
        
        await teacherService.deleteTeacher(currTeacher._id);
        
        navigate('/teachers')
    };

    const teacherContextValue = {
        onTeacherCreate,
        onTeacherGetAll,
        onGetOne,
        onTeacherUpdate,
        onDeleteClick,
        teachers,
        currTeacher
    };

    return (
            <TeacherContext.Provider value={teacherContextValue}>
                {children}
            </TeacherContext.Provider>
    );
};