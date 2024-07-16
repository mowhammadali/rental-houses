import css from "./Places.module.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

type PlacesListType = {name: string, title: string}[];

const Places = (): JSX.Element => {
    const [places] = useState<PlacesListType>([
        {name: 'kordan' , title: 'کردان'},
        {name: 'shiraz' , title: 'شیراز'},
        {name: 'isfahan' , title: 'اصفهان'},
        {name: 'anzali' , title: 'بندر انزلی'},
        {name: 'savadkooh' , title: 'سواد کوه'},
        {name: 'chalus' , title: 'چالوس'},
        {name: 'tehran' , title: 'تهران'},
        {name: 'kashan' , title: 'کاشان'},
        {name: 'karaj' , title: 'کرج'},
        {name: 'mahmodabad' , title: 'محمود آباد'},
        {name: 'masal' , title: 'ماسال'},
        {name: 'mashad' , title: 'مشهد'},
        {name: 'ramsar' , title: 'رامسر'},
        {name: 'rasht' , title: 'رشت'},
    ])

    return (
        <div className={css.placesContainer}>
            <h3 className={css.title}>محبوب ترین مقصد ها</h3>
            <>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className={css.mySwiper}
                >
                    {
                        places.map((place , index) => (
                            <SwiperSlide className={css.swiperSlide} key={index}>
                                <div className={css.slide}>
                                    <span className={css.slideOverlay}></span>
                                    <img className={css.slideImage} src={`./assets/images/favourite-places/${place.name}.webp`}/>
                                    <p className={css.slideTitle}>{place.title}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Places;