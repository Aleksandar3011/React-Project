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

    const onSaveQuestion = (values) => {
        setQuestions(state => state.concat({
                testQuestion: values.testQuestion,
                options: [
                    {id: 0, text: values.firstAnswer, isCorrect: true},
                    {id: 1, text: values.secondAnswer},
                    {id: 2, text: values.thirdAnswer},
                    {id: 3, text: values.fourthAnswer}
                ],
            }));
    };

    const onSaveTest = async (values) => {
        if(questions.length !== 0){
            await testService.create({...values, questions});
            setQuestions([])
            navigate('/tests')
        }else{
            alert("You need to add questions!")
        }
    };

    const onTestGetAll = async () => {
        try {
            const result = await testService.getAll();
            setAllTest(result)            
        } catch (error) {
            setAllTest(false)
        }
            
    };

    const onTestGetOne = async (id) => {
        try {
            const result = await testService.getOne(id);
            setCurrTest(result);
        } catch (error) {
            alert(error.message)
        }
    };

    const onTestDeleteClick = async (id) => {
        
        await testService.deleteTest(id);

        setAllTest(state => state.filter(t => t._id !== id));
        
        navigate('/tests')
    };


    const testContext = {
        onSaveQuestion,
        onSaveTest,
        onTestGetAll,
        onTestGetOne,
        onTestDeleteClick,
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