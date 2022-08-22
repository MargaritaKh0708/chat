import { useGlobalContext } from 'components/context/GlobalContext';
import {
  IChatLineItemProps,
  IMessagesItem,
} from 'components/chat-line/ChatLine';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface IEntryFieldProps {
  setTypeMsgHandler: (value: string) => void;
  chat: IChatLineItemProps[];
  typeMsg: string;
}

export const EntryField: React.FC<IEntryFieldProps> = ({
  setTypeMsgHandler,
  typeMsg,
  chat,
}) => {
  const [needLoad, setNeedLoad] = useState(false); // helper-value
  const { chooseId, userMessageHistory, setUserMessageHistory } =
    useGlobalContext();

    useEffect(() => {
        const messageHistory:IMessagesItem[] = JSON.parse(localStorage.getItem('messageHistory') || '[]');
        setUserMessageHistory(messageHistory)
        console.log(messageHistory)
      }, []); 
    

  useEffect(() => {
    if (!needLoad) {
      return;
    }
    setTimeout(answer, 2000); //Change time
  }, [userMessageHistory]); 


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
    addMessage(message);
    setNeedLoad(false);
  }

  const msgMemorized = () => {
    const message = {
    text: typeMsg,
    time: new Date().toLocaleString().split(','),
    user_id: 66553,
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

  return (
    <div className='type-line'>
      <label className='type-line__field'>
        <input
          value={typeMsg}
          onChange={(e) => {
            setTypeMsgHandler(e.currentTarget.value);
            console.log(typeMsg);
          }}
          placeholder='Type your message'
          className='type-line__input'
          name='type-line'
          type='text'
        />
        <button
          type='submit'
          onClick={() => {
            msgMemorized();
          }}
          className='type-line__send-btn'
        >
          send
        </button>
      </label>
    </div>
  );
};