import css from './OrderPopUp.module.css'
import svg from "../../images/symbol-defs.svg";
import {useEffect, useState} from "react";
import {useCreateOrder} from "../../hooks/useOrders";

export const OrderPopUp = ({isCallType, onClose, isVisible}) => {
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, settext] = useState('')

    const {createOrder} = useCreateOrder(email, phone, name, text,  isCallType)
    const onSubmit = (e) => {
        e.preventDefault()
        if (phone ) {
            createOrder()
            onClose()
        } else {
            alert('Заполните номер телефона')
        }

    }


    return (<div className={isVisible ? css.wrap : css.wrap + ' ' + css.hidden} onClick={({target, currentTarget}) => {
    }}>
        <form className={css.form} action="submit" onSubmit={onSubmit}>
            <h3>Заполните данные </h3>
            <input value={name} placeholder='Ваше имя' className={css.input} type="text" name='name'
                   onChange={(e) => setName(e.target.value)}/>
            <input value={email} placeholder='Эл. почта' className={css.input} type="email" name='email'
                   onChange={(e) => setEmail(e.target.value)}/>
            <input value={phone} placeholder='Номер телефона' className={css.input} type="tel" name='tel'
                   onChange={(e) => setPhone(e.target.value)}/>
            {!isCallType && <textarea value={text} className={css.input + ' ' + css.textArea} name="text" id=""
                                      placeholder='Кратко опишите проблему' cols="30" rows="10"
                                      onChange={(e) => settext(e.target.value)}></textarea>}
            <button className={css.button}>Заказать звонок</button>
            <svg className={css.icon} onClick={() => onClose()}>
                <use href={`${svg}#icon-close`}/>
            </svg>

        </form>
    </div>)
}