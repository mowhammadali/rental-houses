import Banner from "../../components/banner/Banner";
import css from './Header.module.css';

const Header = (): JSX.Element => {
    return (
        <div className={css.headerContainer}>
            <Banner />
        </div>
    )
}

export default Header;