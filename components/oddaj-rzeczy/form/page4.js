import style from "../../../styles/oddaj-rzeczy/form/Page4.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage4Data } from "../../../redux/actions/dataFromForm";
import { useState, useEffect } from "react";


export default function Page4 ({ setPageNumber }) {
    const reduxState = useSelector(state => state);
    

    const dispatch = useDispatch();
    const [page4State, setPage4State] = useState({
        data: "",
        godzina: "",
        kod: "",
        miasto: "",
        numer: "",
        ulica: "",
        uwagi: ""
    });

    const handleChange = (key, value) => {
        setPage4State(prevState => {
            return {
                ...prevState,
                [key] : value
            }
        })
    };


    const handleClick = () => {

        dispatch(setPage4Data(page4State));
    };


    useEffect(() => {
        if (reduxState.dataFromForm[3]) {
            setPage4State(reduxState.dataFromForm[3]);
        }

    }, []);

    return(
        <>
        <div className={style.formContainer}>
            <h2>Podaj adres oraz termin odbioru przez kuriera</h2>
            <form>
                <div className={style.address}>
                    <h5>Adres odbioru:</h5>
                    <Field firstName="ulica" page4State={page4State} handleChange={handleChange}/>
                    <Field firstName="miasto" page4State={page4State} handleChange={handleChange}/>
                    <Field firstName="kod" lastName={"pocztowy"} page4State={page4State} handleChange={handleChange}/>
                    <Field firstName="numer" lastName={"telefonu"} page4State={page4State} handleChange={handleChange}/>
                </div>
                <div className={style.date}>
                    <h5>Termin odbioru:</h5>
                    <Field firstName="data" page4State={page4State} handleChange={handleChange}/>
                    <Field firstName="godzina" page4State={page4State} handleChange={handleChange}/>
                    <div>
                        <h6>Uwagi<br/>dla kuriera</h6>
                        <textarea rows="5" value={page4State.uwagi} name="uwagi" onChange={e => handleChange(e.target.name, e.target.value)} />
                    </div>
                </div>
            </form>            
        </div>
        <div>
            <button className={style.footerButton} onClick={() => {setPageNumber(prevState => prevState - 1); handleClick(); }}>Wstecz</button>                  
            <button className={style.footerButton} onClick={() => {setPageNumber(prevState => prevState + 1); handleClick(); }}>Dalej</button>                
        </div>
        </>
    )
}

const Field = ({firstName, lastName, page4State, handleChange}) => {
    return (
        <div>
            <h6>{firstName}<br/>{lastName}</h6>
            <input type="text" value={page4State[firstName]} name={firstName} onChange={e => handleChange(e.target.name, e.target.value)}/>
        </div>
    )
}