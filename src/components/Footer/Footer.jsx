import css from './Footer.module.css'
import logo from '../../images/logo2.svg'
import {Layout} from "../Layout/Layout";
export const Footer =()=>{

    const info=['Юридическая компания "Ю-ПРАВО"', 'Данные юридического лица:', 'ИНН 323305843259','ОГРН 312366823500063']
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
                <a type='tel' href="">+7 (473) 200-04-86</a>
                <p>Адрес: город Воронеж, пер. Красноармейский, 3А БЦ "Парламент" офис 302</p>
            </div>
        </footer>
        </div>

    )
}