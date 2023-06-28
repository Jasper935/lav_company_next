import css from './Contract.module.css'
import {Header} from "../../components/Header/Header";
import contractImg from '../../images/contract.png'
import {Footer} from "../../components/Footer/Footer";
import {Select} from "../../components/Select/Select";
import {useState} from "react";
import {useCreateContract} from "../../hooks/useContract";

export const Contract = () => {
    const [select, setSelect] = useState('Паспорт гражданина Российской Федерации')

    const [contract, setContract] = useState([])

    const {createContract}=useCreateContract(contract)
    const onSubmit =async (e) => {
        e.preventDefault()
        const arr = [
            e.target.num.value,
            e.target.email.value,
            e.target.tel.value,
            e.target.lastName.value,
            e.target.name.value,
            e.target.surname.value,
            e.target.born.value,
            select,
            e.target.series.value,
            e.target.docDate.value,
            e.target.docOwner.value]
      await  setContract(arr)
      await  createContract()

    }

    return (<>
        <section className={css.container}>
            <Header isSmall={true}/>
            <div className={css.contract}>
                <div className={css.left}><h3>
                    Онлайн-договор
                </h3><p>Заполните форму ниже для подтверждения заключения договора</p></div>
                <div className={css.right}><img src={contractImg} alt="contract"/></div>
            </div>
            <form className={css.form} action="submit" onSubmit={onSubmit}>
                <label className={css.label}>Номер договора:
                    <input className={css.input} type="text" required placeholder='565110' name='num'/></label>
                <label className={css.label}>Ваш e-mail:
                    <input className={css.input} type="email" required placeholder='user@ya.ru' name='email'/></label>
                <label className={css.label}>Ваш номер телефона:
                    <input className={css.input} type="tel" required placeholder='79009009090' name='tel'/></label>
                <label className={css.label}>Фамилия:
                    <input className={css.input} type="text" required placeholder='Иванов' name='lastName'/></label>
                <label className={css.label}>Имя:
                    <input className={css.input} type="text" required placeholder='Иван' name='name'/></label>
                <label className={css.label}>Отчество:
                    <input className={css.input} type="text" required placeholder='Иванович' name='surname'/></label>
                <label className={css.label}>Дата рождения:
                    <input className={css.input} type="text" required placeholder='12.02.1966' name='born'/></label>
                <label className={css.label}>Вид документа, удостоверяющего личность:
                    <Select name={''} setSelectedItem={(v) => setSelect(v)}
                            options={["Паспорт гражданина Российской Федерации", "Паспорт гражданина СССР", "Свидетельство о рождении", "Паспорт иностранного гражданина",]}/></label>
                <label className={css.label}>Серия и номер документа:
                    <input className={css.input} type="text" required placeholder='XXXX XXXXX' name='series'/></label>
                <label className={css.label}>Дата выдачи документа:
                    <input className={css.input} type="text" required placeholder='01.01.1995' name='docDate'/></label>
                <label className={css.label}>Кем выдан документ:
                    <input className={css.input} type="text" name='docOwner'/></label>

                <button className={css.button}> Подписать онлайн договор</button>
            </form>

        </section>
        <Footer/></>)

}