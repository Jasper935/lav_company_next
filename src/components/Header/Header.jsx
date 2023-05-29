import css from './Header.module.css'
import logo from '../../images/logo.png'
import {Layout} from "../Layout/Layout";
import {useState} from "react";
import {OrderPopUp} from "../OrderPopUp/OrderPopUp";
import {findAllByDisplayValue} from "@testing-library/react";

export const Header = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [isCallMode, setIsCallMode] = useState(true)
    const screenWidth=window.screen.width

    const onClick = () => {
        setIsFormOpen(!isFormOpen)
        setIsCallMode(true)
    }
    const nav = [{title: 'Решаем проблемы', link: '#problems'}, {
        title: 'Решаем проблемы',
        link: '#problems'
    }, {title: 'Преимущества', link: '#diffrences'}, {
        title: 'Схема работы',
        link: '#howItWorks'
    }, {
        title: 'Наша команда',
        link: '#ourCommand'
    }, {
        title: 'ЧаВо',
        link: '#questionsAnswers'
    }, {
        title: 'Отзывы',
        link: '#reviews'
    }, {
        title: 'Контакты',
        link: '#footer'
    }]
    return (
        <Layout>
            <header className={css.container}>
                <div className={css.topSide}>
                    <img src={logo} alt="logo"/>
                    <button className={css.firstBtn} onClick={() => {
                        setIsFormOpen(!isFormOpen)
                        setIsCallMode(false)
                    }}>Подать претензию
                    </button>
                    <button className={css.secondBtn} onClick={onClick}>Обратный звонок</button>
                    <div className={css.info}><a type='tel' href="">+7 (473) 200-04-86</a>
                        <p>Воронеж, Красноармейский переулок, 3А</p></div>
                </div>
                {screenWidth>767?( <nav className={css.nav}>
                    <ul className={css.navList}>{nav.map((el, i) => {
                        return <li key={i}><a className={css.navLink} href={el.link}>{el.title}</a></li>
                    })}</ul>
                </nav>):(<div></div>)}
            </header>
            {<OrderPopUp onClose={() => setIsFormOpen(false)} isVisible={isFormOpen} isCallType={isCallMode}/>}
        </Layout>)
}