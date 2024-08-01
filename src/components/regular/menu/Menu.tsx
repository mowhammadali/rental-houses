import css from './Menu.module.css';
import {forwardRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { IoPower } from "react-icons/io5";
import { removeCookie } from 'react-use-cookie';
import { signOut } from '../../../features/auth/authSlice';

const Menu = forwardRef<HTMLDivElement>((props , ref): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigation = (url: string): void => {
        if (url === 'exit') {
            removeCookie('access_token');
            removeCookie('refresh_token');
            dispatch(signOut());
            window.location.reload();
            return;
        }
        navigate(url);
    }

    return (
        <div className={css.menuContainer} ref={ref}>
            <header className={css.header}>
                <FaUserCircle className={css.userIcon}/>
                <p className={css.userName}>محمد علی مرادخانی</p>
            </header>
            <ul className={css.list}>
                <li onClick={() => navigation('/')}>
                    <BiUser className={css.listIcon}/>
                    <p className={css.navigate}>حساب کاربری</p>
                </li>
                <li onClick={() => navigation('/')}>
                    <MdOutlinePostAdd className={css.listIcon}/>
                    <p className={css.navigate}>میزبان شوید</p>
                </li>
                <li onClick={() => navigation('/')}>
                    <IoWalletOutline className={css.listIcon}/>
                    <p className={css.navigate}>کیف پول</p>
                </li>
                <li onClick={() => navigation('exit')}>
                    <IoPower className={css.listIcon}/>
                    <p className={css.navigate}>خروج</p>
                </li>
            </ul>
        </div>
    )
})

export default Menu