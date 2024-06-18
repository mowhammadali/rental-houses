import Navbar from './features/navbar/Navbar'
import css from './Home.module.css';

const Home = (): JSX.Element => {
    return (
        <div className={css.homeContainer}>
            <Navbar />
        </div>
    )
}

export default Home