import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";
import logo from "../../images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Navigation = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <div className={styles.header_nav}>
                {/* `${styles.logo} ${styles.distance}` */}
                <div className={`${styles.logo} ${styles.distance}`}>
                    <img className={styles.logo_img} src={logo} alt="" />
                </div>

                <ul className={styles.nav}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="">Tests</Link>
                    </li>
                    {/* <li>
                        <Link to="#">Subjects</Link>
                    </li> */}
                    <li>
                        <Link to="/teachers">Teachers</Link>
                    </li>
                    {isAuthenticated && (
                        <li>
                            <Link to="/teachers/create">Create a Teacher</Link>
                        </li>
                    )}
                </ul>
            </div>

            {!isAuthenticated && (
                <ul className={`${styles.nav_register} ${styles.distance}`}>
                    <li>
                        <Link to="/login">Sign In</Link>
                    </li>
                    <li className={styles.signUp}>
                        <Link to="/register">Sign Up</Link>
                    </li>
                </ul>
            )}

            {isAuthenticated && (
                <ul className={`${styles.nav_register} ${styles.distance}`}>
                    <span>{userEmail}</span>
                    <li className={styles.signUp}>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            )}
        </header>
    );
};
