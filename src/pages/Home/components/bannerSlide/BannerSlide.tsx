import css from "./BannerSlide.module.css";
import { MdArrowBack } from "react-icons/md";

type BannerSlidePropsType = {
    title: string;
    imageSrc: string;
}

const BannerSlide = ({ title , imageSrc }: BannerSlidePropsType): JSX.Element => {
    return (
        <div className={css.slide}>
            <img
                src={imageSrc}
                className={css.slideImage}
            />
            <div className={css.slideInfo}>
                <div className={css.titleWrapper}>
                    <h1 className={css.slideTitle}>
                        {title}
                    </h1>
                </div>
                <button className={css.slideInfoButton}>
                    مشاهده
                    <MdArrowBack />
                </button>
            </div>
        </div>
    );
};

export default BannerSlide;