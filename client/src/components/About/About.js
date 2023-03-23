
import styles from './About.module.css';

import bg from '../../images/bg.webp'
import mission from '../../images/mission-removebg-preview.png'
import values from '../../images/values-removebg-preview.png'
import vision from '../../images/vision-removebg-preview.png'
import mySelf from '../../images/mySelf.png'
import me from '../../images/me-removebg-preview.png'

export const AboutUs = () => {
    return (
        <main className={styles.aboutUs}>
            <section className={styles.aboutUs_content}>
                <div className={styles.bg_img}>
                    <img className={styles.img} src={bg} alt="BG-IMG" />
                </div>
                <article className={styles.vision}>
                    <div className={styles.vision_img}>
                        <img
                            className={styles.visionImage}
                            src={vision}
                            alt=""
                        />
                    </div>

                    <div className={styles.vision_text}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse nemo, voluptates ullam saepe consequuntur
                            a sequi solt consectetur adipisicing elit. Esse
                            nemo, voluptates ullam saepe consequuntur a sequi
                            soluta. Aut reiciendis nihil soluta iure ex, nulla
                            optio.
                        </p>
                    </div>
                </article>

                <article className={styles.mission}>
                    <div className={styles.mission_img}>
                        <img
                            className={styles.missionImage}
                            src={mission}
                            alt=""
                        />
                    </div>

                    <div className={styles.mission_text}>
                        <p>
                            Our mission is to help students and teachers to
                            reach their goals of success. Learning and creating
                            tests while having fun and being exessible to
                            everyone.
                        </p>
                    </div>
                </article>

                <article className={styles.value}>
                    <div className={styles.value_img}>
                        <img
                            className={styles.valueImage}
                            src={values}
                            alt=""
                        />
                    </div>

                    <div className={styles.value_text}>
                        <p>
                            We aim to promote interactive test solving as well
                            as access to many and varied study subjects. We also
                            want to help students find the right tutor for them,
                            thus teachers can offer a private tutor service.
                        </p>
                    </div>
                </article>
            </section>

            <section className={styles.aboutUs_mySelf}>
                <div className={styles.me}>
                    <img className={styles.meImage} src={me} alt="" />
                </div>

                <div className={styles.mySelf}>
                    <img className={styles.mySelfImage} src={mySelf} alt="" />
                </div>

                <div className={styles.aboutUs_me}>
                    <h1>Aleksandar Valchanov</h1>
                    <p>
                        I developed this platform with the goal of creating
                        affordable tests for students, teachers, and students.
                        Tests can be uploaded by teachers, even by students.
                        Education should not be boring, but interesting to be
                        accessible to everyone!.
                    </p>
                </div>
            </section>
        </main>
    );
};
