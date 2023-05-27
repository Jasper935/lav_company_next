import css from './CallForm.module.css'
import hammer from '../../images/hammer.png'
import {OrderForm} from "../OrderForm/OrderForm";
import {Layout} from "../Layout/Layout";

export const CallForm = () => {
    return (<Layout>
        <section className={css.callForm}>
            <div className={css.content}>
                <div className={css.left}><h3 className={css.title}>Звоните сейчас и получите бесплатную консультацию
                    нашего юриста</h3>
                    <a className={css.link} type='tel' href="">+7 (473) 200-04-86</a>

                </div>
                <img className={css.image} src={hammer} alt="hammer"/>
            </div>
            <OrderForm withName/>

        </section>
        </Layout>
    )
}