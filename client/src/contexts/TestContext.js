import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { testServiceFactory } from "../services/testService";
import { AuthContext } from "./AuthContext";

export const TestContext = createContext();

export const TestProvider = ({
    children
}) => {
    const navigate = useNavigate();

    const {token} = useContext(AuthContext)
    const testService = testServiceFactory(token)

    const [questions, setQuestions] = useState([]);
    const [currTest, setCurrTest] = useState({});
    const [allTest, setAllTest] = useState([]);
    const [answers, setAnswers] = useState([])

    const onSaveQuestion = (values) => {
        setQuestions(state => [...state, values]);
    };

    const onSaveTest = async (values) => {
        await testService.create({...values, questions});
        navigate('/tests')
    };

    const onTestGetAll = async () => {
        const result = await testService.getAll();
        setAllTest(result)
    };

    const onTestGetOne = async (id) => {
        const result = await testService.getOne(id);
        setCurrTest(result);
    };

    const onAnswers = (values) => {
        setAnswers(values)
        console.log(values);
    };

    const testContext = {
        onSaveQuestion,
        onSaveTest,
        onTestGetAll,
        onTestGetOne,
        onAnswers,
        currTest,
        questions,
        allTest
    };

    return (
        <>
            <TestContext.Provider value={testContext}>
                {children}
            </TestContext.Provider>
        </>
    );
}