import css from './Hero.module.css'
import hero from '../../images/hero.png'
import svg from '../../images/symbol-defs.svg'
import {OrderForm} from "../OrderForm/OrderForm";
import {Layout} from "../Layout/Layout";

export const Hero = () => {
    const advantages = ['Экономим Ваши деньги', 'Проводим консультации', 'Анализируем ситуацию', 'Сохраняем Ваше время']
    return (<Layout>
        <section className={css.container}>
            <div className={css.left}>
                <h1 className={css.title}>Квалифицированная помощь в <span>возврате средств</span></h1>
                <ul className={css.advantages}>{advantages.map(el => {
                    return (<li key={el}>
                        <svg
                            className={css.icon}
                        >
                            <use href={`${svg}#icon-hands`}/>
                        </svg>
                        <p>{el}</p></li>)
                })} </ul>
                <OrderForm/>
            </div>
            <div className={css.right}>
                <img src={hero} alt="hero"/>
            </div>
        </section>


    </Layout>)
}