import style from "../../../styles/oddaj-rzeczy/form/Page5.module.scss";
import { useSelector } from "react-redux";

export default function Page5 () {
    const data = useSelector(dataFromForm => dataFromForm);

    console.log(data);

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
                        <input type="text" name="ulica" onChange={e => handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h6>Miasto</h6>
                        <input type="text" name="miasto" onChange={e => handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h6>Kod<br/>Pocztowy</h6>
                        <input type="text" name="kod_pocztowy" onChange={e => handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h6>Numer<br/>telefonu</h6>
                        <input type="text" name="numer_telefonu" onChange={e => handleChange(e.target.name, e.target.value)} />
                    </div>
                </div>
                <div className={style.date}>
                    <h5>Termin odbioru:</h5>
                    <div>
                        <h6>Data</h6>
                        <input type="text" name="data" onChange={e => handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h6>Godzina</h6>
                        <input type="text" name="godzina" onChange={e => handleChange(e.target.name, e.target.value)} />
                    </div>
                    <div>
                        <h6>Uwagi<br/>dla kuriera</h6>
                        <textarea rows="5" name="uwagi" onChange={e => handleChange(e.target.name, e.target.value)} />
                    </div>
                </div>
            </form> 
            
        </section>
    )
}