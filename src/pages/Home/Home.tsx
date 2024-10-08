import Navbar from './features/navbar/Navbar'
import Header from './features/header/Header';
import Advertisements from './features/advertisements/Advertisements';
import Experience from './features/experience/Experience';
import css from './Home.module.css';

const Home = (): JSX.Element => {
    return (
        <div className={css.homeContainer}>
            <Navbar />
            <Header />
            <Advertisements />
            <Experience />
        </div>
    )
}

export default Home;