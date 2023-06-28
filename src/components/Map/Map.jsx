import css from './Map.module.css'
import {Layout} from "../Layout/Layout";
import map from '../../images/map.png'
import mapMobile from '../../images/card_small.JPG'

export const Map = () => {

    return (
        <Layout>
            <section className={css.container}>
                <h2 className={css.title}>Мы ждем Вас в нашем офисе</h2>
                <p className={css.text}>Встреча в офисе проводится по предварительной записи</p>
                <img className={css.map} src={map} alt="map"/>
            </section>
        </Layout>
    )
}