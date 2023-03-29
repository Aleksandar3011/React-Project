/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import styles from "../TeacherCreate/TeacherCreate.module.css";
import { useForm } from "../../../hooks/useForm";
import { TeacherContext } from "../../../contexts/TeacherContext";
import { teacherServiceFactory } from "../../../services/teacherServices";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const TeacherEdit = () => {

    const {userId, isAuthenticated} = useContext(AuthContext);
    const { currTeacher, onTeacherUpdate } = useContext(TeacherContext);

    const teacherService = teacherServiceFactory();


    const { values, changeHandler, onSubmit, changeValues } = useForm(
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

    console.log(isAuthenticated);

    if(!isAuthenticated){
        alert("You are not authenticated");

        return <Navigate to='/register' />
    }

    if(userId !== currTeacher._ownerId){
        console.log(`here`);
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
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Ivan"
                    value={values.firstName}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="secondName">Last Name</label>
                <input
                    type="text"
                    name="secondName"
                    id="secondName"
                    placeholder="Ivanov"
                    value={values.secondName}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="secondName">School Name / Freelance</label>
                <input
                    type="text"
                    name="school"
                    id="school"
                    placeholder="British School Of Sofia"
                    value={values.school}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="secondName">City</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Sofia"
                    value={values.city}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Mathematics"
                    value={values.subject}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="description">Desctipiton</label>
                <textarea
                    type="text"
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={changeHandler}
                ></textarea>

                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="20"
                    value={values.price}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ivan.ivanov@abv.bg"
                    value={values.email}
                    onChange={changeHandler}
                ></input>

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+3598........"
                    value={values.phoneNumber}
                    onChange={changeHandler}
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