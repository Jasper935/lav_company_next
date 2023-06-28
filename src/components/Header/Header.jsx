import css from './Header.module.css'
import logo from '../../images/logo.png'
import {Layout} from "../Layout/Layout";
import {useState} from "react";
import {OrderPopUp} from "../OrderPopUp/OrderPopUp";

import svg from "../../images/symbol-defs.svg";
import {useNavigate} from "react-router-dom";

export const Header = ({isSmall}) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [isCallMode, setIsCallMode] = useState(true)
    const [isNavBarOpen, setIsNavBarOpen] = useState(false)
    const mobile = window.screen.width<1199
const navigate=useNavigate()
    const onClick = () => {
        setIsFormOpen(!isFormOpen)
        setIsCallMode(true)
    }
    const nav = [{
        title: 'Решаем проблемы',
        link: '#problems'
    }, {title: 'Преимущества', link: '#diffrences'}, {
        title: 'Схема работы',
        link: '#howItWorks'
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
                    <img src={logo} alt="logo" onClick={()=>navigate('/')}/>
                    <button className={css.firstBtn} onClick={() => {
                        navigate('/appeal')
                    }}>Подать претензию
                    </button>
                    <button className={css.secondBtn} onClick={onClick}>Обратный звонок</button>
                    <div className={css.info}><a type='tel' href="tel:+74001234567">+7 400 123 45 67</a>
                        <p>Нижний Новгород,
                            пл.Свободы, д. 6, оф 405</p></div>
                </div>
                {!isSmall&&(!mobile? (<nav className={css.nav}>
                <ul className={css.navList}>{nav.map((el, i) => {
                    return <li key={i}><a className={css.navLink} href={el.link}>{el.title}</a></li>
                })}</ul>
            </nav>
            ) : (<>
            <svg className={css.icon} onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
                <use href={isNavBarOpen ? svg + '#icon-menu-close' : svg + '#icon-menu'}/>
            </svg>
            {isNavBarOpen && <nav className={css.nav}>
                <ul className={css.navList}>{nav.map((el, i) => {
                    return <li key={i}><a className={css.navLink} href={el.link}>{el.title}</a></li>
                })}</ul>
            </nav>}
        </>
            ))}
            </header>
            {<OrderPopUp onClose={() => setIsFormOpen(false)} isVisible={isFormOpen} isCallType={isCallMode}/>}
        </Layout>)
}