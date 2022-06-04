import style from "../../../styles/oddaj-rzeczy/form/Page3.module.scss";
import { useDispatch } from "react-redux";
import { setPage3Data } from "../../../redux/actions/dataFromForm";
import { useState, useEffect } from "react";

export default function Page3 () {

    const dispatch = useDispatch();
    const [page3State, setPage3State] = useState(null);

    const handleChange = (key, value) => {
        setPage3State(prevState => {
            return {
                ...prevState,
                [key] : value
            }
        })
    }

    useEffect(()=>{

        if (page3State) {
        dispatch(setPage3Data(page3State));
        }

    },[page3State]);

    return(
        <form className={style.formContainer}>
            <div className={style.localizationContainer}>
                <h2>Lokalizacja</h2>
                <select name="miasto" className={style.customSelect} onChange={e => handleChange(e.target.name, e.target.value)}>
                    <option selected value=" " disabled hidden>- wybierz -</option>
                    <option>Poznań</option>
                    <option>Warszawa</option>
                    <option>Kraków</option>
                    <option>Wrocław</option>
                    <option>Katowice</option>
                </select>
            </div>
            <h3>Komu chcesz pomóc ?</h3>
            <div className={style.radioContainer}>                
                <label htmlFor="radio1">
                    dzieciom
                    <input
                    id="radio1"
                    name="komu oddac"
                    value="dzieciom"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                </label>
                <label htmlFor="radio2">
                    samotnym matkom
                    <input
                    id="radio2"
                    name="komu oddac"
                    value="samotnym matkom"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                </label>
                <label htmlFor="radio3">
                    bezdomnym
                    <input
                    id="radio3"
                    name="komu oddac"
                    value="bezdomnym"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                </label>
                <label htmlFor="radio4">
                    niepełnosprawnym
                    <input
                    id="radio4"
                    name="komu oddac"
                    value="niepełnosprawnym"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                </label>
                <label htmlFor="radio5">
                    osobom starszym
                    <input
                    id="radio5"
                    name="komu oddac"
                    value="osobom starszym"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                </label>
            </div>
            <div className={style.otherFund}>
                <h4>Wpisz nazwę konkretnej fundacji (opcjonalne)</h4>
                <input type="text" name="nazwa fundacji" onChange={e => handleChange(e.target.name, e.target.value)}/>
            </div>
        </form>
    )
}