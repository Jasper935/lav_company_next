import css from './OrderForm.module.css'
import {useEffect, useState} from "react";

export const OrderForm = () => {
    const [phone, setPhone] = useState('')
    const [isPhoneValid, setIsPhoneValid] = useState(false)
    const [isErrorMessage, setIsErrorMessage] = useState(false)
    useEffect(() => {
        if (phone.length>=8) {
            setIsPhoneValid(true)
        } else {
            setIsPhoneValid(false)
        }
    }, [phone])
    const onChange = ({target}) => {
        setPhone(target.value)

    }
    const onClick=()=>{
        if (!isPhoneValid){
            setIsErrorMessage(true)
        }else{
            setIsErrorMessage(false)
        }
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(phone)
    }
    return (
        <form className={css.form} action="submit" onSubmit={onSubmit}>
            <input placeholder='+7(___) ___-__-__' className={css.input} type="tel" name='tel' onChange={onChange}/>
            <button type={isPhoneValid?'submit':'button'}  className={css.button} onClick={onClick}>Оставить заявку</button>
            {!isPhoneValid&& isErrorMessage&&<p className={css.error}>Введите не меньше 8 символов</p>}
        </form>
    )
}