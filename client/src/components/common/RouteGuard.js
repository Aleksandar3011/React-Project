import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";


export const RouteGuard = () => {
    
    const { isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated){
        // const notification = new Notification("You need to be authenticated");
        alert("You need to be authenticated");

       return <Navigate to='/login' />
    }

    return <Outlet />;
}