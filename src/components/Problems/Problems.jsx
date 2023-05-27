import css from './Problems.module.css'
import svg from '../../images/symbol-defs.svg'
import {Layout} from "../Layout/Layout";

export const Problems = () => {
    const content = [{
        title: 'Forex-компании',
        text: 'Возврат средств из псевдо-брокерских компаний занимающиеся торговлей на валютном рынке',
        icon: `${svg}#icon-forex`
    }, {
        title: 'Финансовые пирамиды',
        text: 'Возврат средств из финансовых пирамид и скам-компаний',
        icon: `${svg}#icon-piramid`
    }, {
        title: 'Бинарные опционы',
        text: 'Возврат средств из компаний предлагающих ставки на бинарных опционах',
        icon: `${svg}#icon-options`
    },]
    return (<Layout>
        <section className={css.container}>
        <h2 className={css.title}>Какие проблемы мы решаем?</h2>
        <p className={css.subTitle}>Мы помогаем вывести деньги из таких организаций</p>
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
    </Layout>)
}