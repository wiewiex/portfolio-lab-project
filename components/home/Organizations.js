import style from "../../styles/home/Organizations.module.scss"

export default function Organizations() {
    return (
        <section id="fundacja_i_organizacje" className={style.organizationsContainer}>
            <div className={style.topBox}>
                <h2>Komu pomagamy ?</h2>
                <img src="/assets/Decoration.svg"/>
                <nav>
                    <a>Fundacjom</a>
                    <a>Organizacjom pozarządowym</a>
                    <a>Lokalnym zbiórkom</a>
                </nav>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className={style.bottomBox}>
                <ul>
                    <li className={style.singleOrganization}>
                        <div className={style.leftBox}>
                            <h3>Fundacja “Dbam o Zdrowie”</h3>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <div className={style.rightBox}>
                            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </li>
                    <li className={style.singleOrganization}>
                        <div className={style.leftBox}>
                            <h3>Fundacja “Dla dzieci”</h3>
                            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        </div>
                        <div className={style.rightBox}>
                            <p>ubrania, meble, zabawki</p>
                        </div>
                    </li>
                    <li className={style.singleOrganization}>
                        <div className={style.leftBox}>
                            <h3>Fundacja “Bez domu”</h3>
                            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                        <div className={style.rightBox}>
                            <p>ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    </li>
                </ul>
                <nav>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                </nav>
            </div>
        </section>
    )
}