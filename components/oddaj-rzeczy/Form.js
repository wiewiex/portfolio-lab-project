import style from "../../styles/oddaj-rzeczy/Form.module.scss";
import Page1 from "./form/page1";
import Page2 from "./form/page2";
import Page3 from "./form/page3";
import Page4 from "./form/page4";
import { useState } from "react";

export default function Form () {
    const [pageNumber, setPageNumber] = useState(1);

    let currentPage;

    if (pageNumber == 1) {
        currentPage = <Page1/>
    }

    if (pageNumber == 2) {
        currentPage = <Page2/>
    }

    if (pageNumber == 3) {
        currentPage = <Page3/>
    }

    if (pageNumber == 4) {
        currentPage = <Page4/>
    }

    return(
        <>
        <section className={style.formsContainer}>
            <div className={style.header}>
                <p>Krok {pageNumber}/4</p>
            </div>
            <div className={style.mainContainer}>
                {currentPage}
            </div>
            <div className={style.footer}>
                {pageNumber == 1 ? null : <button onClick={e => setPageNumber(prevState => prevState - 1)}>Wstecz</button>}
                {pageNumber == 4 ? null :<button onClick={e => setPageNumber(prevState => prevState + 1)}>Dalej</button>}
            </div>
        </section>
        <div className={style.separator}/>
        </>
    )
}