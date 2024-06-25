import css from './Form.module.css';
import * as yup from "yup";
import classNames from 'classnames'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const schema = yup.object().shape({
    email: yup.string().required('لطفا ایمیل خود را وارد کنید').email('ایمیل نامعتبر است'),
    password: yup.string().required('لطفا رمز عبور خود را وارد کنید'),
});

type Inputs = {
    email: string,
    password: string,
}

const Form = () => {
    const { register , handleSubmit , formState: {errors} , reset } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const [visible , setVisible] = useState<boolean>(false);

    const onSubmit: SubmitHandler<Inputs> = data => {
        reset();
    }

    return (
        <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={css.title}>ورود</h1>
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
            <button className={css.registerButton} type="submit">ورود</button>
        </form>
    );
};

export default Form;
