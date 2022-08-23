import { ChatPage } from "components/Pages/ChatPage";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import {useGlobalContext } from 'components/context/GlobalContext'

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

const googleClientId =
  "1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com";

export const LoginBtn: React.FC = () => {

const {chatOwnerInfo, setChatOwnerInfo} = useGlobalContext();

  const onSuccess = (response: any) => {
    console.log("LOGIN SUCCESS! Current user:", response.profileObj);

    setChatOwnerInfo({chatOwnerId:response.profileObj.googleId, chatOwnerName:response.profileObj.name, chatOwnerPhoto:response.profileObj.imageUrl, });
    console.log(response.profileObj.googleId)
  };

  const onFailure = (response: any) => {
    console.log("LOGIN FAILED! res:", response);
  };

  return (
    <Link to={{ onSuccess } ? "/chat" : "/"}>
      <div className="authorization__login">
        <GoogleLogin
          className="authorization__login-btn authorization__btn"
          clientId={googleClientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </Link>
  );
};
