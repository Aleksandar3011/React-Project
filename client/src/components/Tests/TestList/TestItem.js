/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TestContext } from "../../../contexts/TestContext";
import { useForm } from "../../../hooks/useForm";
import styles from "./TestList.module.css";
export const TestItem = () => {
    const testId = useParams();

    const { currTest, onTestGetOne, onAnswers } = useContext(TestContext);

    useEffect(() => {
        onTestGetOne(testId.testId);
    }, [testId]);

    let isQ = false;

    if (currTest.questions) {
        isQ = true;
    }

    const { values, changeHandler, onSubmit } = useForm(
        {
            testQuestion: '',
            answer: "",
        },
        onAnswers
    );

    console.log(values);

    return (
        <article className={styles.test}>
            <h2>{currTest.title}</h2>
            <h2>{currTest.subject}</h2>
            <form onSubmit={onSubmit}>
                {isQ &&
                    currTest.questions.map((q) => (
                        <>
                            <hr></hr>
                            <input type="text" name={q.testQuestion} value={q.testQuestion} onChange={changeHandler}></input>
                            <label>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={q.firstAnswer}
                                    checked={values.answer === q.firstAnswer}
                                    onChange={changeHandler}
                                />
                                {q.firstAnswer}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={q.secondAnswer}
                                    checked={values.answer === q.secondAnswer}
                                    onChange={changeHandler}
                                />
                                {q.secondAnswer}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={q.thirdAnswer}
                                    checked={values.answer === q.thirdAnswer}
                                    onChange={changeHandler}
                                />
                                {q.thirdAnswer}
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={q.fourthAnswer}
                                    checked={values.answer === q.fourthAnswer}
                                    onChange={changeHandler}
                                />
                                {q.fourthAnswer}
                            </label>
                        </>
                    ))}
                <input type="submit" value="Send" />
            </form>
        </article>
    );
};
