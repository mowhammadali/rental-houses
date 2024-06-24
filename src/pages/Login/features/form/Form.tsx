import css from './Form.module.css';
import { NavLink } from 'react-router-dom';

const Form = () => {
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
                    <input type="password" className={css.field} />
                    <p className={css.fieldErrorMessage}>
                        این یک پیام تستی میباشد
                    </p>
                </section>
            </div>
            <p className={css.entrance}>
                حساب کاربری ندارید؟
                <NavLink className={css.entranceLink} to="/register">
                    ثبت نام
                </NavLink>
            </p>
            <button className={css.registerButton}>ورود</button>
        </form>
    );
};

export default Form;
