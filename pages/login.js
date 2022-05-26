import style from "../styles/login&signUp/login&signUp.module.scss";
import firebaseApp from "../firebase.config"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

const login = (e) => {
    e.preventDefault;
    const email = "kot@kot.pl";
    const password = "kot123kot";

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

export default function Login() {
    return(
        <main className={style.mainContainer}>
        <form>
            <h2>Zaloguj się</h2>
            <img src="/assets/Decoration.svg"/>  
            <div className={style.inputs}>          
                <h3>Email</h3>
                <input type="email" name="email" />
                <h3>Hasło</h3>
                <input type="password" name="password" />
            </div>
            <div className={style.buttons}>
                <button>Załóż konto</button>
                <button className={style.accentedButton}>Zaloguj się</button>
            </div>
        </form>
        </main>
    )
}