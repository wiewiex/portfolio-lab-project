import style from "../../styles/home/SimpleSteps.module.scss"

export default function SimpleSteps() {
    return(
        <section className={style.simpleStepsContainer}>
            <div className={style.title}>
                <h2>Wystarczą 4 proste kroki</h2>
                <img src="/assets/Decoration.svg"/>
            </div>
            <div className={style.steps}>
                <div className={style.singleCard}>
                    <img src="/assets/Icon-1.svg"/>
                    <h3>Wybierz rzeczy</h3>
                    <div/>
                    <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                </div>
                <div className={style.singleCard}>
                    <img src="/assets/Icon-2.svg"/>
                    <h3>Spakuj je</h3>
                    <div/>
                    <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                </div>
                <div className={style.singleCard}>
                    <img src="/assets/Icon-3.svg"/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <div/>
                    <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                </div>
                <div className={style.singleCard}>
                    <img src="/assets/Icon-4.svg"/>
                    <h3>Zamów kuriera</h3>
                    <div/>
                    <p>ubrania, zabawki,<br/>sprzęt i inne</p>
                </div>
            </div>
            <div className={style.cta}>
                <h2>ODDAJ<br/>RZECZY</h2>
            </div>
        </section>
    )
}