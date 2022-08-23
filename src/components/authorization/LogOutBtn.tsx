import { GoogleLogout } from "react-google-login"

const googleClientId = "1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com"


export const LogOutBtn: React.FC = () => {

    const logout:()=>void = () => {
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