import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDataFromForm } from "../../../redux/actions/dataFromForm"
import style from "../../../styles/oddaj-rzeczy/form/Page1.module.scss";

export default function Page1 () {
    
    const dispatch = useDispatch();

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
                    name="stuff"
                    value="ubrania, które nadają się do ponownego użycia"
                    type="radio"
                    onChange={e => dispatch(setDataFromForm(e.target.value))}
                    />
                    ubrania, które nadają się do ponownego użycia
                </div>
                <div>
                    <label onClick={handleClick}htmlFor="radio2"></label>
                    <input
                    id="radio2"
                    name="stuff"
                    value="ubrania, do wyrzucenia"
                    type="radio"
                    onChange={e => dispatch(setDataFromForm(e.target.value))}
                    />
                    ubrania, do wyrzucenia
                </div>
                <div>
                    <label onClick={handleClick}htmlFor="radio3"></label>
                    <input
                    id="radio3"
                    name="stuff"
                    value="zabawki"
                    type="radio"
                    onChange={e => dispatch(setDataFromForm(e.target.value))}
                    />
                    zabawki
                </div>
                <div>
                    <label onClick={handleClick}htmlFor="radio4"></label>
                    <input
                    id="radio4"
                    name="stuff"
                    value="książki"
                    type="radio"
                    onChange={e => dispatch(setDataFromForm(e.target.value))}
                    />
                    książki
                </div>
                <div>
                    <label onClick={handleClick}htmlFor="radio5"></label>
                    <input
                    id="radio5"
                    name="stuff"
                    value="Inne"
                    type="radio"
                    onChange={e => dispatch(setDataFromForm(e.target.value))}
                    />
                    Inne
                </div>                
            </div>
        </form>
    )
}