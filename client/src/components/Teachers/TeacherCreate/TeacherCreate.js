import { useState } from 'react';
import styles from './TeacherCreate.module.css'
import * as teachersServices from '../../../services/teachersServices';
import { useNavigate } from 'react-router-dom';


export const TeacherCreate = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstName: "",
        secondName: "",
        school: "",
        city: "",
        subject: "",
        description: "",
        price: "",
        email: "",
        phoneNumber: "",
    });

    const onChangeHanlder = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        teachersServices.create(values)
        navigate('/teachers')
    };


    return (
        <section className={styles.teacherCreate}>
            <h1 className={styles.teacherCreate_title}>Create a Teacher</h1>
        <form className={styles.teacherCreate_form} onSubmit={onSubmitHandler}>

            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" placeholder="Ivan" value={values.firstName} onChange={onChangeHanlder}></input>

            <label htmlFor="secondName">Last Name</label>
            <input type="text" name="secondName" id="secondName" placeholder="Ivanov" value={values.secondName} onChange={onChangeHanlder}></input>

            <label htmlFor="secondName">School Name / Freelance</label>
            <input type="text" name="school" id="school" placeholder="British School Of Sofia" value={values.school} onChange={onChangeHanlder}></input>

            <label htmlFor="secondName">City</label>
            <input type="text" name="city" id="city" placeholder="Sofia" value={values.city} onChange={onChangeHanlder}></input>

            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" placeholder='Mathematics' value={values.v} onChange={onChangeHanlder}></input>

            <label htmlFor="description">Desctipiton</label>
            <textarea type="text" name="description" id="description" value={values.description} onChange={onChangeHanlder}></textarea>

            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price" placeholder='20' value={values.price} onChange={onChangeHanlder}></input>
            
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='ivan.ivanov@abv.bg' value={values.email} onChange={onChangeHanlder}></input>

            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder='+3598........' value={values.phoneNumber} onChange={onChangeHanlder}></input>

            <button className={styles.teacherCreate_submit}>Submit</button>
        </form>
        </section>
    );
};