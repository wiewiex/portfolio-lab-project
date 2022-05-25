import Link from "next/link"
import { Link as Scroll} from "react-scroll"

export default function Layout(props){
    return(
        <div className="appContainer">
            <header>
                <div className="authButtonsContainer">
                    <Link href="/login"><a>Zaloguj</a></Link>
                    <Link href="/singup"><a>Załóż konto</a></Link>
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