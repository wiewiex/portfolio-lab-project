import style from "../../styles/oddaj-rzeczy/HeroForm.module.scss"

export default function Hero () {
    return (
        <main className={style.heroContainer}>
            <div className={style.heroImage}/>
            <div className={style.heroText}>
                <h2 className={style.title}>Oddaj rzeczy, których już nie chcesz <br/>POTRZEBUJĄCYM</h2>
                <img src="/assets/Decoration.svg"/>
                <div className={style.steps}>Wystarczą 4 proste kroki:</div>
                <div className={style.fourSteps}>
                    <div className={style.singleStep}>
                        <span>1</span>
                        <p>Wybierz rzeczy</p>
                    </div>
                    <div className={style.singleStep}>
                        <span>2</span>
                        <p>Spakuj je w worki</p>
                    </div>
                    <div className={style.singleStep}>
                        <span>3</span>
                        <p>Wybierz fundację</p>
                    </div>
                    <div className={style.singleStep}>
                        <span>4</span>
                        <p>Zamów kuriera</p>
                    </div>
                </div>

            </div>
        </main>
    )
}