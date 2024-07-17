import { Navigate , Outlet , useLocation } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../App";

const PrivateRoutes = (): JSX.Element => {
    const location = useLocation();
    const authenticationInfo = useContext(AuthContext);
    const verified: boolean = location.state?.verified ? true : authenticationInfo?.isAuthenticated ? true : false;

    return verified ? <Outlet /> : <Navigate to="/unauthorized" state={location.state?.title}/>
}

export default PrivateRoutes;