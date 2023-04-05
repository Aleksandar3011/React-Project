import { useContext } from "react";

import { TestContext } from "../../../contexts/TestContext";
import { useCustomForm } from "../../../hooks/useCustomForm";

import styles from "./CreateTest.module.css";
import errorStyle from "../../common/Validation.module.css"
export const QuestionItem = () => {
    const { onSaveQuestion } = useContext(TestContext);

    const { values, changeHandler, onSubmit, error } = useCustomForm(
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
            {error.testQuestion && <p className={errorStyle.error}>{error.testQuestion}</p>}
                <input
                    className={`${styles.createTest_question} ${styles.answer}`}
                    placeholder="1. Test question"
                    name="testQuestion"
                    value={values.testQuestion}
                    onChange={changeHandler}
                    />

                <p className={styles.scrambled}>(When the test is generated the answers will be scrambled)</p>
            {error.firstAnswer && <p className={errorStyle.error}>{error.firstAnswer}</p>}

                <label>
                    a:
                    <input
                        className={`${styles.answer} ${styles.rigthAnswer}`}
                        placeholder="In this input filed enter the right answer"
                        type="text"
                        name="firstAnswer"
                        value={values.firstAnswer}
                        onChange={changeHandler}
                        />
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

                <input className={styles.saveQuestion} type="submit" value="Save Question" onClick={onSubmit}/>
        </>
    );
};
