/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../../contexts/AuthContext";

import { TestContext } from "../../../contexts/TestContext";

import search from '../../../images/search.png'
import styles from "./TestList.module.css";

const getFilteredItems = (query, items) => {
    let upperQuery = query.toUpperCase();
    console.log(upperQuery);
    if (!query) {
        return items;
    };
    return items.filter((test) => (test.subject.toUpperCase()).includes(upperQuery));
};

export const TestList = () => {
    const { userId } = useContext(AuthContext);
    const { allTest, onTestGetAll, onTestDeleteClick } =
        useContext(TestContext);
    const [query, setQuery] = useState("");

    useEffect(() => {
        onTestGetAll();
    }, []);

    let isTests = true;

    if (allTest.length === 0 || !allTest) {
        isTests = false;
    }

    const filteredItems = getFilteredItems(query, allTest);

    return (
        <section className={styles.test_list}>
            <h1 className={styles.tests_title}>Tests</h1>
            {/* <div className={styles.search}> */}
                {/* <label className={styles.searchTitle}>Search</label> */}
                <img className={styles.searchIcon} src={search} alt="Search" />
                <input
                    className={styles.searchField}
                    placeholder="Search test by subject!"
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                />
            {/* </div> */}
                {isTests ? (
                    filteredItems.map((t) => (
                        <article className={styles.test} key={uuidv4()}>
                            <h2>{t.title}</h2>
                            <h4>Subject: {t.subject}</h4>
                            <p className={styles.test_owner}>
                                Created by: <span>{t.owner}</span>
                            </p>
                            <Link
                                className={styles.test_startTest}
                                to={`/test/${t._id}`}
                            >
                                Start Test
                            </Link>

                            {t._ownerId === userId && (
                                <button
                                    className={styles.test_delete}
                                    onClick={() => onTestDeleteClick(t._id)}
                                >
                                    Delete
                                </button>
                            )}

                        </article>
                    ))
                ) : (
                    <h1 className={styles.test_noTest}>There is no tests!</h1>
                )}
            {/* {isTests ? (allTest.map((t) => (
                
                    <article className={styles.test} key={uuidv4()}>
                        <h2>{t.title}</h2>
                        <h4>Subject: {t.subject}</h4>
                        <p className={styles.test_owner}>Created by: <span>{t.owner}</span></p>
                        <Link className={styles.test_startTest} to={`/test/${t._id}`}>Start Test</Link>
                        {t._ownerId === userId && (
                            <button className={styles.test_delete} onClick={() => onTestDeleteClick(t._id)}>Delete</button>
                                )}
                    </article>
            ))): <h1 className={styles.test_noTest}>There is no tests!</h1>} */}
        </section>
    );
};
