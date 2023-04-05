/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import styles from "../TestList/TestList.module.css"
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


import { Pages } from "./TestPages";
import { AuthContext } from "../../../contexts/AuthContext";
import { TestContext } from "../../../contexts/TestContext";

import searchImage from '../../../images/searchImage.png'
import { search } from "../Search/searchBar";

export const TestPagination = ({ allTest }) => {

    const { userId } = useContext(AuthContext);
    const { onTestDeleteClick } = useContext(TestContext)

    const [query, setQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [testsPerPage, setTestsPerPage] = useState(2);

    const lastTestIndex = currentPage * testsPerPage;
    const firstTestIndex = lastTestIndex - testsPerPage;

    
    let isTests = true;
    
    if (allTest.length === 0 || !allTest) {
        isTests = false;
    };

    const currentTests = isTests ? allTest.slice(firstTestIndex, lastTestIndex) : [];

    let tests = currentTests;

    if(query){
        tests = search(query, allTest);
    };

    return (
        <>
        <img className={styles.searchIcon} src={searchImage} alt="Search" />
                <input
                    className={styles.searchField}
                    placeholder="Search test by subject!"
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                />
            {isTests ? (
                    tests.map((t) => (
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
            <Pages totalTests={allTest.length} testsPerPage={testsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </>
    );
};
