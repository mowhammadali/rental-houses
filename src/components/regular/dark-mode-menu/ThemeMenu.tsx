import css from './ThemeMenu.module.css';
import classNames from  'classnames';
import {forwardRef} from 'react'
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

const ThemeMenu = forwardRef<HTMLDivElement>((props , ref): JSX.Element => {
    return (
        <div className={css.themeMenuContainer} ref={ref}>
            <ul className={css.list}>
                <li>
                    <BsFillSunFill className={classNames(css.listIcon , css.active)}/>
                    <p className={classNames(css.navigate , css.active)}>روشن</p>
                </li>
                <li>
                    <FaMoon className={css.listIcon}/>
                    <p className={css.navigate}>تاریک</p>
                </li>
                <li>
                    <RiComputerFill className={css.listIcon}/>
                    <p className={css.navigate}>سیستم</p>
                </li>
            </ul>
        </div>
    )
}) 

export default ThemeMenu;