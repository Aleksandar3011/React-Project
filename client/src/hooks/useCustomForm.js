import { useState } from "react";
import { Validation } from "../components/common/Validation";

export const useCustomForm = (initalValues, onSubmitHandler) => {
    const [values, setValues] = useState(initalValues);
    const [error, setError] = useState({});

    const changeHandler = (e) => {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
        setError(Validation(values[e.target.name], e.target.name, values));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(values.hasOwnProperty("errors")){
            delete values.errors;
        };

        for(let v of Object.values(values)){
            if(v === "" && !values.hasOwnProperty("owner")){
                alert("You cannot send empty values!");
                return;
            };
        };

        if(Object.keys(error).length === 0){
            onSubmitHandler(values);
            setValues(initalValues);
        };

    };

    const changeValues = (newValues) => {
        
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
        error
    };
};
