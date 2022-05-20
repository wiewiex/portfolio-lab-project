export default function Layout(props){
    return(
        <div className="appContainer">
            <header>
                <div className="authButtonsContainer">
                    <a>Zaloguj</a>
                    <a>Załóż konto</a>
                </div>
                <nav className="mainMenu">                    
                    <a>Start</a>
                    <a>O co chodzi?</a>
                    <a>O nas</a>
                    <a>Fundacja i organizacje</a>
                    <a>Kontakt</a>                    
                </nav>
            </header>
            {props.children}
        </div>
    )
} 