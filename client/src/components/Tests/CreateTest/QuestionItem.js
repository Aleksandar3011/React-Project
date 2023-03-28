import { useContext } from "react";
import { TestContext } from "../../../contexts/TestContext";
import { useForm } from "../../../hooks/useForm";
import styles from "./CreateTest.module.css";

export const QuestionItem = () => {
    const { onSaveQuestion } = useContext(TestContext);

    const { values, changeHandler, onSubmit } = useForm(
        {
            testQuestion: "",
            firstAnswer: "",
            secondAnswer: "",
            thirdAnswer: "",
            fourthAnswer: "",
        }, onSaveQuestion);


    return (
        <>
            <hr className={styles.hr} />
                <input
                    className={`${styles.createTest_question} ${styles.answer}`}
                    placeholder="1. Test question"
                    name="testQuestion"
                    value={values.testQuestion}
                    onChange={changeHandler}
                />
                <label>
                    a:
                    <input
                        className={styles.answer}
                        type="text"
                        name="firstAnswer"
                        value={values.firstAnswer}
                        onChange={changeHandler}
                    /><span>RIGTH ANSWER</span>
                </label>
                <label>
                    b:
                    <input
                        className={styles.answer}
                        type="text"
                        name="secondAnswer"
                        value={values.secondAnswer}
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    c:
                    <input
                        className={styles.answer}
                        type="text"
                        name="thirdAnswer"
                        value={values.thirdAnswer}
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    d:
                    <input
                        className={styles.answer}
                        type="text"
                        name="fourthAnswer"
                        value={values.fourthAnswer}
                        onChange={changeHandler}
                    />
                </label>

                <input type="submit" value="Save Question" onClick={onSubmit}/>
        </>
    );
};
