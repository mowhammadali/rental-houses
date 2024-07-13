import css from './ThemeMenu.module.css';
import classNames from  'classnames';
import { useContext } from 'react';
import {forwardRef} from 'react'
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { ThemeContext } from '../../../pages/Layout/Layout';

const ThemeMenu = forwardRef<HTMLDivElement>((props , ref): JSX.Element => {
    const themeParams = useContext(ThemeContext);
    const theme = themeParams?.theme;
    
    return (
        <div className={css.themeMenuContainer} ref={ref}>
            <ul className={css.list}>
                <li onClick={() => themeParams?.setTheme('light')}>
                    <BsFillSunFill className={classNames(css.listIcon , theme === 'light' && css.active)}/>
                    <p className={classNames(css.themeName , theme === 'light' && css.active)}>روشن</p>
                </li>
                <li onClick={() => themeParams?.setTheme('dark')}>
                    <FaMoon className={classNames(css.listIcon , theme === 'dark' && css.active)}/>
                    <p className={classNames(css.themeName , theme === 'dark' && css.active)}>تاریک</p>
                </li>
                <li onClick={() => themeParams?.setTheme('system')}>
                    <RiComputerFill className={classNames(css.listIcon , theme === 'system' && css.active)}/>
                    <p className={classNames(css.themeName , theme === 'system' && css.active)}>سیستم</p>
                </li>
            </ul>
        </div>
    )
}) 

export default ThemeMenu;