import style from "../../styles/oddaj-rzeczy/Warning.module.scss"

export default function Warning () {

    return (
        <section className={style.warningContainer}>
            <h2>Ważne!</h2>
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </section>
    )
}
