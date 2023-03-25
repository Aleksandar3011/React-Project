/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './TeacherList.module.css'

export const Teacher = ({teacher}) => {

    const desc = useState(teacher.description.slice(0, 80));

    return (
        <article className={styles.teacher_card}>
                    <div className={styles.image_wrapper}>
                        <img
                            className={styles.image}
                            src={teacher.imageUrl}
                            alt="TeacherImage"
                        />
                    </div>

                    <div className={styles.teacher_content}>
                        <h3 className={styles.teacher_name}>
                            {teacher.firstName} {teacher.secondName}
                        </h3>
                        <p className={styles.teacher_subject}><b>Subject:</b> {teacher.subject}</p>
                        <p className={styles.teacher_desc}>
                            <b>Info:</b> {desc[0]}...
                        </p>
                        <p className={styles.teacher_price}><b>Price:</b> {teacher.price}$</p>
                        <p className={styles.teacher_contacts}>
                            <b>Contacts:</b> {teacher.email} <b>or</b> {teacher.phoneNumber}
                        </p>
                        <Link to={`/teacher/${teacher._id}`} className={styles.teacher_details}>
                            Details
                        </Link>
                    </div>
                </article>

                
    );
};