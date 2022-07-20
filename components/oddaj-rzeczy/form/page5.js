import style from "../../../styles/oddaj-rzeczy/form/Page5.module.scss";
import { useSelector } from "react-redux";

export default function Page5 ({ setPageNumber }) {
    const state = useSelector(state => state);
    const dataFromForm = state.dataFromForm;
    // console.log(dataFromForm);

    return(
        <>
        <div className={style.formContainer}>
            <h2>Podsumowanie Twojej darowizny</h2>
            <h4>Oddajesz:</h4>
            <div>
                <img src="/assets/Icon-1.svg"/>
                <p>{dataFromForm[1] ? dataFromForm[1].worki + " worki,": ""} {dataFromForm[0] ? dataFromForm[0].rzeczy +", " : ""} {dataFromForm[2] ? dataFromForm[2].komu_oddac : ""}</p>
            </div>
            <div>
                <img src="/assets/Icon-4.svg"/>
                <p>dla lokalizacji: {dataFromForm[2] ? dataFromForm[2].miasto : ""}</p>
            </div>
            <form>
                <div className={style.address}>
                    <h5>Adres odbioru:</h5>
                    <div>
                        <h6>Ulica</h6>
                        <p>{dataFromForm[3].ulica}</p>
                    </div>
                    <div>
                        <h6>Miasto</h6>
                        <p>{dataFromForm[3].miasto}</p>
                    </div>
                    <div>
                        <h6>Kod<br/>Pocztowy</h6>
                        <p>{dataFromForm[3].kod}</p>                    
                    </div>
                    <div>
                        <h6>Numer<br/>telefonu</h6>
                        <p>{dataFromForm[3].numer}</p>                    
                    </div>
                </div>
                <div className={style.date}>
                    <h5>Termin odbioru:</h5>
                    <div>
                        <h6>Data</h6>
                        <p>{dataFromForm[3].data}</p>                    
                    </div>
                    <div>
                        <h6>Godzina</h6>
                        <p>{dataFromForm[3].godzina}</p>                    
                    </div>
                    <div>
                        <h6>Uwagi<br/>dla kuriera</h6>
                        <p>{dataFromForm[3].uwagi}</p>                    
                    </div>
                </div>
            </form>            
        </div>
        <div>
            <button className={style.footerButton} onClick={() => {setPageNumber(prevState => prevState - 1)}}>Wstecz</button>                   
            <button className={style.footerButton} onClick={() => {setPageNumber(prevState => prevState + 1)}}>Potwierdzam</button>                 
        </div>
        </>
    )
}