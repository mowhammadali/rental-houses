import {forwardRef} from 'react'
import css from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { IoPower } from "react-icons/io5";

const Menu = forwardRef<HTMLDivElement>((props , ref): JSX.Element => {
    return (
        <div className={css.menuContainer} ref={ref}>
            <header className={css.header}>
                <FaUserCircle className={css.userIcon}/>
                <p className={css.userName}>محمد علی مرادخانی</p>
            </header>
            <ul className={css.list}>
                <li>
                    <BiUser className={css.listIcon}/>
                    <NavLink to='/' className={css.navigate}>حساب کاربری</NavLink>
                </li>
                <li>
                    <MdOutlinePostAdd className={css.listIcon}/>
                    <NavLink to='/' className={css.navigate}>میزبان شوید</NavLink>
                </li>
                <li>
                    <IoWalletOutline className={css.listIcon}/>
                    <NavLink to='/' className={css.navigate}>کیف پول</NavLink>
                </li>
                <li>
                    <IoPower className={css.listIcon}/>
                    <NavLink to='/' className={css.navigate}>خروج</NavLink>
                </li>
            </ul>
        </div>
    )
})

export default Menu