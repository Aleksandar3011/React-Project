import styles from "./Footer.module.css"

export const Footer = () => {
    return(
        <footer className={styles['footer']}>
                All rights reserved &copy;
                <a className={styles['anchor']} href='https://github.com/Aleksandar3011' rel="noreferrer" target='_blank'>Alexander Valchanov</a> 2022 |
                Project Defense at <a className={styles['anchor']} rel="noreferrer" href='https://softuni.bg/' target='_blank'>SoftUni</a>
            </footer>
    );
};