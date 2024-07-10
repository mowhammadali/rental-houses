import SearchBox from "../../components/searchBox/SearchBox";
import css from "./Navbar.module.css";
import Menu from "../../../../components/regular/menu/Menu";
import ThemeMenu from "../../../../components/regular/dark-mode-menu/ThemeMenu";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink , useLocation } from "react-router-dom";
import { TbDoorEnter } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { AuthContext } from "../../../../App";

const Navbar = (): JSX.Element => {
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const themeMenuRef = useRef<HTMLDivElement | null>(null);
    const authenticationInfo = useContext(AuthContext);
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const [isThemeMenuOpened , setIsThemeMenuOpened] = useState<boolean>(false);

    const verified: boolean = location.state?.verified ? true : authenticationInfo?.isAuthenticated ? true : false;

    const handleClickOutsideOfAvatar = (event: MouseEvent): void => {
        const target = event.target as HTMLElement | null;

        if (
            target?.id === "open-home-menu-container" ||
            (target?.parentNode &&
                (target.parentNode as HTMLElement)?.id === "open-home-menu") ||
            (target?.parentNode &&
                (target?.parentNode as HTMLElement).id ===
                    "open-home-menu-container")
        ) {
            return;
        }

        if (!menuRef?.current?.contains(target)) {
            setIsMenuOpened(false);
        }
    };

    const handleClickOutsideOfTheme = (event: MouseEvent): void => {
        const target = event.target as HTMLElement | null;

        if (
            target?.id === "open-theme-menu-container" ||
            (target?.parentNode &&
                (target.parentNode as HTMLElement)?.id === "open-theme-menu") ||
            (target?.parentNode &&
                (target?.parentNode as HTMLElement).id ===
                    "open-theme-menu-container")
        ) {
            return;
        }

        if (!themeMenuRef?.current?.contains(target)) {
            setIsThemeMenuOpened(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideOfAvatar);
        document.addEventListener("mousedown" , handleClickOutsideOfTheme);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideOfAvatar);
            document.removeEventListener("mousedown" , handleClickOutsideOfTheme);
        }
    });

    useEffect(() => {
        return () => window.history.replaceState({}, '');
    } , [])

    return (
        <div className={css.navbarContainer}>
            <SearchBox />
            <div className={css.leftSide}>
                <div className={css.themeContainr} id="open-theme-menu-container">
                    <div 
                        className={css.fakeContainer}
                        onClick={() => setIsThemeMenuOpened(bool => !bool)}   
                    ></div>
                    <BsFillSunFill className={css.themeIcon} id="open-theme-menu"/>
                    {isThemeMenuOpened && <ThemeMenu ref={themeMenuRef}/>}
                </div>
                {verified ? (
                    <div className={css.avatar} id="open-home-menu-container">
                        <div
                            className={css.fakeContainer}
                            onClick={() => setIsMenuOpened(bool => !bool)}
                        ></div>
                        <FaUserAlt className={css.avatarIcon} id="open-home-menu" />
                        {isMenuOpened && <Menu ref={menuRef} />}
                    </div>
                ) : (
                    <NavLink to="/register" className={css.navigateContainer}>
                        <TbDoorEnter className={css.navigateIcon} />
                        <p className={css.navigate}>ورود / ثبت نام</p>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
