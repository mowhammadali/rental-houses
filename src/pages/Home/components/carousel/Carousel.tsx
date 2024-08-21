import css from "./Carousel.module.css";
import CarouselCard from "../carouselCard/CarouselCard";
import { useEffect, useState } from "react";
import { HouseType } from "../../../../types/commonTypes";
import { Swiper, SwiperSlide } from "swiper/react";

type PropsType = {
    houses: HouseType[];
    isLoading: boolean;
    state: string;
    title: string;
};

const Carousel = ({houses, isLoading, title, state}: PropsType): JSX.Element | null => {
    const [respectiveHouses, setRespectiveHouses] = useState<[] | HouseType[]>([]);

    useEffect(() => {
        if (!isLoading) {
            const newHouses = houses.filter((house) => house.state === state);
            setRespectiveHouses(newHouses);
        }
    }, [isLoading]);

    if (respectiveHouses.length === 0) return null;

    return (
        <div className={css.carouselContainer}>
            <div className={css.info}>
                <p className={css.title}>{title}</p>
                <button className={css.showAllButton}>مشاهده همه</button>
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
                            <CarouselCard house={house}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default Carousel;