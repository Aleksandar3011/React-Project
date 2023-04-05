/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "../TeacherList/TeacherList.module.css"
import { Teacher } from "../TeacherList/Teacher";
import { Pages } from "./TeacherPages";

export const Pagination = ({ teachers }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [teachersPerPage, setTeachersPerPage] = useState(3);

    const lastTeacherIndex = currentPage * teachersPerPage;
    const firstTeacherIndex = lastTeacherIndex - teachersPerPage;

    let isTeacher = true;
    
    if (teachers.length === 0 || !teachers) {
        isTeacher = false;
    };
    
    const currentTeachers = isTeacher ? teachers.slice(firstTeacherIndex, lastTeacherIndex) : [];

    return (
        <>
            {isTeacher ? (
                <section
                    className={`${styles.teachers_cards} ${styles.distance}`}
                >
                    {currentTeachers.map((teacher) => (
                        <Teacher key={teacher._id} teacher={teacher} />
                    ))}
                </section>
            ) : (
                <h1 className={styles.teachers_noTeachers}>
                    There is no teachers!
                </h1>
            )}
            <Pages totalTeachers={teachers.length} teachersPerPage={teachersPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </>
    );
};
