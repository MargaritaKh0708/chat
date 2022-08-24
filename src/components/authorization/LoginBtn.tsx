import {useGlobalContext, IChatOwnerInfo  } from 'components/context/GlobalContext'
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'


const googleClientId =
  "1026527850509-u65p8e5gp98cjeqvdppsnfaj3mlt46av.apps.googleusercontent.com";

export const LoginBtn: React.FC = () => {

let navigate = useNavigate();
const [error, setError] = useState<boolean>(false) // for error msg 

const {setChatOwnerInfo} = useGlobalContext();

//OnSuccess Handler
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

  //OnFailure handler
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
