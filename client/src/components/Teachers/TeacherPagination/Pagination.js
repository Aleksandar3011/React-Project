import { useState } from "react";
import styles from "../TeacherList/TeacherList.module.css"
import { Teacher } from "../TeacherList/Teacher";
import { Pages } from "./Pages";

export const Pagination = ({ teachers }) => {
    // const [data, setData] = useState(teachers);

    const [currentPage, setCurrentPage] = useState(1);
    const [teachersPerPage, setTeachersPerPage] = useState(5);

    const lastTeacherIndex = currentPage * teachersPerPage;
    const firstTeacherIndex = lastTeacherIndex - teachersPerPage;

    const currentTeachers = teachers.slice(firstTeacherIndex, lastTeacherIndex);

    let isTeacher = true;

    if (teachers.length === 0 || !teachers) {
        isTeacher = false;
    };

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

        // <>
        // {
        //     isTeacher ? (
        //         <section>
        //         <h1>Available users</h1>
        //         <ul>
        //         {users.map(user =>
        //         <li>{user.name}</li>)}
        //         </ul>
        //         </section>
        //         ) : (
        //             <p>No user available.</p>
        //             )
        //         }
        // </>
    );
};
