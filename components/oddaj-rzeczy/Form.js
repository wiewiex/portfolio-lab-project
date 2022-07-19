import style from "../../styles/oddaj-rzeczy/Form.module.scss";
import Page1 from "./form/page1";
import Page2 from "./form/page2";
import Page3 from "./form/page3";
import Page4 from "./form/page4";
import Page5 from "./form/page5";

import { useState } from "react";

export default function Form () {
    const [pageNumber, setPageNumber] = useState(1);

    let currentPage;

    if (pageNumber == 1) {
        currentPage = <Page1 setPageNumber={setPageNumber}/>
    }

    if (pageNumber == 2) {
        currentPage = <Page2 setPageNumber={setPageNumber}/>
    }

    if (pageNumber == 3) {
        currentPage = <Page3 setPageNumber={setPageNumber}/>
    }

    if (pageNumber == 4) {
        currentPage = <Page4 setPageNumber={setPageNumber}/>
    }

    if (pageNumber == 5) {
        currentPage = <Page5 setPageNumber={setPageNumber}/>
    }

    return(
        <>
        <section className={style.formsContainer}>
            <div className={style.header}>
                {(()=>{
                    if (pageNumber <= 4) {
                        return <p>Krok {pageNumber}/4</p>
                    }

                    else return null;
                    
                    })
                ()}
            </div>
            <div className={style.mainContainer}>
                {currentPage}
            </div>            
        </section>
        <div className={style.separator}/>
        </>
    )
}