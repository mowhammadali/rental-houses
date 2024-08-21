import css from "./CarouselCard.module.css";
import { useState } from "react";
import { HouseType } from "../../../../types/commonTypes";
import { FaStar } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { englishToPersian } from "replace-persian-number";
import { calculateDiscount } from "../../../../utils/calculateDiscount/calculateDiscount";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

type PropsType = {
    house: HouseType;
};

const CarouselCard = ({ house }: PropsType): JSX.Element => {
    const [isBeloved, setIsBeloved] = useState<boolean>(false);

    return (
        <div className={css.card}>
            <img className={css.cardImage} src={house.image} />
            <div className={css.cardBody}>
                <section className={css.detailsWrapper}>
                    <FaStar className={css.rateIcon} />
                    <p className={css.rate}>{house.rate}</p>
                </section>
                <section className={css.detailsWrapper}>
                    <IoPeopleSharp className={css.capacityIcon} />
                    <p className={css.capacity}>
                        ظرفیت {house?.details?.capacity} نفر
                    </p>
                </section>
                <section className={css.detailsWrapper}>
                    <HiOutlineLocationMarker className={css.locationIcon} />
                    <p className={css.location}>
                        استان {house.state}، {house.city}
                    </p>
                </section>
                {!!house.discount && (
                    <section className={css.detailsWrapper}>
                        <p className={css.oldPrice}>{house.price}</p>
                        <span className={css.discount}>{house.discount}%</span>
                    </section>
                )}
                <section className={css.detailsWrapper}>
                    <p className={css.price}>
                        {englishToPersian(
                            calculateDiscount(house.discount, house.price)
                        )}{" "}
                        تومان
                    </p>
                    <p className={css.oneNight}>/ هرشب</p>
                </section>
            </div>
            <div
                className={css.likePost}
                onClick={() => setIsBeloved((prevState) => !prevState)}
            >
                {isBeloved ? (
                    <GoHeart />
                ) : (
                    <GoHeartFill className={css.filledHeartIcon} />
                )}
            </div>
        </div>
    );
};

export default CarouselCard;