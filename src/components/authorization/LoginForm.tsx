import { LoginBtn } from "./LoginBtn"
import { useEffect } from "react"
import { gapi } from "gapi-script"
import { LogOutBtn } from "./LogOutBtn"

const googleClientId = "1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com"

export const LoginForm: React.FC= () => {

    useEffect(()=> {
        const start = () => {
            gapi.client.init({
                clientId: googleClientId,
                scope: ''
            })
        };

        gapi.load('client:auth2', start);
    })

     return (
        <section className='authorization__form'>
        <div className='authorization__form-wrapper'> 
        <h2 className='authorization__form-title chat__title'> Chats</h2>
        <LoginBtn/>
        <span className='authorization__form-text'> or </span>
        <span> Let's have trial run </span>
        {/* <LogOutBtn/> */}
        </div>
        </section>
     )
}