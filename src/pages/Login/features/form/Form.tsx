import css from './Form.module.css';
import * as yup from "yup";
import classNames from 'classnames'
import PulseLoader from "react-spinners/PulseLoader";
import Notification from '../../../../components/common/notification/Notification';
import { AxiosError } from 'axios';
import { setCookie } from 'react-use-cookie';
import { useState } from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { RegisterInputstype } from '../../../../types/commonTypes';
import { loginUser } from '../../../../api/requests';

const schema = yup.object().shape({
    email: yup.string().required('لطفا ایمیل خود را وارد کنید').email('ایمیل نامعتبر است'),
    password: yup.string().required('لطفا رمز عبور خود را وارد کنید'),
});

const Form = () => {
    const { register , handleSubmit , formState: {errors} , reset } = useForm<Omit<RegisterInputstype , 'avatar' | 'name'>>({
        resolver: yupResolver(schema),
    });
    
    const [visible , setVisible] = useState<boolean>(false);
    const [isPending , setIsPending] = useState<boolean>(false);
    const [requestError , setRequestError] = useState<string>('');
    const [notificationVisibility , setNotificationVisibility] = useState<boolean>(false);
    const [messageType , setMessageType] = useState<string>('')
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Omit<RegisterInputstype , 'avatar' | 'name'>> = async (data) => {
        setIsPending(true);
        try {
            const response = await loginUser(data);

            if (response.status === 200 || response.status === 201) {
                setCookie('access_token' , response.data.access_token);
                setCookie('refresh_token' , response.data.refresh_token);
                
                setTimeout(() => {
                    setRequestError('خوش آمدید')
                    setMessageType('success');
                    setNotificationVisibility(true);
                    setIsPending(false);
                    reset();
                }, 1000);

                setTimeout(() => {
                    navigate('/' , {state: {verified: true}});
                }, 2500);
            }
        }
        catch (error) {
            reset();
            const err = error as AxiosError;
            const status: number | undefined = err?.response?.status;
            
            if (status === 404) setRequestError('درخواست مورد نظر یافت نشد');
            else if (status === 400) setRequestError('درخواست ارسالی از سوی سرویس دهنده قابل اجرا نیست');
            else if (status === 401) setRequestError('ایمیل یا رمز عبور اشتباه است');
            else setRequestError('خطایی رخ داده است');

            setMessageType('error');
            setNotificationVisibility(true);
            setIsPending(false);
        }
    }

    return (
        <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={css.header}>
                <h1 className={css.title}>ورود</h1>
                <img src="./assets/icons/main/dark-villasan-64.png" className={css.villasanIcon} alt="villasan icon"
                    onClick={() => navigate('/')}/>
            </div>
            <div className={css.fields}>
                <section className={css.fieldContainer}>
                    <label className={css.fieldLable}>ایمیل</label>
                    <input type="text" className={css.field} {...register('email')}/>
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
            <p className={css.signup}>
                حساب کاربری ندارید؟
                <NavLink className={css.signupLink} to="/register">
                    ثبت نام
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
                    'ورود'
                }
            </button>
            <Notification duration={3000} message={requestError} setVisible={setNotificationVisibility}
                visible={notificationVisibility} type={messageType}/>
        </form>
    );
};

export default Form;
