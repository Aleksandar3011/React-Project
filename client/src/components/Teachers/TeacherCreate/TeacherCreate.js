import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { TeacherContext } from "../../../contexts/TeacherContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useCustomForm } from "../../../hooks/useCustomForm";

import styles from "./TeacherCreate.module.css";
import errorStyle from "../../common/Validation.module.css"
export const TeacherCreate = () => {
    const { onTeacherCreate } = useContext(TeacherContext);
    const { userType } = useContext(AuthContext);

    const { values, changeHandler, onSubmit, error } = useCustomForm(
        {
    imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpRpxUOspVzbU446Q6RBzkX29XNZ6QEceeVpezh1ImmN85_5_mpALLJ3zqyVptUqpWmI&usqp=CAU",
    firstName: "Sashko",
    secondName: "Valchanov",
    school: "Freelance",
    city: "Sofia",
    subject: "Programming",
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    price: "20",
    email: "sashko@abv.bg",
    phoneNumber: "0899122833",
    // imageUrl: "",
    // firstName: "",
    // secondName: "",
    // school: "",
    // city: "",
    // subject: "",
    // description: "",
    // price: "",
    // email: "",
    // phoneNumber: "",
        },
        onTeacherCreate
    );

    if (userType !== "teacher") {
        alert("You need to be teacher!");
        return <Navigate to="/teachers" />;
    }

    return (
        <section className={styles.teacherCreate}>
            <h1 className={styles.teacherCreate_title}>Create Teacher</h1>
            <form className={styles.teacherCreate_form} onSubmit={onSubmit}>
                <label htmlFor="imageUrl">Image</label>
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    placeholder="Your image"
                    value={values.imageUrl}
                    onChange={changeHandler}
                    required
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
                ></input>

                <label htmlFor="description">Desctipiton</label>
                {error.description && <p className={errorStyle.error}>{error.description}</p>}
                <textarea
                    rows="10"
                    cols="20"
                    type="text"
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={changeHandler}
                    required
                ></textarea>

                <label htmlFor="price">Price per lesson</label>
                {error.price && <p className={errorStyle.error}>{error.price}</p>}
                <input
                    type="number"
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
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="08........"
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
