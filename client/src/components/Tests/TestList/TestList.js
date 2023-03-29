/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../../contexts/AuthContext";

import { TestContext } from "../../../contexts/TestContext";

import styles from "./TestList.module.css";
export const TestList = () => {
    const { userId } = useContext(AuthContext)
    const { allTest, onTestGetAll, onTestDeleteClick } = useContext(TestContext);

    useEffect(() => {
        onTestGetAll();
    }, []);

    let isTests = true;
    
    if(allTest.length === 0){
        isTests = false
    }

    return (
        <section className={styles.test_list}>
            <h1 className={styles.tests_title}>Tests</h1>
            {isTests ? (allTest.map((t) => (
                <article className={styles.test} key={uuidv4()}>
                    <h2>{t.title}</h2>
                    <h4>Subject: {t.subject}</h4>
                    <p className={styles.test_owner}>Created by: <span>{t.owner}</span></p>
                    <Link className={styles.test_startTest} to={`/test/${t._id}`}>Start Test</Link>
                    {t._ownerId === userId && (
                        <button className={styles.test_delete} onClick={() => onTestDeleteClick(t._id)}>Delete</button>
                    )}
                </article>
            ))): <h1 className={styles.test_noTest}>There is no tests!</h1>}
        </section>
    );
};
