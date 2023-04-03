import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useForm } from "../../../hooks/useForm";
import styles from "./Login.module.css";



export const Login = () => {
    const { onLoginSubmit, isAuthenticated } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            email: '',
            password: '',
        },
        onLoginSubmit
    );

    if(isAuthenticated){
        alert('You already logged in!');

        return <Navigate to="/" />
    }

    return (
        <section className={styles.login}>
            <h1 className={styles.login_title}>Sign In</h1>
            <form className={styles.login_form} method="POST" onSubmit={onSubmit}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                    className={styles.input}
                    type="email"
                    id="email"
                    placeholder="ivan.ivanov@abv.bg"
                    name='email'
                    value={values.email}
                    onChange={changeHandler}
                />

                <label className={styles.label} htmlFor="password">Password</label>
                <input
                    className={styles.input}
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

                <p className={styles.dontAcc}>If you don't have account click <Link to="/register">here</Link></p>
            </form>
        </section>
    );
};
