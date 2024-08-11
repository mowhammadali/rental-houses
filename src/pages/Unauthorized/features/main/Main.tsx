import css from './Main.module.css';
import { useContext } from 'react';
import { NavLink , useNavigate , useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../../../App';
import { RootStateType } from '../../../../store/rootReducer';

const Main = (): JSX.Element | null => {
    const navigate = useNavigate();
    const location = useLocation();
    const authenticationInfo = useContext(AuthContext);
    const isVerified = useSelector((state: RootStateType) => state.authState.isVerified);
    const verified: boolean = isVerified ? true : authenticationInfo?.isAuthenticated ? true : false;
    
    if (verified) {
        return <Navigate to="/" replace/>
    }     

    return (
        <div className={css.mainContainer}>
            <p className={css.title}>{location.state || 'ویلاسان'}</p>
            <section className={css.caption}>
                <h4>ورود یا ثبت نام</h4>
                <p>برای تجربه بهتر در فرآیند رزور اقامتگاه یا هتل در اپلیکیشن <strong>وارد شوید</strong> و یا <strong>ثبت نام</strong> کنید.</p>
            </section>
            <section className={css.navigation}>
                <p>حساب کاربری ندارید؟ <NavLink to="/register" className={css.link}>ثبت نام</NavLink></p>
                <button onClick={() => navigate('/login')}>ورود</button>
            </section>
        </div>
    )
}

export default Main;