import { useGlobalContext } from "components/context/GlobalContext";
import { GoogleLogout } from "react-google-login"
import { useNavigate } from "react-router-dom";

const googleClientId = "1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com"


export const LogOutBtn: React.FC = () => {

    let navigate = useNavigate();
    const {setChatOwnerInfo} = useGlobalContext();

    const logout:()=>void = () => {
        navigate('/');
        localStorage.removeItem('loginData');
        setChatOwnerInfo({chatOwnerPhoto: '',
        chatOwnerName: '',
        chatOwnerId:0});
        console.log('goodbye')
    }

    return  (
        <>
         <GoogleLogout
          className='authorization__logout-btn authorization__btn'
      clientId={googleClientId}
      buttonText='Logout'
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
        </>
    )
}