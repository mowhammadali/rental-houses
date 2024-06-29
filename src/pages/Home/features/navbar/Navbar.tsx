import SearchBox from './components/searchBox/SearchBox';
import css from './Navbar.module.css';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TbDoorEnter } from "react-icons/tb";
import { AuthContext } from '../../../../App';

const Navbar = (): JSX.Element => {
    const authenticationInfo = useContext(AuthContext);
    
    return (
        <div className={css.navbarContainer}>
            <SearchBox />
            <NavLink to="/register" className={css.navigateContainer}>
                <TbDoorEnter className={css.navigateIcon}/>
                <p className={css.navigate}>ورود / ثبت نام</p>
            </NavLink>
        </div>
    )
}

export default Navbar