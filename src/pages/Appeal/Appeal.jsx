import {useState} from "react";
import {useCreateAppeal, useCreateContract} from "../../hooks/useContract";
import css from "./Appeal.module.css";
import {Header} from "../../components/Header/Header";
import contractImg from "../../images/contract.png";
import {Select} from "../../components/Select/Select";
import {Footer} from "../../components/Footer/Footer";


export const Appeal = () => {
    const [contract, setContract] = useState([])
    const {createAppeal} = useCreateAppeal(contract)
    const onSubmit = async (e) => {
        e.preventDefault()
        const arr = [
            e.target.name.value,
            e.target.lastName.value,
            e.target.companyName.value,
            e.target.amount.value,
            e.target.email.value,
            e.target.tel.value,
            e.target.appeal.value,
]
       await setContract(arr)
      await  createAppeal()

    }

    return (<>
        <section className={css.container}>
            <Header isSmall={true}/>
            <div className={css.contract}>
                <div className={css.left}><h3>
                    Подайте претензию на компанию
                </h3><p>Заполните форму для передачи информации нашим юристам</p></div>
                <div className={css.right}><img src={contractImg} alt="contract"/></div>
            </div>
            <form className={css.form} action="submit" onSubmit={onSubmit}>
                <label className={css.label}>Ваше имя
                    <input className={css.input} type="text" required  name='name'/></label>
                <label className={css.label}>Ваша фамилия
                    <input className={css.input} type="text" required name='lastName'/></label>
                <label className={css.label}>Название или сайт компании, в которую вы инвестировали средства
                    <input className={css.input} type="text" required  name='companyName'/></label>
                <label className={css.label}>Сумма инвестиций
                    <input className={css.input} type="text" required  name='amount'/></label>
                <label className={css.label}>Ваш e-mail
                    <input className={css.input} type="email" required  name='email'/></label>
                <label className={css.label}>Ваш номер телефона
                    <input className={css.input} type="tel" required  name='tel'/></label>

                <label className={css.label}>Опишите какая возникла проблема с компанией
                    <textarea className={css.input+' '+css.textarea}  required  name='appeal'/></label>

                <button className={css.button}> Отправить информацию</button>
            </form>

        </section>
        <Footer/></>)

}