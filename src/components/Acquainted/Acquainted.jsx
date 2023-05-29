import css from './Acquainted.module.css'
import svg from "../../images/symbol-defs.svg";
import {Layout} from "../Layout/Layout";
import people_1 from '../../images/people1.jpg'
import people_2 from '../../images/people2.jpg'
import people_3 from '../../images/people3.jpg'
import people_4 from '../../images/people4.jpg'

export const Acquainted = () => {
    const content = [{
        title: 'Казаков Роман Михайлович',
        text: 'Руководитель и основатель компании. Управление и личное участие в особо сложных делах.',
        img: people_1
    }, {
        title: 'Линьков Валерий Геннадиевич',
        text: 'Координатор действий. Отвечает за распределение задач, своевременное выполнение.',
        img: people_2
    }, {
        title: 'Бойко Денис Андреевич',
        text: 'Главный юрист компании, занимается поиском оптимальных путей возврата денег.',
        img: people_3
    }, {
        title: 'Шиманская Анна Михайловна',
        text: 'Специалист по возврату денег из компаний, работающих на территории России.',
        img: people_4
    },]
    return (
        <Layout>
            <section id={'ourCommand'} className={css.container}>
                <h2 className={css.title}>Давайте знакомиться</h2>
                <p className={css.subTitle}>Перед Вами наша команда</p>
                <ul className={css.list}>
                    {content.map(({title, text, img}) => {
                        return (<li key={title}>
                            <img className={css.img} src={img} alt="human"/>

                            <h4>{title}</h4>
                            <p>{text}</p>
                        </li>)
                    })}
                </ul>
            </section>
        </Layout>
    )
}