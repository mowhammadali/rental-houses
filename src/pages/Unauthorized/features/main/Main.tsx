import css from './Main.module.css';
import { NavLink , useNavigate , useLocation } from 'react-router-dom';

const Main = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();

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