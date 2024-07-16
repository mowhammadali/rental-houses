import Banner from "../../components/banner/Banner";
import css from './Header.module.css';
import Services from "../../components/services/Services";
import Places from "../../components/places/Places";

const Header = (): JSX.Element => {
    return (
        <div className={css.headerContainer}>
            <Banner />
            <Services />
            <Places />
        </div>
    )
}

export default Header;