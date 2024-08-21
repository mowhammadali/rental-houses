import css from "./CarouselCard.module.css";
import Skeleton from 'react-loading-skeleton'
import classNames from "classnames";
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
    house: HouseType | undefined;
    isFetching: boolean;
    isLoading: boolean;
};

const CarouselCard = ({ house , isLoading , isFetching }: PropsType): JSX.Element => {
    const [isBeloved, setIsBeloved] = useState<boolean>(false);
    const isPending = isLoading || isFetching;

    return (
        <div className={classNames(css.card , isPending && css.disabledBorderTop)}>
            {
                isPending
                ?
                <Skeleton style={{width: '260px' , height: '180px'}} borderRadius={8}/>
                :
                <img className={css.cardImage} src={house?.image} />
            }
            <div className={classNames(css.cardBody , isPending && css.disabledCursor)}>
                {
                    isPending
                    ?
                    <Skeleton style={{width: '50px' , height: '20px'}} borderRadius={8}/>
                    :
                    <section className={css.detailsWrapper}>
                        <FaStar className={css.rateIcon} />
                        <p className={css.rate}>{house?.rate}</p>
                    </section>
                }
                {
                    isPending
                    ?
                    <Skeleton style={{width: '120px' , height: '20px'}} borderRadius={8}/>
                    :
                    <section className={css.detailsWrapper}>
                        <IoPeopleSharp className={css.capacityIcon} />
                        <p className={css.capacity}>
                            ظرفیت {house?.details?.capacity} نفر
                        </p>
                    </section>
                }
                {
                    isPending
                    ?
                    <Skeleton style={{width: '80px' , height: '12px'}} borderRadius={8}/>
                    :
                    <section className={css.detailsWrapper}>
                        <HiOutlineLocationMarker className={css.locationIcon} />
                        <p className={css.location}>
                            استان {house?.state}، {house?.city}
                        </p>
                    </section>
                }
                {!!house?.discount && !isPending && (
                    <section className={css.detailsWrapper}>
                        <p className={css.oldPrice}>{house?.price}</p>
                        <span className={css.discount}>{house?.discount}%</span>
                    </section>
                )}
                {
                    isPending
                    ?
                    <Skeleton style={{width: '150px' , height: '18px'}} borderRadius={8}/>
                    :
                    <section className={css.detailsWrapper}>
                        <p className={css.price}>
                            {
                                ((house?.discount !== 0 && !house?.discount) || !house?.price)
                                ?
                                null
                                :
                                englishToPersian(
                                    calculateDiscount(house?.discount, house?.price)
                                )
                            }
                            {" "}
                            تومان
                        </p>
                        <p className={css.oneNight}>/ هرشب</p>
                    </section>
                }
            </div>
            {
                !isPending &&
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
            }
        </div>
    );
};

export default CarouselCard;