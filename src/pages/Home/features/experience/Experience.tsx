import css from './Experience.module.css';
import ExperienceSlide from '../../components/experienceSlide/ExperienceSlide';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Navigation } from 'swiper/modules';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Experience = (): JSX.Element => {
    const cards = [
        {id: 1 , image: './assets/images/experiences/experience-1.jpg' , title: 'تجربه های آشپزی' , context: 'تجربه پخت غذا های محلی'},
        {id: 2 , image: './assets/images/experiences/experience-2.jpg' , title: 'تجربه های زندگی محلی' , context: 'تجربه زندگی در شهرها و روستاهای ایران'},
        {id: 3 , image: './assets/images/experiences/experience-3.jpg' , title: 'تجربه های شهری' , context: 'گشت های شهری یک روزه'},
        {id: 4 , image: './assets/images/experiences/experience-4.jpg' , title: 'تجربه هایی در طبیعت' , context: 'گشت و گذار در طبیعت'},
        {id: 5 , image: './assets/images/experiences/experience-5.jpg' , title: 'تجربه های هیجانی' , context: 'ماجراجویی و تفریحات هیجان انگیز'},
        {id: 6 , image: './assets/images/experiences/experience-6.jpg' , title: 'تجربه های هنری' , context: 'تجربه خلق آثار هنری زیبا'},
    ]

    return (
        <div className={css.experienceContainer}>
            <div className={css.header}>
                <div className={css.info}>
                    <h2 className={css.title}>در سفر، تجربه کن</h2>
                    <p className={css.context}>رزرو تجربه و گشت های یک روزه با راهنمای ماهر و کاربلد</p>
                </div>
                <div className={css.navigationButtons}>
                    <button id='experience-swiper-button-next' className={css.nextButton}>
                        <IoIosArrowForward />
                    </button>
                    <button id='experience-swiper-button-prev' className={css.prevButton}>
                        <IoIosArrowBack />
                    </button>
                </div>
            </div>
            <>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '#experience-swiper-button-next',
                        prevEl: '#experience-swiper-button-prev',
                    }}
                    modules={[Autoplay , Navigation]}
                    className={css.mySwiper}
                >
                {
                    cards.map(card => (
                        <SwiperSlide className={css.swiperSlide} key={card.id}>
                            <ExperienceSlide {...card}/>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </>
        </div>
    )
}

export default Experience;