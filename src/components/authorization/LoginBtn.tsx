import {useGlobalContext, IChatOwnerInfo  } from 'components/context/GlobalContext'
import { ChatPage } from "components/Pages/ChatPage";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'

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

let navigate = useNavigate();
const [error, setError] = useState<boolean>(false) // for error msg 

const {chatOwnerInfo, setChatOwnerInfo} = useGlobalContext();

  const onSuccess = (response: any) => {
    navigate('/chat');

    const userData:IChatOwnerInfo = {
      chatOwnerId: response.profileObj.googleId,
      chatOwnerName: response.profileObj.name, 
      chatOwnerPhoto: response.profileObj.imageUrl
    }

    localStorage.setItem('loginData', JSON.stringify(userData))
    setChatOwnerInfo(userData);

  };

  const onFailure = (response: any) => {
    setError(true);
    navigate('/');
    console.log("LOGIN FAILED! res:", response);
  };

  return (
      <div className="authorization__login">
        <GoogleLogin
          className="authorization__login-btn authorization__btn"
          cookiePolicy={"single_host_origin"}
          buttonText="Start with Google"
          clientId={googleClientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
        <p className='authorization__false'>{error?'Upps, something going wrong. Try again or use trial version':''}</p>
      </div>
  );
};
