/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { TestContext } from "../../../contexts/TestContext";
import { TestPagination } from "../TestPagination/TestPagination";

import styles from "./TestList.module.css";
export const TestList = () => {
    const { allTest, onTestGetAll } = useContext(TestContext);

    useEffect(() => {
        onTestGetAll();
    }, []);

    return (
        <section className={styles.test_list}>
            <h1 className={styles.tests_title}>Tests</h1>
                <TestPagination allTest={allTest}/>
        </section>
    );
};
