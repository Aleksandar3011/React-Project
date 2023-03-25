import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useForm } from "../../../hooks/useForm";
import styles from "./Register.module.css";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);

    const { values, changeHandler, onSubmit } = useForm(
        {
            email: "",
            password: "",
            confPassword: "",
            userType: "",
        },
        onRegisterSubmit
    );

    return (
        <section className={styles.register}>
            <h1 className={styles.register_title}>Register</h1>
            <form className={styles.register_form} onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ivan.ivanov@abv.bg"
                    value={values.email}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*******"
                    value={values.password}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="confPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confPassword"
                    name="confPassword"
                    placeholder="*******"
                    value={values.confPassword}
                    onChange={changeHandler}
                ></input>

                <div className={styles.register_userType}>
                    <label htmlFor="teacher" className={styles.register_type}>Teacher</label>
                    <input
                        className={styles.register_radio}
                        type="radio"
                        name="userType"
                        id="teacher"
                        value="teacher"
                        onChange={changeHandler}
                        checked={values.userType === "teacher"}
                    />
                    <label htmlFor="student" className={styles.register_type}>Student</label>
                    <input
                        className={styles.register_radio}
                        type="radio"
                        name="userType"
                        id="student"
                        value="student"
                        onChange={changeHandler}
                        checked={values.userType === "student"}
                    />
                </div>

                <input
                    className={styles.register_btn}
                    type="submit"
                    value="Register"
                />
            </form>
        </section>
    );
};
