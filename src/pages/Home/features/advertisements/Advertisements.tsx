import useHouses from '../../../../hooks/useData/useHouse';
import Carousel from '../../components/carousel/Carousel';
import css from './Advertisements.module.css';

const Advertisements = () => {
    const carousels = [
        {id: 1 , state: 'تهران' , title: 'ویلاهای اطراف تهران'},
        {id: 2 , state: 'شیراز' , title: 'اقامتگاه های شیراز'},
        {id: 3 , state: 'گیلان' , title: 'اجاره ویلا در شهر های شمالی'},
    ];

    const query = useHouses();
    const { data , isLoading , error , isError } = query;
    
    return (
        <div className={css.advertisementContainer}>
            {
                carousels.map(carousel => <Carousel key={carousel?.id} houses={data} isLoading={isLoading} {...carousel}/>)
            }
        </div>
    )
}

export default Advertisements;