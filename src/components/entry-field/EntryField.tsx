import { useGlobalContext } from 'components/context/GlobalContext';
import sendIcon from 'assets/images/send.svg'
import { ModalWindow } from 'components/modal/ModalWindow';
import {
  IChatLineItemProps,
  IMessagesItem,
} from 'components/chat-line/ChatLine';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface IEntryFieldProps {
  setTypeMsgHandler: (value: string) => void;
  chat: IChatLineItemProps[];
  userName: string;
  typeMsg: string;
}

export const EntryField: React.FC<IEntryFieldProps> = ({
  setTypeMsgHandler,
  userName,
  typeMsg,
  chat,
}) => {
  const [modalActive, setModalActive] = useState<boolean>(false) // for modal window
  const [needLoad, setNeedLoad] = useState<boolean>(false); // helper-value
  const [newMsgText, setNewMsgText] = useState<string>('') // for modal window content
  const { chooseId, userMessageHistory, setUserMessageHistory, chatOwnerInfo } =
    useGlobalContext(); // context values

    // Update msg history from LocalStorage (componentDidMount)
    useEffect(() => {
        const messageHistory:IMessagesItem[] = JSON.parse(localStorage.getItem('messageHistory') || '[]');
        setUserMessageHistory(messageHistory)
        console.log(messageHistory)
      }, []); 
    

  // Update msg history from LocalStorage (componentDidUpdate)
  useEffect(() => {
    if (!needLoad) {
      return;
    }
    setTimeout(answer, 2000); //Change time
  }, [userMessageHistory]); 

  // Answer
  async function answer() {

    const response = await axios.get('https://api.chucknorris.io/jokes/random');

    const message = {
    time: new Date().toLocaleString().split(','),
    text: response.data.value,
    user_id: chooseId.user_id,
    chat_id: chooseId.chat_id,
    };

    const messageHistory: IMessagesItem[] = [...userMessageHistory, message];

    localStorage.setItem('messageHistory', JSON.stringify(messageHistory));
    setUserMessageHistory(messageHistory);
    setNewMsgText(response.data.value)
    addMessage(message);
    setNeedLoad(false);
    setModalActive(true);
  }

  // Memorize of chat's owner  msg

  const msgMemorized = () => {
    const message = {
    text: typeMsg,
    time: new Date().toLocaleString().split(','),
    user_id: chatOwnerInfo.chatOwnerId,
    chat_id: chooseId.chat_id,
    };

    const messageHistory: IMessagesItem[] = [...userMessageHistory, message];

    localStorage.setItem('messageHistory', JSON.stringify(messageHistory));
    setUserMessageHistory(messageHistory);
    addMessage(message);
    setNeedLoad(true);
    console.log(userMessageHistory);
  };

  const addMessage: (message: IMessagesItem) => void = (message) => {
    if (Array.isArray(chat) && chat.length > 0) {
      chat[0].messages.push(message);
    }
  };


   //ENTER press
   const handleKeyDown = (event: React.KeyboardEvent<Element>) => {
    if (event.keyCode === 13) {
      sendMsgFunction();
    }
  };

  //Button event function
  const sendMsgFunction= ()=> {
    msgMemorized(); 
    setTypeMsgHandler('');
  }

  return (
    <div className='type-line'>
      <label className='type-line__field'>
        <input
          value={typeMsg}
          onChange={(e) => {
            setTypeMsgHandler(e.currentTarget.value);
            console.log(typeMsg);
          }}
          onKeyDown={handleKeyDown}
          placeholder='Type your message'
          className='type-line__input'
          name='type-line'
          type='text'
        />
        <button
          type='submit'
          
          onClick={() => {
            sendMsgFunction()
          }}
          className='type-line__send-btn'
        >
          <img src={sendIcon} alt='send'/>
        </button>
      </label>
      <ModalWindow  active={modalActive}
      setActive={setModalActive}>
        <div className='new-msg'>
        <p className='new-msg__user-name'>New message from: <span>{userName}</span></p>
        <p className='new-msg__text'>{newMsgText}</p>
        </div>
      </ModalWindow>
    </div>
  );
};