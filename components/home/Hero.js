import style from "../../styles/home/Hero.module.scss"

export default function Hero () {
    return (
        <main className={style.heroContainer}>
            <div className={style.heroImage}/>
            <div className={style.heroText}>
                <h2 className={style.title}>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src="/assets/Decoration.svg"/>
                <div className={style.ctaContainer}>
                    <span>ODDAJ<br/>RZECZY</span>
                    <span>ZORGANIZUJ<br/>ZBIÓRKĘ</span>
                </div>
            </div>
        </main>
    )
}