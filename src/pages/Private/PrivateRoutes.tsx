import { Navigate , Outlet , useLocation } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../App";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store/rootReducer";

const PrivateRoutes = (): JSX.Element => {
    const location = useLocation();
    const authenticationInfo = useContext(AuthContext);
    const isVerivied = useSelector((state: RootStateType) => state.authState.isVerified);
    const verified: boolean = isVerivied ? true : authenticationInfo?.isAuthenticated ? true : false;

    return verified ? <Outlet /> : <Navigate to="/unauthorized" state={location.state?.title}/>
}

export default PrivateRoutes;