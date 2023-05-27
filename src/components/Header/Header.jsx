import css from './Header.module.css'
import logo from '../../images/logo.png'
import {Layout} from "../Layout/Layout";

export const Header = () => {
    const nav = ['Решаем проблемы', 'Преимущества', 'Схема работы', 'Наша команда', 'ЧаВо', 'Отзывы', 'Контакты',]
    return (
        <Layout>
            <header className={css.container}>
                <div className={css.topSide}>
                    <img src={logo} alt="logo"/>
                    <button className={css.firstBtn}>Подать претензию</button>
                    <button className={css.secondBtn}>Обратный звонок</button>
                    <div className={css.info}><a type='tel' href="">+7 (473) 200-04-86</a>
                        <p>Воронеж, Красноармейский переулок, 3А</p></div>
                </div>
                <nav className={css.nav}>
                    <ul className={css.navList}>{nav.map((el, i) => {
                        return <li key={i}><a className={css.navLink} href="">{el}</a></li>
                    })}</ul>
                </nav>
            </header>
        </Layout>)
}