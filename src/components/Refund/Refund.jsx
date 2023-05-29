import css from './Refund.module.css'
import svg from "../../images/symbol-defs.svg";
import {OrderForm} from "../OrderForm/OrderForm";
import refund from "../../images/refund.png";

export const Refund=()=>{

    return(
        <section className={css.container}>
            <div className={css.wrap}>
                <div className={css.left}>

                    <h3 className={css.title}> Мы не смогли вернуть деньги? Вы нам в таком случае <br/><span>НИЧЕГО НЕ ДОЛЖНЫ</span></h3>

                    <OrderForm/>

                </div>

            </div>
            <img className={css.img} src={refund} alt="refund"/>
        </section>
    )
}
