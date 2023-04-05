/* eslint-disable react-hooks/exhaustive-deps */
/* eslint_disable react_hooks/exhaustive_deps */

import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { TeacherContext } from "../../../contexts/TeacherContext";
import styles from "./TeacherDetails.module.css";

export const TeacherDetails = () => {
    const { teacherId } = useParams();

    const { userId } = useContext(AuthContext);
    const { currTeacher, onGetOne, onDeleteClick } = useContext(TeacherContext);

    useEffect(() => {
        onGetOne(teacherId);
    }, [teacherId]);

    return (
        <div className={styles.teacher_wrapper}>
            <section className={styles.teacher}>
                <div className={styles.teacher_imgWrapper}>
                    <img
                        className={styles.teacher_img}
                        src={currTeacher.imageUrl}
                        alt=""
                    />
                </div>

                <h2 className={styles.teacher_name}>
                    {currTeacher.firstName} {currTeacher.secondName}
                </h2>

                <p className={styles.teacher_city}>
                    <b>City:</b> {currTeacher.city}
                </p>

                <span className={styles.teacher_school}>
                    <b>School/Freelance:</b> {currTeacher.school}
                </span>

                <p className={styles.teacher_subject}>
                    <b>Subject:</b> {currTeacher.subject}
                </p>

                <p className={styles.teacher_desc}>
                    <b>Desctipiton:</b><br /> {currTeacher.description}
                </p>

                <span className={styles.teacher_price}>
                    <b>Price per lesson:</b> {currTeacher.price}$
                </span>

                <p className={styles.teacher_contacts}>
                    <b>Contacts:</b> {currTeacher.phoneNumber} <b>or</b>{" "}
                    {currTeacher.email}
                </p>

                {currTeacher._ownerId === userId && (
                    <div className={styles.teacher_btns}>
                        <Link
                            className={styles.teacher_edit}
                            to={`/teacher/${currTeacher._id}/edit`}
                        >
                            Edit
                        </Link>
                        <button
                            className={styles.teacher_delete}
                            onClick={() => onDeleteClick(currTeacher)}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};
