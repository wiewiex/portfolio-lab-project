import { useState } from "react"
import style from "../../styles/home/Contact.module.scss"

export default function Contact () {
    
    const [inputValues, setInputValues] = useState({});
    const [userMessage, setUserMessage] = useState(" ");

    const handleChange = (key, value) => {
        
        setInputValues(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })

    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        let headersList = {
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
               "name": inputValues.name,
               "email": inputValues.email,
               "message": inputValues.message
           });
           
           fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           })
           
           .then(function(response) {
             return response.json();
           })
           
           .then(function(res) {

             if (res.status === 'success') {

                setUserMessage("Message successfully sent")
             }

             else setUserMessage(res.errors[0].msg);

           })

           .catch(err => console.log(err))


    }


    return (
        <div className={style.contactAndFooterContainer}>
            <section id="contact" className={style.contactContainer}>
                <div className={style.formContainer}>
                    <h2>Skontaktuj się z nami</h2>
                    <img src="/assets/Decoration.svg"/>
                    <form onSubmit={handleSubmit}>
                        <div className={style.senderDetails}>
                            <div >
                                <h3>Wpisz swoje imię</h3>
                                <input type="text" name="name" placeholder="Krzysztof" onChange={e => handleChange(e.target.name, e.target.value)} />
                            </div>
                            <div>
                                <h3>Wpisz swój adres email</h3>
                                <input type="email" name="email" placeholder="abc@xyz.pl" onChange={e => handleChange(e.target.name, e.target.value)} />
                            </div>
                        </div>                    
                        <h3>Wpisz swoją wiadomość</h3>
                        <textarea rows="4" name="message" onChange={e => handleChange(e.target.name, e.target.value)} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        <button type="submit">Wyślij</button>
                        <h3>{userMessage}</h3>
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