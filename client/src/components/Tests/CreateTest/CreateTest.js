import { useContext } from "react";
import { TestContext } from "../../../contexts/TestContext";
import { useForm } from "../../../hooks/useForm";
import styles from "./CreateTest.module.css";

import { QuestionItem } from "./QuestionItem";

export const CreateTest = () => {
    const { onSaveTest } = useContext(TestContext);

    const { values, changeHandler, onSubmit } = useForm(
        {
            title: "",
            subject: "",
            owner: "",
        },
        onSaveTest
    );

    return (
        <div className={styles.createTest}>
            <h1 className={styles.createTest_title}>Create Test</h1>
            <section className={styles.createTest_section}>
                <form onSubmit={onSubmit} className={styles.createTest_form}>
                    <input
                        type="text"
                        placeholder="Test Name"
                        className={styles.createTest_testName}
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                    />
                    <br></br>
                    <input
                        type="text"
                        placeholder="SUBJECT"
                        className={styles.createTest_subject}
                        name="subject"
                        value={values.subject}
                        onChange={changeHandler}
                    />
                    <br></br>
                    <input
                        type="text"
                        placeholder="First Name and Last Name"
                        className={styles.createTest_firstAndLast}
                        name="owner"
                        value={values.owner}
                        onChange={changeHandler}
                    />
                    <br></br>

                    <QuestionItem />

                    <input className={styles.createTest_submit} type="submit" value="Create" />
                </form>
            </section>
        </div>
    );
};
