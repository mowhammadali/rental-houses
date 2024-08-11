import React from "react";
import useUserData from "../../../../hooks/useData/useUserData";
import css from "./MobileAccount.module.css";
import classNames from "classnames";
import Skeleton from 'react-loading-skeleton'
import { getCookie , removeCookie } from "react-use-cookie";
import { signOut } from "../../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { IoPower } from "react-icons/io5";
import { IconType } from "react-icons";

type ListType = {
    title: string;
    navigationTitle: string;
    details: string;
    path?: string;
    isExit?: boolean;
    icon: IconType | React.ComponentType;
};

const MobileAccount = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = getCookie("access_token");

    const list: ListType[] = [
        {
            title: "پروفایل",
            navigationTitle: "اطلاعات حساب کاربری",
            details: "مشاهده و ویرایش اطلاعات شخصی",
            icon: ImProfile,
            path: '/profile'
        },
        {
            title: "میزبانی اقامتگاه",
            navigationTitle: "میزبان شوید",
            details: "همین حالا شروع به کسب درآمد کنید",
            icon: MdOutlinePostAdd,
            path: '/host'
        },
        {
            title: "اعتبار",
            navigationTitle: "کیف پول",
            details: "موجودی، افزایش اعتبار",
            icon: IoWalletOutline,
            path: '/wallet'
        },
        {
            title: "دوست داشتنی ها",
            navigationTitle: "علاقه مندی ها",
            details: "بهترین های خود را با هم مقایسه کن",
            icon: GrFavorite,
            path: '/favorites'
        },
        {
            title: "",
            navigationTitle: "خروج از حساب کاربری",
            details: "",
            icon: IoPower,
            path: '',
            isExit: true,
        },
    ];

    const query = useUserData(accessToken);
    const { data, isLoading, isError } = query;

    const userSignOut = () => {
        removeCookie('access_token');
        removeCookie('refresh_token');
        dispatch(signOut());
        window.location.reload();
    }

    return (
        <div className={css.accountContainer}>
            <header className={css.header}>
                <div className={css.firstRow}>
                    {
                        isLoading 
                        ?
                        <React.Fragment>
                            <Skeleton width={50} height={50} circle/>
                            <Skeleton width={140} height={30} borderRadius={8}/>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <span className={css.userIconContainer}>
                                <BiUser className={css.userIcon} />
                            </span>
                            <h3 className={css.userName}>
                                <span className={css.hi}>سلام،</span> {data?.name}
                            </h3>
                        </React.Fragment>
                    }
                </div>
                {
                    isLoading
                    ?
                    <Skeleton width={150} height={25} borderRadius={14}/>
                    :
                    <div className={css.secondRow}>
                        <span className={css.emailVerified}>
                            <IoMdCheckmark className={css.checkedIcon} />
                            <p>ایمیل شما تایید شده است</p>
                        </span>
                    </div>
                }
            </header>
            <div className={css.body}>
                <ul className={css.list}>
                    {list?.map((item, index) => {
                        const IconComponent = item?.icon;

                        return (
                            <li key={index} className={classNames(css.item , item?.isExit && css.exit)}>
                                {
                                    isLoading
                                    ?
                                    <Skeleton width={70} height={20} borderRadius={6}/>
                                    :
                                    <p className={css.itemTitle}>{item?.title}</p>
                                }
                                {
                                    isLoading
                                    ?
                                    <Skeleton width={250} height={45} borderRadius={10}/>
                                    :
                                    <div className={css.navigation} onClick={() => item?.path ? navigate(item?.path) : userSignOut()}>
                                        <span
                                            className={css.navigationIconContainer}
                                        >
                                            <IconComponent className={classNames(css.navigationIcon , item?.isExit && css.exit)}/>
                                        </span>
                                        <div className={css.navigationInfo}>
                                            <h4 className={classNames(css.navigationTitle , item?.isExit && css.exit)}>
                                                {item?.navigationTitle}
                                            </h4>
                                            <p className={css.navigationDetails}>
                                                {item?.details}
                                            </p>
                                        </div>
                                    </div>
                                }
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MobileAccount;
