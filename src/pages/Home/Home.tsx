import Navbar from './features/navbar/Navbar'
import Header from './features/header/Header';
import css from './Home.module.css';

const Home = (): JSX.Element => {
    return (
        <div className={css.homeContainer}>
            <Navbar />
            <Header />
        </div>
    )
}

export default Home