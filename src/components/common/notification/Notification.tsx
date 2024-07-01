import React , { useEffect } from 'react';
import css from './Notification.module.css';
import classNames from 'classnames';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { RiAlertFill } from "react-icons/ri";

type NotificationPropsType = {
    duration: number,
    message: string,
    type: string,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    visible: boolean,
}

const Notification  = ({duration , message , setVisible , visible , type}: NotificationPropsType):JSX.Element => {

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                setVisible(false)
             
            }, duration);
        }
    } , [visible])

    return (
        <div className={classNames(css.notificationWrapper , visible ? css.visible : css.invisible)}>
            <p className={css.message}>{message}</p>
            {
                type === 'error' 
                ?
                <RiAlertFill className={classNames(css.notificationIcon , css.errorIcon)}/>
                :
                <FaRegCircleCheck className={classNames(css.notificationIcon , css.successIcon)}/>
            }
        </div>
    )
}

export default Notification;