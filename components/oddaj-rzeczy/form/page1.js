import { useDispatch } from "react-redux";
import { setPage1Data } from "../../../redux/actions/dataFromForm";
import style from "../../../styles/oddaj-rzeczy/form/Page1.module.scss";
import { useState, useEffect } from "react";

export default function Page1 () {
    
    const dispatch = useDispatch();
    const [page1State, setPage1State] = useState(null);

    const handleChange = (key, value) => {
        setPage1State(prevState => {
            return {
                ...prevState,
                [key] : value
            }
        })
    }

    useEffect(()=>{

        if (page1State) {
        dispatch(setPage1Data(page1State));
        }

    },[page1State]);

    const handleClick = (e) => {
           
        e.target.classList.add("checkedRadio");
    }

    return(
        <form className={style.formContainer}>
            <h2>Zaznacz co chcesz oddać</h2>
            <div className={style.radioInputs}>
                <div>
                    <label onClick={handleClick}htmlFor="radio1"></label>
                    <input
                    id="radio1"
                    name="rzeczy"
                    value="ubrania, które nadają się do ponownego użycia"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}                    />
                    ubrania, które nadają się do ponownego użycia
                </div>
                <div>
                    <label onClick={handleClick}htmlFor="radio2"></label>
                    <input
                    id="radio2"
                    name="rzeczy"
                    value="ubrania, do wyrzucenia"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                    ubrania, do wyrzucenia
                </div>
                <div>
                    <label onClick={handleClick}htmlFor="radio3"></label>
                    <input
                    id="radio3"
                    name="rzeczy"
                    value="zabawki"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                    zabawki
                </div>
                <div>
                    <label onClick={handleClick}htmlFor="radio4"></label>
                    <input
                    id="radio4"
                    name="rzeczy"
                    value="książki"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                    książki
                </div>
                <div>
                    <label onClick={handleClick}htmlFor="radio5"></label>
                    <input
                    id="radio5"
                    name="rzeczy"
                    value="Inne"
                    type="radio"
                    onChange={e => handleChange(e.target.name, e.target.value)}
                    />
                    Inne
                </div>                
            </div>
        </form>
    )
}