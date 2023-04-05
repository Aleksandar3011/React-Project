/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { TeacherContext } from "../../../contexts/TeacherContext";
import { Pagination } from "../TeacherPagination/TeacherPagination";

import styles from "./TeacherList.module.css";
export const TeacheList = () => {
    const { teachers, onTeacherGetAll } = useContext(TeacherContext);

    useEffect(() => {
        onTeacherGetAll();
    }, []);

    return (
        <main className={styles.teachers}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Teachers</h1>
                    <h4 className={styles.slogan}>Some subtitle here</h4>
                </div>
                <Pagination teachers={teachers}/>
        </main>
    );
};
