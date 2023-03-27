import { useContext } from "react";
import { TestContext } from "../../../contexts/TestContext";
import { useForm } from "../../../hooks/useForm";
import styles from "./CreateTest.module.css";

import { QuestionItem } from "./QuestionItem";

export const CreateTest = () => {
    const { onSaveTest } = useContext(TestContext);

    const { values, changeHandler, onSubmit } = useForm({
        title: "",
        subject: "",
    }, onSaveTest);

    return (
        <section className={styles.createTest}>
            <form onSubmit={onSubmit} className={styles.createTest_form}>
                <input
                    type="text"
                    placeholder="Test Name"
                    className={styles.createTest_name}
                    name="title"
                    value={values.title}
                    onChange={changeHandler}
                ></input>
                <br></br>
                <input
                    type="text"
                    placeholder="SUBJECT"
                    name="subject"
                    value={values.subject}
                    onChange={changeHandler}
                />
                <br></br>

                <QuestionItem />

                {/* <hr className={styles.hr} />
                <input
                    className={styles.createTest_question}
                    placeholder="1. Test question"
                    name="testQuestion"
                    // value={values.testQuestion}
                    // onChange={changeHandler}
                />
                <label>
                    a:
                    <input
                        type="text"
                        name="firstAnswer"
                        // value={values.firstAnswer}
                        // onChange={changeHandler}
                    />
                </label>
                <label>
                    b:
                    <input
                        type="text"
                        name="secondAnswer"
                        // value={values.secondAnswer}
                        // onChange={changeHandler}
                    />
                </label>
                <label>
                    c:
                    <input
                        type="text"
                        name="thirdAnswer"
                        // value={values.thirdAnswer}
                        // onChange={changeHandler}
                    />
                </label>
                <label>
                    d:
                    <input
                        type="text"
                        name="fourthAnswer"
                        // value={values.fourthAnswer}
                        // onChange={changeHandler}
                    />
                </label> */}

                {/* <input type="submit" value="Add Question" /> */}
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
};
