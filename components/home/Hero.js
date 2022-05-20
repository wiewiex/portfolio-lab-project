import style from "../../styles/home/Hero.module.scss"

export default function Hero () {
    return (
        <main className={style.heroContainer}>
            <div className={style.heroImage}/>
            <div className={style.heroText}>
                <h2>Title</h2>
                <div>line</div>
                <div>CTA</div>
            </div>
        </main>
    )
}