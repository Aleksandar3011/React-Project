/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TestContext } from "../../../contexts/TestContext";
import styles from "./TestList.module.css";
export const TestItem = () => {
    const testId = useParams();
    const { currTest, onTestGetOne } = useContext(TestContext);

    const [showFinalResult, setFinalResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        onTestGetOne(testId.testId);
    }, [testId]);

    let isQuestions = false;
    let questions = currTest.questions;
    if (questions) {
        isQuestions = true;
    }

    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinalResult(true);
        }
    };

    const onRestartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResult(false);
    };

    return (
        <div className={styles.currTest}>
            {/* // 1.Header */}
            <div className={styles.currTest_header}>
                <h1 className={styles.currTest_title}>{currTest.title}</h1>
                <h3 className={styles.currTest_owner}>
                    (Created by: {currTest.owner})
                </h3>
                <h2 className={styles.currTest_subject}>
                    Subject: {currTest.subject}
                </h2>
            </div>
            {/* //   2. Current Score */}
            {/* <h2 className={styles.currTest_currentScore}>Current Score: {score}</h2> */}

            {showFinalResult ? (
                <div className={styles.final_result}>
                    <h1 className={styles.final_title}>Final Result</h1>
                    <h2 className={styles.final_outOf}>
                        {score} out of {isQuestions && questions.length} correct
                        - ({((score / questions.length) * 100).toFixed(2)}%)
                    </h2>
                    <button className={styles.final_restartTest} onClick={() => onRestartGame()}>
                        Restart Test
                    </button>
                    <Link className={styles.final_exit} to='/tests'>Exit</Link>
                </div>
            ) : (
                <div className={styles.question_card}>
                    <h2 className={styles.currTest_outOf}>
                        Question {currentQuestion + 1} out of{" "}
                        {isQuestions && questions.length}
                    </h2>
                    <h3 className={styles.currTest_question}>
                        {isQuestions && questions[currentQuestion].testQuestion}
                    </h3>
                    <ul className={styles.currTest_ul}>
                        {isQuestions &&
                            questions[currentQuestion].options.map((option) => {
                                return (
                                    <li
                                        className={styles.currTest_li}
                                        onClick={() =>
                                            optionClicked(option.isCorrect)
                                        }
                                        key={option.id}
                                    >
                                        {option.text}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            )}
        </div>
    );
};
