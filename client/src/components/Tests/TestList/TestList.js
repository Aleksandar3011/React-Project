/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { TestContext } from "../../../contexts/TestContext";

import styles from "./TestList.module.css";
export const TestList = () => {
    const { allTest, onTestGetAll } = useContext(TestContext);

    useEffect(() => {
        onTestGetAll();
    }, []);

    return (
        <>
            {allTest.map((t) => (
                <article className={styles.test}>
                    <h2>{t.title}</h2>
                    <h2>{t.subject}</h2>
                    <Link to={`/test/${t._id}`}>Start Test</Link>
                </article>
            ))}
        </>
    );
};
