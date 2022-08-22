import { useGlobalContext } from 'components/context/GlobalContext';
import {IMessagesItem } from "components/chat-line/ChatLine";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface IEntryFieldProps {
  setTypeMsgHandler: (value: string) => void;
  typeMsg: string;
}

export const EntryField: React.FC<IEntryFieldProps> = ({
  setTypeMsgHandler,
  typeMsg,
}) => {
  const [needLoad, setNeedLoad] = useState(false);
  const { chooseId, userMessageHistory, setUserMessageHistory } =
    useGlobalContext();

  useEffect(() => {
    if (!needLoad) {
      return;
    }
    setTimeout(answer, 2000); //Change time
  }, [userMessageHistory]);
  async function answer() {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');

    const messageHistory:IMessagesItem[] = [
      ...userMessageHistory,
      {
        text: response.data.value,
        time: new Date().toLocaleString().split(','),
        user_id: chooseId.user_id,
        chat_id: chooseId.chat_id,
      },
    ];

    localStorage.setItem('messageHistory', JSON.stringify(messageHistory));
    setUserMessageHistory(messageHistory);
    setNeedLoad(false);
  }

  const msgMemorized = () => {
    const messageHistory:IMessagesItem[] = [
      ...userMessageHistory,
      {
        text: typeMsg,
        time: new Date().toLocaleString().split(','),
        user_id: 66553,
        chat_id: chooseId.chat_id,
      },
    ];

    localStorage.setItem('messageHistory', JSON.stringify(messageHistory));
    setUserMessageHistory(messageHistory);
    setNeedLoad(true);
    console.log(userMessageHistory);
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