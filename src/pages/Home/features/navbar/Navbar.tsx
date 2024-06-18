import SearchBox from './components/searchBox/SearchBox';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { TbDoorEnter } from "react-icons/tb";

const Navbar = (): JSX.Element => {
    return (
        <div className={css.navbarContainer}>
            <SearchBox />
            <NavLink to="/" className={css.navigateContainer}>
                <TbDoorEnter className={css.navigateIcon}/>
                <p className={css.navigate}>ورود / ثبت نام</p>
            </NavLink>
        </div>
    )
}

export default Navbar