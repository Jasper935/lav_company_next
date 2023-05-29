import css from './HowItWorks.module.css'
import bg from '../../images/how_it_works_bg.png'

export const HowItWorks = () => {
    const content = ['Вы предоставляете информацию о проблеме', 'Наши специалисты изучают ваш вопрос', 'Согласовываем вознаграждение и подписываем договор', 'Возвращаем вам деньги, Вы оплачиваете наши услуги',]

    return (<section className={css.container} id={'howItWorks'}>
        <div className={css.wrap}>
            <div className={css.content}>
                <h3 className={css.title}>Как мы работаем?</h3>
                <p className={css.subTitle}>Работаем по простой и понятной схеме</p>
                <ul className={css.list}>
                    {content.map((el, i)=>{
                        return(<li key={i} className={css.item}> <p><span>{i+1}. </span>{el}</p></li>)
                    })}
                </ul>
            </div>
        </div>
        <img className={css.img} src={bg} alt="girl"/>
    </section>)
}