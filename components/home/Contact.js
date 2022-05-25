import style from "../../styles/home/Contact.module.scss"

export default function Contact () {
    return (
        <div className={style.contactAndFooterContainer}>
            <section className={style.contactContainer}>
                <div className={style.formContainer}>
                    <h2>Skontaktuj się z nami</h2>
                    <img src="/assets/Decoration.svg"/>
                    <form>
                        <div className={style.senderDetails}>
                            <div >
                                <h3>Wpisz swoje imię</h3>
                                <input type="text" name="name" placeholder="Krzysztof"/>
                            </div>
                            <div>
                                <h3>Wpisz swój adres email</h3>
                                <input type="email" name="email" placeholder="abc@xyz.pl" />
                            </div>
                        </div>                    
                        <h3>Wpisz swoją wiadomość</h3>
                        <textarea rows="4" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        <button type="submit">Wyślij</button>
                    </form>
                </div>
            </section>
            <footer className={style.footer}>
                <div></div>
                <div className={style.copyright}>Copyright by Coders Lab</div>
                <div className={style.socialLinks}>
                    <img src="/assets/Facebook.svg"/>
                    <img src="/assets/Instagram.svg"/>
                </div>
            </footer>
        </div>
    )
}