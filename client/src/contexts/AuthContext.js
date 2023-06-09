import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";


export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [ownerOfTest, setOwnerOfTest] = useState({});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            
            navigate('/');
        } catch (error) {
            alert('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confPassword, ...registerData } = values;
        if (confPassword !== registerData.password) {
            alert('Password don\'t match!')
            return;
        };

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            alert('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();
        localStorage.removeItem('auth')
        setAuth({});
    };

    const onGetOne = async (id) => {
        const result = await authService.getOne(id);
        setOwnerOfTest(result);
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        onGetOne,
        ownerOfTest,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        userType: auth.userType,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

