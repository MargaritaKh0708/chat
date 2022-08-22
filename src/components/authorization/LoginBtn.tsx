import { GoogleLogin } from "react-google-login"


// export interface IOnSuccessResProfileObj {
//     email: string;
// familyName: string;
// givenName: string;
// googleId: string;
// imageUrl: string;
// name: string;
// }

// export interface IOnSuccessRes {
//     profileObj:IOnSuccessResProfileObj;
// }

const googleClientId = "1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com"

export const LoginBtn: React.FC = () => {

    

    const onSuccess = (response:any) => {
        console.log('LOGIN SUCCESS! Current user:', response.profileObj)
    }

    const onFailure = (response:any) => {
        console.log('LOGIN FAILED! res:', response)
    }

     return (
        <div className='login'>
        <GoogleLogin
        clientId={googleClientId}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
  />
        </div>
     )
}