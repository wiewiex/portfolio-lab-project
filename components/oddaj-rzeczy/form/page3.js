import style from "../../../styles/oddaj-rzeczy/form/Page3.module.scss";
import { useDispatch } from "react-redux";
import { setPage3Data } from "../../../redux/actions/dataFromForm";
import { useState } from "react";
import { useRef } from "react";

export default function Page3 ({ setPageNumber }) {

    const dispatch = useDispatch();
    const [page3State, setPage3State] = useState(null);
    const radioContainer = useRef();

    const handleChange = (key, value) => {
        setPage3State(prevState => {
            return {
                ...prevState,
                [key] : value
            }
        })
    }

    const setClassName = (e) => {

        const arrayOfLabels = [...radioContainer.current.children];
        arrayOfLabels.forEach(el => {
            el.className = "";
        })
        e.target.parentElement.className = style.active;
    }

    const handleClick = () => {

        dispatch(setPage3Data(page3State));
    }

    return(
        <>
        <form className={style.formContainer}>
            <div className={style.localizationContainer}>
                <h2>Lokalizacja</h2>
                <select defaultValue="- wybierz -" name="miasto" className={style.customSelect} onChange={e => handleChange(e.target.name, e.target.value)}>
                    <option disabled hidden>- wybierz -</option>
                    <option>Poznań</option>
                    <option>Warszawa</option>
                    <option>Kraków</option>
                    <option>Wrocław</option>
                    <option>Katowice</option>
                </select>
            </div>
            <h3>Komu chcesz pomóc ?</h3>
            <div ref={radioContainer} className={style.radioContainer}>
                <Radio id="radio1" value="dzieciom" handleChange={handleChange} setClassName={setClassName}/>                
                <Radio id="radio2" value="samotnym matkom" handleChange={handleChange} setClassName={setClassName}/>                
                <Radio id="radio3" value="bezdomnym" handleChange={handleChange} setClassName={setClassName}/>                
                <Radio id="radio4" value="niepełnosprawnym" handleChange={handleChange} setClassName={setClassName}/>                
                <Radio id="radio5" value="osobom starszym" handleChange={handleChange} setClassName={setClassName}/>                
            </div>
            <div className={style.otherFund}>
                <h4>Wpisz nazwę konkretnej fundacji (opcjonalne)</h4>
                <input type="text" name="nazwa fundacji" onChange={e => handleChange(e.target.name, e.target.value)}/>
            </div>
        </form>
        <div>
            <button className={style.footerButton} onClick={() => {setPageNumber(prevState => prevState - 1); handleClick(); }}>Wstecz</button>                   
            <button className={style.footerButton} onClick={() => {setPageNumber(prevState => prevState + 1); handleClick(); }}>Dalej</button>                
        </div>
        </>
    )
}

const Radio = ({id, value, handleChange, setClassName}) => {    

    return(
        <label htmlFor={id}>
            {value}
            <input
            id={id}
            name="komu_oddac"
            value={value}
            type="radio"
            onChange={e => {
                handleChange(e.target.name, e.target.value);
                setClassName(e);
                }
            }
            />
        </label>
    )
}