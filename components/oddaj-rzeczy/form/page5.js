import style from "../../../styles/oddaj-rzeczy/form/Page5.module.scss";
import { useSelector } from "react-redux";

export default function Page5 () {
    const state = useSelector(state => state);
    const dataFromForm = state.dataFromForm;
    console.log(dataFromForm);

    return(
        <section className={style.formContainer}>
            <h2>Podsumowanie Twojej darowizny</h2>
            <h4>Oddajesz:</h4>
            <div></div>
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
                        <p>{dataFromForm[3].kod_pocztowy}</p>                    </div>
                    <div>
                        <h6>Numer<br/>telefonu</h6>
                        <p>{dataFromForm[3].numer_telefonu}</p>                    </div>
                </div>
                <div className={style.date}>
                    <h5>Termin odbioru:</h5>
                    <div>
                        <h6>Data</h6>
                        <p>{dataFromForm[3].data}</p>                    </div>
                    <div>
                        <h6>Godzina</h6>
                        <p>{dataFromForm[3].godzina}</p>                    </div>
                    <div>
                        <h6>Uwagi<br/>dla kuriera</h6>
                        <p>{dataFromForm[3].uwagi}</p>                    </div>
                </div>
            </form> 
            
        </section>
    )
}