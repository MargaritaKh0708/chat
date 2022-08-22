import { LoginBtn } from "./LoginBtn"
import { useEffect } from "react"
import { gapi } from "gapi-script"

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
        <section className='authorization'>
        <LoginBtn/>
        </section>
     )
}