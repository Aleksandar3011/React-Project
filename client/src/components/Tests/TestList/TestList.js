/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { TestContext } from "../../../contexts/TestContext";

import styles from "./TestList.module.css";
export const TestList = () => {
    const { allTest, onTestGetAll } = useContext(TestContext);

    useEffect(() => {
        onTestGetAll();
    }, []);
    

    return (
        <>
            <h1 className={styles.tests_title}>Tests</h1>
            {allTest ? (allTest.map((t) => (
                <article className={styles.test} key={uuidv4()}>
                    <h2>{t.title}</h2>
                    <h4>Subject: {t.subject}</h4>
                    <p className={styles.test_owner}>Created by: <span>{t.owner}</span></p>
                    <Link className={styles.test_startTest} to={`/test/${t._id}`}>Start Test</Link>
                </article>
            ))): <h1>There is no tests!</h1>}
        </>
    );
};
