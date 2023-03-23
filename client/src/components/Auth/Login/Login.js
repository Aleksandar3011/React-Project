import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useForm } from "../../../hooks/useForm";
import styles from "./Login.module.css";



export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            email: '',
            password: '',
        },
        onLoginSubmit
    );

    return (
        <section className={styles.login}>
            <h1 className={styles.login_title}>Login</h1>
            <form className={styles.login_form} method="POST" onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="ivan.ivanov@abv.bg"
                    name='email'
                    value={values.email}
                    onChange={changeHandler}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="*******"
                    name='password'
                    value={values.password}
                    onChange={changeHandler}
                />

                <input
                    type="submit"
                    className={styles.login_btn}
                    value="Login"
                />
            </form>
        </section>
    );
};
