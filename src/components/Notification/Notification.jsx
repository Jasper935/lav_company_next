import css from './Notification.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getIsSuccess, getNotification} from "../../redux/notification-selectors";
import {useEffect} from "react";
import {setNotification} from "../../redux/notification-slice";

export const Notification = () => {
    const message = useSelector(getNotification)
    const isSuccess=useSelector(getIsSuccess)
    const dispatch=useDispatch()


    return (
        message && <div className={css.container}>
            <h2 className={isSuccess?css.title:css.titleErr}>{isSuccess?`Успешно!`:`Ошибка`}</h2>
            <p className={css.text}> {message}</p>
            <button className={css.btn} onClick={() => dispatch(setNotification({message:''}))}>Хорошо</button>
        </div>
    )
}