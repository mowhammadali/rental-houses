import Banner from "../../components/banner/Banner";
import css from './Header.module.css';
import Services from "../../components/services/Services";

const Header = (): JSX.Element => {
    return (
        <div className={css.headerContainer}>
            <Banner />
            <Services />
        </div>
    )
}

export default Header;