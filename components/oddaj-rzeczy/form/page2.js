import style from "../../../styles/oddaj-rzeczy/form/Page2.module.scss";
import { useDispatch } from "react-redux";
import { setPage2Data } from "../../../redux/actions/dataFromForm";
import { useEffect, useState } from "react";

export default function Page2 () {

    const dispatch = useDispatch();
    const [page2State, setPage2State] = useState(null);

    const handleChange = (key, value) => {
        setPage2State(prevState => {
            return {
                ...prevState,
                [key] : value
            }
        })
    }

    useEffect(()=>{

        if (page2State) {
        dispatch(setPage2Data(page2State));
        }

    },[page2State]);

    return(
        <form className={style.formContainer}>
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <div className={style.customSelectContainer}>
                <p>Liczba 60l worków:</p>
                <select className={style.customSelect} name="worki" onChange={e => handleChange(e.target.name, e.target.value)}>                        
                <option selected value=" " disabled hidden>- wybierz -</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            
        </form>
    )
}