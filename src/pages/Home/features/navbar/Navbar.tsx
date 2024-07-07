import SearchBox from "./components/searchBox/SearchBox";
import css from "./Navbar.module.css";
import Menu from "../../../../components/regular/menu/Menu";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink , useLocation } from "react-router-dom";
import { TbDoorEnter } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../../../App";

const Navbar = (): JSX.Element => {
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const authenticationInfo = useContext(AuthContext);
    const [isMenuOpening, setIsMenuOpening] = useState<boolean>(false);

    const verified: boolean = location.state?.verified ? true : authenticationInfo?.isAuthenticated ? true : false;

    const handleClickOutside = (event: MouseEvent): void => {
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
            setIsMenuOpening(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    });

    useEffect(() => {
        return () => window.history.replaceState({}, '');
    } , [])

    return (
        <div className={css.navbarContainer}>
            <SearchBox />
            {verified ? (
                <div className={css.avatar} id="open-home-menu-container">
                    <div
                        className={css.fakeContainer}
                        onClick={() => setIsMenuOpening((bool) => !bool)}
                    ></div>
                    <FaUserAlt className={css.avatarIcon} id="open-home-menu" />
                    {isMenuOpening && <Menu ref={menuRef} />}
                </div>
            ) : (
                <NavLink to="/register" className={css.navigateContainer}>
                    <TbDoorEnter className={css.navigateIcon} />
                    <p className={css.navigate}>ورود / ثبت نام</p>
                </NavLink>
            )}
        </div>
    );
};

export default Navbar;
