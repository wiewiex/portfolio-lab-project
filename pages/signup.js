import style from "../styles/login&signUp/login&signUp.module.scss";
import firebaseApp from "../firebase.config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Link from "next/link";


export default function SignUp() {
    const [inputValues, setInputValues] = useState({});
    const [userMessage, setUserMessage] = useState(null);

    const auth = getAuth(firebaseApp);

    const handleChange = (key, value) => {
        
        setInputValues(prevState => {
            return {
                ...prevState,
                [key] : value
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = inputValues.email;
        const password = inputValues.password;
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            setUserMessage("Twoje konto zostało zarejestrowane.")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setUserMessage(errorMessage)
            console.log(errorCode);
        });

        document.querySelector("form").reset();
    };
    
    return(
        <main className={style.mainContainer}>
        <form onSubmit={handleSubmit}>
            <h2>Załóż konto</h2>
            <img src="/assets/Decoration.svg"/>  
            <div className={style.inputs}>          
                <h3>Email</h3>
                <input type="email" onChange={e => handleChange("email", e.target.value)} />
                <h3>Hasło</h3>
                <input type="password" onChange={e => handleChange("password", e.target.value)}  />
                <h3>Powtórz Hasło</h3>
                <input type="password" onChange={e => handleChange("password2", e.target.value)} />
            </div>
            <div className={style.buttons}>
                <Link href="/login"><button>Zaloguj się</button></Link>
                <button type="submit" className={style.accentedButton}>Załóż konto</button>
            </div>
            <p>{userMessage}</p>
        </form>
        </main>
    )
}