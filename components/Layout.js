import Link from "next/link";
import { Link as Scroll} from "react-scroll";
import { useSelector } from "react-redux";

export default function Layout(props){

    const userData = useSelector(user => user)
    
    return(
        <div className="appContainer">
            <header>
                <div className="authButtonsContainer">
                    <h3>{userData.user.email ? `Witaj ${userData.user.email}` : null}</h3>
                    <Link href="/login"><a>Zaloguj</a></Link>
                    <Link href="/signup"><a>Załóż konto</a></Link>
                </div>
                <nav className="mainMenu">                    
                    <Link href="/"><a>Start</a></Link>                
                    <Scroll smooth duration={500} to="o_co_chodzi">O co chodzi?</Scroll>
                    <Scroll smooth duration={500} to="o_nas">O nas</Scroll>
                    <Scroll smooth duration={500} to="fundacja_i_organizacje">Fundacja i organizacje</Scroll>
                    <Scroll smooth duration={500} to="contact">Kontakt</Scroll>                    
                </nav>
            </header>
            {props.children}
        </div>
    )
} 