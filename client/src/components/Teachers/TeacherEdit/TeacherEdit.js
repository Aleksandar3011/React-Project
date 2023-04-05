/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useCustomForm } from "../../../hooks/useCustomForm";
import { TeacherContext } from "../../../contexts/TeacherContext";
import { teacherServiceFactory } from "../../../services/teacherServices";
import { AuthContext } from "../../../contexts/AuthContext";

import errorStyle from '../../common/Validation.module.css'
import styles from "../TeacherCreate/TeacherCreate.module.css";
export const TeacherEdit = () => {

    const {userId, isAuthenticated} = useContext(AuthContext);
    const { currTeacher, onTeacherUpdate } = useContext(TeacherContext);

    const teacherService = teacherServiceFactory();


    const { values, changeHandler, onSubmit, changeValues, error } = useCustomForm(
        {
            imageUrl: "",
            firstName: "",
            secondName: "",
            school: "",
            city: "",
            subject: "",
            description: "",
            price: "",
            email: "",
            phoneNumber: "",
        },
        onTeacherUpdate
    );

    useEffect(() => {
        teacherService.getOne(currTeacher._id)
            .then(result => {
                changeValues(result);
            });
    }, [currTeacher._id]);


    if(!isAuthenticated){
        alert("You are not authenticated");

        return <Navigate to='/register' />
    };

    if(userId !== currTeacher._ownerId){
        console.log("Here");
        alert("You need to be creator on this teacher");

        return <Navigate to='/teachers' />
    };

    return (
        <section className={styles.teacherCreate}>
            <h1 className={styles.teacherCreate_title}>Edit</h1>
            <form className={styles.teacherCreate_form} onSubmit={onSubmit}>
            <label htmlFor="imageUrl">Image</label>
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    placeholder="Your image"
                    value={values.imageUrl}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="firstName">First Name</label>
                {error.firstName && <p className={errorStyle.error}>{error.firstName}</p>}
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Ivan"
                    value={values.firstName}
                    onChange={changeHandler}
                    required
                ></input>

                <label htmlFor="secondName">Last Name</label>
                {error.secondName && <p className={errorStyle.error}>{error.secondName}</p>}
                <input
                    type="text"
                    name="secondName"
                    id="secondName"
                    placeholder="Ivanov"
                    value={values.secondName}
                    onChange={changeHandler}
                    required
                ></input>

                <label htmlFor="secondName">School Name / Freelance</label>
                {error.school && <p className={errorStyle.error}>{error.school}</p>}
                <input
                    type="text"
                    name="school"
                    id="school"
                    placeholder="British School Of Sofia"
                    value={values.school}
                    onChange={changeHandler}
                    required
                ></input>

                <label htmlFor="secondName">City</label>
                {error.city && <p className={errorStyle.error}>{error.city}</p>}
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Sofia"
                    value={values.city}
                    onChange={changeHandler}
                    required
                ></input>

                <label htmlFor="subject">Subject</label>
                {error.subject && <p className={errorStyle.error}>{error.subject}</p>}
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Mathematics"
                    value={values.subject}
                    onChange={changeHandler}
                    required
                ></input>

                <label htmlFor="description">Desctipiton</label>
                {error.description && <p className={errorStyle.error}>{error.description}</p>}
                <textarea
                    type="text"
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={changeHandler}
                    required
                ></textarea>

                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="20"
                    value={values.price}
                    onChange={changeHandler}
                    required
                ></input>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ivan.ivanov@abv.bg"
                    value={values.email}
                    onChange={changeHandler}
                    required
                ></input>

                <label htmlFor="phoneNumber">Phone Number</label>
                {error.phoneNumber && <p className={errorStyle.error}>{error.phoneNumber}</p>}
                <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+3598........"
                    value={values.phoneNumber}
                    onChange={changeHandler}
                    required
                ></input>

                <input
                    className={styles.teacherCreate_submit}
                    type="submit"
                    value="Submit"
                />
            </form>
        </section>
    );
};