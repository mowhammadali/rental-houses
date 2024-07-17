import Navbar from './features/navbar/Navbar'
import Header from './features/header/Header';
import BottomMenu from './features/bottomMenu/BottomMenu';
import css from './Home.module.css';

const Home = (): JSX.Element => {
    return (
        <div className={css.homeContainer}>
            <Navbar />
            <Header />
            <BottomMenu />
        </div>
    )
}

export default Home