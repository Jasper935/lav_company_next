import css from './Footer.module.css'
import logo from '../../images/logoup.png'
import {Layout} from "../Layout/Layout";
export const Footer =()=>{

    const info=['Юридическая компания "АЛЕКСЕЕВА И ПАРТНЕРЫ"', 'Данные юридического лица:', 'ИНН 526209359230','ОГРН 315526200004982']
    return(
        <div className={css.container}>
        <footer id={'footer'} className={css.footer}>
            <img className={css.logo} src={logo} alt=""/>
            <ul className={css.infoList}>
                {info.map(el=>{
                    return(<li className={css.infoItem} key={el}><p>{el}</p></li>)
                })}
            </ul>
            <div className={css.contacts}>
                <a type='tel' href="tel:+74001234567">+7 400 123 45 67</a>
                <p> Адрес: город Нижний Новгород,
                    пл.Свободы, д. 6, оф 405</p>
            </div>
        </footer>
        </div>

    )
}