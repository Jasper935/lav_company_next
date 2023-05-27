
import css from './Differences.module.css'
import {Layout} from "../Layout/Layout";
import svg from "../../images/symbol-defs.svg";

export const Differences=()=>{
    const content = [{
        title: 'Работаем только по договору',
        text: 'Вся работа проводится только после подписания договора',
        icon: `${svg}#icon-dif-1`
    }, {
        title: 'Предоплату никогда не просим и не берем!',
        text: 'Вся оплата производится только после успешного возврата средств',
        icon: `${svg}#icon-dif-2`
    }, {
        title: 'Официально зарегистрированы',
        text: 'Полная информация о нашей компании в открытом доступе',
        icon: `${svg}#icon-dif-3`
    },]
    return(
        <Layout>
            <section className={css.container}>
                <h2 className={css.title}>В чем отличия наших услуг?</h2>
                <p className={css.subTitle}>Почему наша компания заслуживает доверия с вашей стороны?</p>
                <ul className={css.list}>
                    {content.map(({title, text, icon})=>{
                        return(<li key={title}>
                            <svg className={css.icon}>
                                <use href={icon} />
                            </svg>

                            <h4>{title}</h4>
                            <p>{text}</p>
                        </li>)
                    })}
                </ul>
            </section>
        </Layout>
    )

}