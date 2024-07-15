import css from "./Banner.module.css";
import BannerSlide from "../bannerSlide/BannerSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Banner = (): JSX.Element => {
    return (
        <div className={css.bannerContainer}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                className={css.mySwiper}
            >
                <SwiperSlide>
                    <BannerSlide
                        title="بهترین اقامتگاه های سنتی با کمترین قیمت"
                        imageSrc="./assets/images/banner/banner2.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerSlide
                        title="لذت اقامت در دل طبیعت"
                        imageSrc="./assets/images/banner/banner1.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerSlide
                        title="تجربه بهترین سفر با ویلاسان"
                        imageSrc="./assets/images/banner/banner3.jpg"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;