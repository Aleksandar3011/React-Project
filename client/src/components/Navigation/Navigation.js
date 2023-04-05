import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import styles from "./Navigation.module.css";
import logo from "../../images/logo.png";
export const Navigation = () => {
    const { isAuthenticated, userEmail, userType } = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <div className={styles.header_nav}>
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
                        <Link to="/tests">Tests</Link>
                    </li>


                    {isAuthenticated && (
                    <li>
                        <Link to="/test/create">Create Test</Link>
                    </li> 
                    )}


                    <li>
                        <Link to="/teachers">Teachers</Link>
                    </li>
                    {isAuthenticated && userType === "teacher" && (
                        <li>
                            <Link to="/teachers/create">Create Teacher</Link>
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
                    <div className={styles.userInfo}>
                        <span className={styles.userEmail}>{userEmail}</span>
                        <span className={styles.userInfo_type}>({userType})</span>
                    </div>
                    <li className={styles.signUp}>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            )}
        </header>
    );
};
