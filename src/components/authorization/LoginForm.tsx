import { useGlobalContext, IChatOwnerInfo } from "components/context/GlobalContext";
import { Link } from "react-router-dom"
import { LoginBtn } from "./LoginBtn"
import { gapi } from "gapi-script"
import { useEffect} from "react"
import { LogOutBtn } from "./LogOutBtn";


const googleClientId = "1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com"

export const LoginForm: React.FC= () => {

    const {chatOwnerInfo} = useGlobalContext();

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
        <h2 className='authorization__form-title chat__title'> Chat </h2>
        {chatOwnerInfo.chatOwnerId>0 ? <><p>You've already logged in as {chatOwnerInfo.chatOwnerName}</p> <LogOutBtn/></> : <LoginBtn/>} 
        {chatOwnerInfo.chatOwnerId>0? '': <Link to='/chat'>
        <button type='button' className='authorization__trial'> Trial run </button>
        </Link>} 
        </div>
        </section>
     )
}