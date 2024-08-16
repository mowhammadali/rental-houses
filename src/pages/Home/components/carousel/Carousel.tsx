import css from "./Carousel.module.css";
import { useEffect, useState } from "react";
import { HouseType } from "../../../../types/commonTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { englishToPersian } from 'replace-persian-number';
import { calculateDiscount } from "../../../../utils/calculateDiscount/calculateDiscount";

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
                        <SwiperSlide className={css.swiperSlide} key={house.id}>
                            <div className={css.card}>
                                <img
                                    className={css.cardImage}
                                    src={house.image}
                                />
                                <div className={css.cardBody}>
                                    <section className={css.detailsWrapper}>
                                        <FaStar className={css.rateIcon}/>
                                        <p className={css.rate}>{house.rate}</p>
                                    </section>
                                    <section className={css.detailsWrapper}>
                                        <IoPeopleSharp className={css.capacityIcon}/>
                                        <p className={css.capacity}>ظرفیت {house?.details?.capacity} نفر</p>
                                    </section>
                                    <section className={css.detailsWrapper}>
                                        <HiOutlineLocationMarker className={css.locationIcon}/>
                                        <p className={css.location}>استان {house.state}، {house.city}</p>
                                    </section>
                                    {
                                        !!house.discount && 
                                        <section className={css.detailsWrapper}>
                                                <p className={css.oldPrice}>{house.price}</p>
                                                <span className={css.discount}>{house.discount}%</span>
                                        </section>

                                    }
                                    <section className={css.detailsWrapper}>
                                        <p className={css.price}>{englishToPersian(calculateDiscount(house.discount , house.price))} تومان</p>
                                        <p className={css.oneNight}>/ هرشب</p>
                                    </section>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </div>
    );
};

export default Carousel;