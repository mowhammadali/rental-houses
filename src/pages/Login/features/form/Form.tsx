import css from './Form.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Form = () => {
    const [visible , setVisible] = useState<boolean>(false);

    return (
        <form className={css.formContainer}>
            <h1 className={css.title}>ورود</h1>
            <div className={css.fields}>
                <section className={css.fieldContainer}>
                    <label className={css.fieldLable}>ایمیل</label>
                    <input type="text" className={css.field} />
                    <p className={css.fieldErrorMessage}>
                        این یک پیام تستی میباشد
                    </p>
                </section>
                <section className={css.fieldContainer}>
                    <label className={css.fieldLable}>رمز عبور</label>
                    <div className={css.passwordWrapper}>
                        <input type={visible ? 'text' : 'password'} className={css.field} />
                        {
                        visible 
                        ?
                        <FaRegEyeSlash className={css.eyeIcon} onClick={() => setVisible(bool => !bool)}/> 
                        :
                        <FaRegEye className={css.eyeIcon} onClick={() => setVisible(bool => !bool)}/>
                        }
                    </div>
                    <p className={css.fieldErrorMessage}>
                        این یک پیام تستی میباشد
                    </p>
                </section>
            </div>
            <p className={css.signup}>
                حساب کاربری ندارید؟
                <NavLink className={css.signupLink} to="/register">
                    ثبت نام
                </NavLink>
            </p>
            <button className={css.registerButton}>ورود</button>
        </form>
    );
};

export default Form;
