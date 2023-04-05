import { useContext } from "react";

import { TestContext } from "../../../contexts/TestContext";
import { useCustomForm } from "../../../hooks/useCustomForm";
import { QuestionItem } from "./QuestionItem";

import styles from "./CreateTest.module.css";
import errorStyle from "../../common/Validation.module.css"
export const CreateTest = () => {
    const { onSaveTest } = useContext(TestContext);

    const { values, changeHandler, onSubmit, error } = useCustomForm(
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
                {error.title && <p className={errorStyle.error}>{error.title}</p>}
                    <input
                        type="text"
                        placeholder="Test Name"
                        className={styles.createTest_testName}
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        required
                    />
                    <br></br>
                {error.subject && <p className={errorStyle.error}>{error.subject}</p>}
                    <input
                        type="text"
                        placeholder="SUBJECT"
                        className={styles.createTest_subject}
                        name="subject"
                        value={values.subject}
                        onChange={changeHandler}
                        required
                    />
                    <br></br>
                {error.owner && <p className={errorStyle.error}>{error.owner}</p>}
                    <input
                        type="text"
                        placeholder="First Name and Last Name"
                        className={styles.createTest_firstAndLast}
                        name="owner"
                        value={values.owner}
                        onChange={changeHandler}
                        required
                    />
                    <br></br>

                    <QuestionItem />

                    <input className={styles.createTest_submit} type="submit" value="Create" />
                </form>
            </section>
        </div>
    );
};
