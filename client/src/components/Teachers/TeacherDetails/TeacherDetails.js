/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { TeacherContext } from '../../../contexts/TeacherContext';
import styles from './TeacherDetails.module.css';

export const TeacherDetails = () => {

    const { teacherId } = useParams();

    const { userId } = useContext(AuthContext);
    const { currTeacher, onGetOne, onDeleteClick } = useContext(TeacherContext);

    useEffect(() => {
        onGetOne(teacherId);
    }, [teacherId])


    return(
        <section className={styles.teacher}>
            <div className={styles.teacher_imgWrapper}><img className={styles.teacher_img} src={currTeacher.imageUrl} alt="" /></div>

            
            <h2 className={styles.teacher_names}>{currTeacher.firstName} {currTeacher.secondName}</h2>

            <p className={styles.teacher_school}>School/Freelance: {currTeacher.school}</p>

            <span className={styles.teacher_city}>City: {currTeacher.city}</span>

            <span className={styles.teacher_subject}>Subject: {currTeacher.subject}</span>

            <p className={styles.teacher_desc}>Desctipiton: {currTeacher.description}</p>

            <span className={styles.teacher_price}>Price: {currTeacher.price}$</span>

            <p className={styles.teacher_contacts}>Contacts: {currTeacher.phoneNumber} or {currTeacher.email}</p>

            {currTeacher._ownerId === userId && (
                <>
                
                    <Link to={`/teacher/${currTeacher._id}/edit`}>Edit</Link>
                        <br />
                    <button onClick={() => onDeleteClick(currTeacher)}>Delete</button>
                </>
            )}
        </section>


    );
};