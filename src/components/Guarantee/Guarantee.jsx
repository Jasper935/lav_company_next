import css from './Guarantee.module.css'
import girl from '../../images/guarantee_bg.jpg'
import {OrderForm} from "../OrderForm/OrderForm";
import svg from "../../images/symbol-defs.svg";

export const Guarantee = () => {

    return (
        <section className={css.container}>
            <div className={css.wrap}>
                <div className={css.left}>

                    <h3 className={css.title}> Гарантируем высокий <span>профессионализм сотрудников</span></h3>
                    <div className={css.lawyers}>
                        <svg className={css.icon}>
                            <use href={svg + '#icon-medal'}/>
                        </svg>
                        <p>Наши адвокаты гарантируют качественное решение юридических проблем.</p>
                    </div>
                    <OrderForm/>

                </div>
                {/*<div className={css.right}>*/}

                {/*</div>*/}
            </div>
            <img className={css.img} src={girl} alt="girl"/>
        </section>
    )
}