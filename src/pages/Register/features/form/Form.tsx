import css from "./Form.module.css";
import { NavLink } from "react-router-dom";

const Form = () => {
    return (
        <form className={css.formContainer}>
            <h1 className={css.title}>ثبت نام</h1>
            <div className={css.fields}>
                <section className={css.fieldContainer}>
                    <label className={css.fieldLable}>نام کاربری</label>
                    <input type="text" className={css.field} />
                    <p className={css.fieldErrorMessage}>
                        این یک پیام تستی میباشد
                    </p>
                </section>
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
            <div>
                <p className={css.rules}>
                    ورود یا ثبت نام به معنای پذیرش{" "}
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
