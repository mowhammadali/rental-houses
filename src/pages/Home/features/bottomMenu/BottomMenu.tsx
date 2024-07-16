import css from './BottomMenu.module.css';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GrFavorite } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { AuthContext } from '../../../../App';

const BottomMenu = (): JSX.Element => {
    const location = useLocation();
    const authenticationInfo = useContext(AuthContext);
    const verified: boolean = location.state?.verified ? true : authenticationInfo?.isAuthenticated ? true : false;

    return (
        <div className={css.bottomMenuContainer}>
            <section className={css.menuNavigation}>
                <AiOutlineHome className={css.navigationIcon}/>
                <p className={css.navigationTitle}>خانه</p>
            </section>
            <section className={css.menuNavigation}>
                <GrFavorite className={css.navigationIcon}/>
                <p className={css.navigationTitle}>علاقه مندی ها</p>
            </section>
            <section className={css.menuNavigation}>
                <IoWalletOutline className={css.navigationIcon}/>
                <p className={css.navigationTitle}>کیف پول</p>
            </section>
            <section className={css.menuNavigation}>
                <BiUser className={css.navigationIcon}/>
                <p className={css.navigationTitle}>
                    {verified ? 'حساب کاربری' : 'ورود / ثبت نام'}
                </p>
            </section>
        </div>
    )
}

export default BottomMenu;