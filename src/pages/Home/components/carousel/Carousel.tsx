import css from "./Carousel.module.css";
import CarouselCard from "../carouselCard/CarouselCard";
import Skeleton , { SkeletonTheme } from 'react-loading-skeleton';
import { useContext } from "react";
import { useEffect, useState } from "react";
import { HouseType } from "../../../../types/commonTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeContext } from "../../../Layout/Layout";

type PropsType = {
    houses: HouseType[];
    isLoading: boolean;
    isFetching: boolean;
    state: string;
    title: string;
};

const Carousel = ({houses, isLoading, isFetching, title, state}: PropsType): JSX.Element | null => {
    const [respectiveHouses, setRespectiveHouses] = useState<[] | HouseType[]>([]);
    const isPending = isLoading || isFetching;

    const themeDetails = useContext(ThemeContext);

    useEffect(() => {
        if (!isLoading) {
            const newHouses = houses.filter((house) => house.state === state);
            setRespectiveHouses(newHouses);
        }
    }, [isLoading]);

    return (
        <div className={css.carouselContainer}>
            <SkeletonTheme baseColor={themeDetails?.isDark ? '#1e293b' : '#e2e8f0'} highlightColor={themeDetails?.isDark ? "#334155" : '#cbd5e1'}>
                <div className={css.info}>
                    {
                        isPending
                        ?
                        <Skeleton style={{width: '150px' , height: '24px'}} borderRadius={8}/>
                        :
                        <p className={css.title}>{title}</p>
                    }
                    {
                        isPending
                        ?
                        <Skeleton style={{width: '110px' , height: '40px'}} borderRadius={8}/>
                        :
                        <button className={css.showAllButton}>مشاهده همه</button>
                    }
                </div>
                <>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[]}
                        className={css.mySwiper}
                    >
                        {respectiveHouses.map((house) => (
                            <SwiperSlide key={house.id} className={css.swiperSlide}>
                                <CarouselCard house={house} isLoading={isLoading} isFetching={isFetching}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </SkeletonTheme>
        </div>
    );
};

export default Carousel;