import css from './BottomMenu.module.css';
import { useContext } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import { GrFavorite } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { AuthContext } from '../../../../App';

const BottomMenu = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const authenticationInfo = useContext(AuthContext);
    const verified: boolean = location.state?.verified ? true : authenticationInfo?.isAuthenticated ? true : false;

    const navigation = (route: string , title: string) => {
        navigate(route , {state: {title: title}})
    }

    return (
        <div className={css.bottomMenuContainer}>
            <section className={css.menuNavigation} onClick={() => navigation('/' , '')}>
                <AiOutlineHome className={css.navigationIcon}/>
                <p className={css.navigationTitle}>خانه</p>
            </section>
            <section className={css.menuNavigation} onClick={() => navigation('/favorites' , 'علاقه مندی ها')}>
                <GrFavorite className={css.navigationIcon}/>
                <p className={css.navigationTitle}>علاقه مندی ها</p>
            </section>
            <section className={css.menuNavigation} onClick={() => navigation('/wallet' , 'کیف پول')}>
                <IoWalletOutline className={css.navigationIcon}/>
                <p className={css.navigationTitle}>کیف پول</p>
            </section>
            <section className={css.menuNavigation} onClick={() => navigation('/account' , 'حساب کاربری')}>
                <BiUser className={css.navigationIcon}/>
                <p className={css.navigationTitle}>
                    {verified ? 'حساب کاربری' : 'ورود / ثبت نام'}
                </p>
            </section>
        </div>
    )
}

export default BottomMenu;