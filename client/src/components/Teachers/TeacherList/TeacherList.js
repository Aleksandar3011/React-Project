import { useEffect, useState } from "react";
import styles from "./TeacherList.module.css";
import * as teachersServices from '../../../services/teachersServices';
import { Teacher } from "./Teacher";

export const TeacheList = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        teachersServices.getAll()
            .then((teacher) => {
                setTeachers(teacher);
            });
    }, []);


    return (
        <main className={styles.teachers}>
            <div className={styles.header}>
                <h1 className={styles.title}>Teachers</h1>
                <h4 className={styles.slogan}>
                    Some subtitle here
                </h4>
            </div>

            <section className={`${styles.teachers_cards} ${styles.distance}`}>
                {teachers.map(teacher => <Teacher key={teacher._id} teacher={teacher}/>)}
            </section>
        </main>
    );
};
