import { useState } from "react";

export const useForm = (initalValues, onSubmitHandler) => {
    const [values, setValues] = useState(initalValues);


    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);

        setValues(initalValues);
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return{
        values,
        changeHandler, 
        onSubmit,
        changeValues
    };
};