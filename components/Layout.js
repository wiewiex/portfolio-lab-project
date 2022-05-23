import Link from "next/link"

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
                    <Link href="#o_co_chodzi"><a>O co chodzi?</a></Link>
                    <Link href="#o_nas"><a>O nas</a></Link>
                    <a>Fundacja i organizacje</a>
                    <a>Kontakt</a>                    
                </nav>
            </header>
            {props.children}
        </div>
    )
} 