import css from './OrderPopUp.module.css'
import svg from "../../images/symbol-defs.svg";
import {useEffect} from "react";

export const OrderPopUp = ({isCallType, onClose, isVisible}) => {

    return (<div className={isVisible ? css.wrap : css.wrap + ' ' + css.hidden} onClick={({target, currentTarget}) => {
        // if(target.value===currentTarget.value) {
        //     onClose()}

    }}>
        <form className={css.form} action="submit">
            <h3>Заполните данные </h3>
            <input placeholder='Ваше имя' className={css.input} type="text" name='name'/>
            <input placeholder='Эл. почта' className={css.input} type="email" name='email'/>
            <input placeholder='Номер телефона' className={css.input} type="tel" name='tel'/>
            {!isCallType&& <textarea className={css.input+' '+css.textArea} name="text" id="" placeholder='Кратко опишите проблему' cols="30" rows="10"></textarea>}
            <button className={css.button}>Заказать звонок</button>
            <svg className={css.icon} onClick={() => onClose()}>
                <use href={`${svg}#icon-close`}/>
            </svg>

        </form>
    </div>)
}