import css from "./Form.module.css";
import * as yup from "yup";
import classNames from 'classnames'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const schema = yup.object().shape({
    userName: yup.string().required('لطفا یک نام کاربری وارد کنید'),
    email: yup.string().required('لطفا ایمیل خود را وارد کنید').email('ایمیل نامعتبر است'),
    password: yup.string().required('لطفا رمز عبور خود را وارد کنید').min(8 , 'رمز عبور باید حداقل شامل هشت کارکتر باشد')
    .max(32 , 'رمز عبور طولانی است').matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/ , 'رمز عبور باید شامل حرف کوچک و بزرگ و عدد باشد'),
});

type Inputs = {
    userName: string,
    email: string,
    password: string,
}

const Form = (): JSX.Element => {
    const { register , handleSubmit , formState: {errors} , reset } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const [visible , setVisible] = useState<boolean>(false);

    const onSubmit: SubmitHandler<Inputs> = data => {
        reset();
    }

    return (
        <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={css.title}>ثبت نام</h1>
            <div className={css.fields}>
                <section className={css.fieldContainer}>
                    <label className={css.fieldLable}>نام کاربری</label>
                    <input type="text" className={css.field} {...register('userName')}/>
                    <p className={classNames(css.fieldErrorMessage , !!errors?.userName?.message && css.active)}>
                        {errors?.userName?.message}
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
            <button className={css.registerButton}>ثبت نام</button>
        </form>
    );
};

export default Form;
