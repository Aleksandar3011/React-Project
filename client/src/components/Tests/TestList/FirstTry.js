/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TestContext } from "../../../contexts/TestContext";
import { v4 as uuidv4 } from "uuid";
// import { useForm } from "../../../hooks/useForm";
import styles from "./TestList.module.css";
export const TestItem = () => {
    const testId = useParams();

    const { currTest, onTestGetOne, onAnswers } = useContext(TestContext);

    const [values, setValues] = useState({});

    useEffect(() => {
        onTestGetOne(testId.testId);
    }, [testId]);

    let isQ = false;

    if (currTest.questions) {
        isQ = true;
    };


    
    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
        // const newData = {key: {[e.target.name]: e.target.value}};
        // setValues(state => Object.assign({
        //     ...state,
        //     ...newData
        // }))
        
        // setValues((state) => state.concat({ [e.target.name]: e.target.value }));
        // setAllAnswers((state) => state.concat({values}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onAnswers(values);
    };

    (values);

        return (
            <article className={styles.test}>
                <h2>{currTest.title}</h2>
                <h2>{currTest.subject}</h2>
                <form onSubmit={onSubmit}>
                {isQ &&
                    currTest.questions.map((q) => (
                        // <form onSubmit={onSubmit} key={uuidv4()}>
                            <article key={uuidv4()}>
                                <hr></hr>

                                <p type="text">
                                    {q.testQuestion}
                                </p>

                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={q.firstAnswer}
                                        checked={
                                            values.answer === q.firstAnswer
                                        }
                                        onChange={changeHandler}
                                    />
                                    {q.firstAnswer}
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={q.secondAnswer}
                                        checked={
                                            values.answer === q.secondAnswer
                                        }
                                        onChange={changeHandler}
                                    />
                                    {q.secondAnswer}
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={q.thirdAnswer}
                                        checked={
                                            values.answer === q.thirdAnswer
                                        }
                                        onChange={changeHandler}
                                    />
                                    {q.thirdAnswer}
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={q.fourthAnswer}
                                        checked={
                                            values.answer === q.fourthAnswer
                                        }
                                        onChange={changeHandler}
                                    />
                                    {q.fourthAnswer}
                                </label>
                                </article>
                        // </form>
                    ))}
                <input type="submit" value="Send" />
                </form>
            </article>
        );
};
