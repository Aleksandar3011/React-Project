import { Link } from 'react-router-dom';

import bg from "../../images/bg.webp";

import styles from './HomeScreen.module.css';

export const HomeScreen = (props) => {
    return (
        <main className={styles.main}>

        <section className={styles.homeScreen}>
            <div className={styles.bg_img}><img className={styles.img} src={bg} alt="BG-IMG" /></div>
            
            <div className={styles.homeScreen_content}>
                <h1 className={styles.homeScreen_title}>Learn while having fun</h1>
                
                <ul className={styles.homeScreen_btn}>
                    <li><Link to='#' className={styles.create}>Create a Test</Link></li>
                    <li><Link to='#' className={styles.solve}>Solve a Test</Link></li>
                </ul>
            </div>
        </section>
    </main>
    );
};
