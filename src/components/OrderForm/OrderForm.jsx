import css from './OrderForm.module.css'
import {useEffect, useState} from "react";
import {useCreateOrder} from "../../hooks/useOrders";
import {Notification} from "../Notification/Notification";

export const OrderForm = ({withName}) => {
    const [phone, setPhone] = useState('')
    const [isPhoneValid, setIsPhoneValid] = useState(false)
    const [isErrorMessage, setIsErrorMessage] = useState(false)
    const [name, setName] = useState('')
    const [isNotifVisible, setIsNotifVisible] = useState(true)
    const mobile = window.screen.width < 768
    useEffect(() => {
        if (phone.length >= 8) {
            setIsPhoneValid(true)
        } else {
            setIsPhoneValid(false)
        }
    }, [phone])

    const onClick = () => {
        if (!isPhoneValid) {
            setIsErrorMessage(true)
        } else {
            createOrder()
            setIsErrorMessage(false)
        }
    }
    //api
    const {createOrder} = useCreateOrder('', phone, name, '')


    return (
        <>
            <form className={css.form}>
                {withName && <input placeholder='Ваше имя' className={css.input} value={name} type="text" name='name'
                                    onChange={({target}) => setName(target.value)}/>}
                <input placeholder='+7(___) ___-__-__' className={css.input} value={phone} type="tel" name='tel'
                       onChange={({target}) => setPhone(target.value)}/>
                <button type={'button'} className={css.button} onClick={onClick}>Оставить заявку</button>
                {!isPhoneValid && isErrorMessage && <p className={css.error}>Введите не меньше 8 символов</p>}


            </form>
            {isNotifVisible && <Notification
                message={'Ваша заявка принята в обработку, ожидайте звонок по номеру, указанному в заявке'}
                closeWindow={() => {
                    console.log('CLK')
                    setIsNotifVisible(false)
                }}/>}
        </>

    )
}