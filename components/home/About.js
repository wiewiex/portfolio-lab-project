import style from "../../styles/home/About.module.scss"


export default function About() {
    return (
        <section className={style.aboutContainer} id="o_nas">
            <div className={style.textContainer}>
                <h2>O nas</h2>
                <img src="/assets/Decoration.svg"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className={style.signature} src="/assets/Signature.svg"/>
            </div>
            <div className={style.imageContainer}/>
        </section>
    )
}