import { useDispatch } from "react-redux";
import { setPage1Data } from "../../../redux/actions/dataFromForm";
import style from "../../../styles/oddaj-rzeczy/form/Page1.module.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";

export default function Page1 ({ setPageNumber }) {
    
    const dispatch = useDispatch();
    const [page1State, setPage1State] = useState(null);
    const radioInputs = useRef();

    const handleChange = (key, value) => {
        setPage1State(prevState => {
            return {
                ...prevState,
                [key] : value
            }
        })
    }

    const handleClick = () => {
        dispatch(setPage1Data(page1State));
    }  


    const setClassName = () => {
        const divs = [...radioInputs.current.children]
        divs.forEach(el => {
            el.children[0].className = "";
            if (el.children[1].checked) {
                el.children[0].className = style.active;
            }
        })
    }

    useEffect(() => {

        setClassName()
    },[]);  

    return(
        <>
        <form className={style.formContainer}>
            <h2>Zaznacz co chcesz oddać</h2>
            <div ref={radioInputs} className={style.radioInputs}>
                <Radio value="ubrania, które nadają się do ponownego użycia" id="radio1" handleChange={handleChange} setClassName={setClassName} />
                <Radio value="ubrania, do wyrzucenia" id="radio2" handleChange={handleChange} setClassName={setClassName} />
                <Radio value="zabawki" id="radio3" handleChange={handleChange} setClassName={setClassName} />
                <Radio value="książki" id="radio4" handleChange={handleChange} setClassName={setClassName} />
                <Radio value="inne" id="radio5" handleChange={handleChange} setClassName={setClassName} />
            </div>
        </form>
        <div className={style.footer}>                
            <button onClick={() => {setPageNumber(prevState => prevState + 1); handleClick(); }}>Dalej</button>              
        </div>
        </>
    )
}

const Radio = ({id, value, handleChange, setClassName}) => {    
    return(
        <div>
            <label htmlFor={id}/>
            <input
            id={id}
            name="rzeczy"
            value={value}
            type="radio"
            onChange={e => {
                handleChange(e.target.name, e.target.value);
                setClassName();
                }
            }/>
            {value}
        </div>       
    )
}