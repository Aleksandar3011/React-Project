import { Link } from "react-router-dom";
import styles from "./404.module.css";

export const PageNotFound = () => {
    return (
        <div className={styles.pageNotFound}>
            <h1 className={styles.title}>404</h1>
            <div className={styles.content}>
            <p className={styles.desc}>
                We can't find the page you're looking for.
            </p>
            <Link className={styles.home} to="/">
                Home
            </Link>
            </div>
        </div>
    );
};
