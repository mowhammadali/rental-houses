import css from "./Form.module.css";
import * as yup from "yup";
import classNames from 'classnames';
import PulseLoader from "react-spinners/PulseLoader";
import Notification from "../../../../components/common/notification/Notification";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { loginUser, registerUser } from "../../../../api/requests";
import { RegisterInputstype } from "../../../../types/commonTypes";
import { setCookie } from 'react-use-cookie';
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const schema = yup.object().shape({
    name: yup.string().required('لطفا یک نام کاربری وارد کنید'),
    email: yup.string().required('لطفا ایمیل خود را وارد کنید').email('ایمیل نامعتبر است'),
    password: yup.string().required('لطفا رمز عبور خود را وارد کنید').min(8 , 'رمز عبور باید حداقل شامل هشت کارکتر باشد')
    .max(32 , 'رمز عبور طولانی است').matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/ , 'رمز عبور باید شامل حرف کوچک و بزرگ و عدد باشد'),
});

const Form = (): JSX.Element => {
    const { register , handleSubmit , formState: {errors} , reset } = useForm <Omit<RegisterInputstype , 'avatar'>>({
        resolver: yupResolver(schema),
    });

    const [visible , setVisible] = useState<boolean>(false);
    const [isPending , setIsPending] = useState<boolean>(false);
    const [requestError , setRequestError] = useState<string>('');
    const [notificationVisibility , setNotificationVisibility] = useState<boolean>(false);
    const [messageType , setMessageType] = useState<string>('')
    const navigate = useNavigate();

    const onSubmit: SubmitHandler <Omit<RegisterInputstype , 'avatar'>> = async (data) => {
        const userData: RegisterInputstype = {
            avatar: "https://i.imgur.com/LDOO4Qs.jpg",
            ...data
        }
        
        setIsPending(true);

        try {
            const response = await registerUser(userData);
            if (response.status === 200 || response.status === 201) {
                getLoginPermission({
                    email: response.data?.email,
                    password: response.data?.password,
                });
            } 
        }

        catch (error) {
            const err = error as AxiosError;
            const status: number | undefined = err?.response?.status;

            if (status === 404) setRequestError('درخواست مورد نظر یافت نشد');
            else if (status === 400) setRequestError('درخواست ارسالی از سوی سرویس دهنده قابل اجرا نیست');
            else setRequestError('خطایی رخ داده است');

            setMessageType('error');
            setNotificationVisibility(true);
            setIsPending(false);
            reset();
        }
    }

    const getLoginPermission = async (userData: Omit<RegisterInputstype , 'avatar' | 'name'>) => {
        try {
            const response = await loginUser(userData);
            setCookie('access_token' , response.data.access_token);
            setCookie('refresh_token' , response.data.refresh_token);

            setTimeout(() => {
                setRequestError('ثبت نام با موفقیت انجام شد');
                setMessageType('success');
                setNotificationVisibility(true);
                setIsPending(false);
                reset();
            }, 1000);


            setTimeout(() => {
                navigate('/');
                window.location.reload();
            }, 2500);
        }

        catch (error) {
            setRequestError('خطایی رخ داده است');
            setMessageType('error');
            setNotificationVisibility(true);
            setIsPending(false);
            reset();
        }
    }

    return (
        <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={css.header}>
                <h1 className={css.title}>ثبت نام</h1>
                <img src="./assets/icons/main/dark-villasan-64.png" className={css.villasanIcon} alt="villasan icon"
                    onClick={() => navigate('/')}/>
            </div>
            <div className={css.fields}>
                <section className={css.fieldContainer}>
                    <label className={css.fieldLable}>نام کاربری</label>
                    <input type="text" className={css.field} {...register('name')}/>
                    <p className={classNames(css.fieldErrorMessage , !!errors?.name?.message && css.active)}>
                        {errors?.name?.message}
                    </p>
                </section>
                <section className={css.fieldContainer}>
                    <label className={css.fieldLable}>ایمیل</label>
                    <input type="text" className={css.field} {...register('email' , {
                        min: 5
                    })}/>
                    <p className={classNames(css.fieldErrorMessage , !!errors?.email?.message && css.active)}>
                        {errors?.email?.message}
                    </p>
                </section>
                <section className={css.fieldContainer}>
                    <label className={css.fieldLable}>رمز عبور</label>
                    <div className={css.passwordWrapper}>
                        <input type={visible ? 'text' : 'password'} className={css.field} {...register('password')}/>
                        {
                        visible 
                        ?
                        <FaRegEyeSlash className={css.eyeIcon} onClick={() => setVisible(bool => !bool)}/> 
                        :
                        <FaRegEye className={css.eyeIcon} onClick={() => setVisible(bool => !bool)}/>
                        }
                    </div>
                    <p className={classNames(css.fieldErrorMessage , !!errors?.password?.message && css.active)}>
                        {errors?.password?.message}
                    </p>
                </section>
            </div>
            <div>
                <p className={css.rules}>
                    ثبت نام به معنای پذیرش{" "}
                    <span className={css.rulesLink}>قوانین سایت</span> میباشد.
                </p>
            </div>
            <p className={css.entrance}>
                قبلا ثبت نام کرده اید؟
                <NavLink className={css.entranceLink} to="/login">
                    ورود
                </NavLink>
            </p>
            <button className={css.registerButton} type="submit">
                {
                    isPending
                    ?
                    <PulseLoader
                        color={'white'}
                        loading={isPending}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    :
                    'ثبت نام'
                }
            </button>
            <Notification duration={3000} message={requestError} setVisible={setNotificationVisibility}
                visible={notificationVisibility} type={messageType}/>
        </form>
    );
};

export default Form;
