/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

// import { Teacher } from "./Teacher";
import { TeacherContext } from "../../../contexts/TeacherContext";

import styles from "./TeacherList.module.css";
import { Pagination } from "../TeacherPagination/Pagination";

export const TeacheList = () => {
    const { teachers, onTeacherGetAll } = useContext(TeacherContext);

    useEffect(() => {
        onTeacherGetAll();
    }, []);

    // let isTeacher = true;

    // if(teachers.length === 0 || !teachers){
    //     isTeacher = false
    // }

    return (
        <main className={styles.teachers}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Teachers</h1>
                    <h4 className={styles.slogan}>Some subtitle here</h4>
                </div>
                <Pagination teachers={teachers}/>
                {/* {isTeacher ? <section className={`${styles.teachers_cards} ${styles.distance}`}>
                    {teachers.map((teacher) => (
                        <Teacher key={teacher._id} teacher={teacher} />
                    ))}
                </section> : <h1 className={styles.teachers_noTeachers}>There is no teachers!</h1>} */}
        </main>
    );
};
