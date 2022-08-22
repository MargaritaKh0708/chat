
import './index.css';
import {useState} from 'react'
import { GlobalContext } from 'components/context/GlobalContext';
import {data} from 'components/data/data'
import {IMessagesItem} from 'components/chat-line/ChatLine'
import {ExtendedChat} from 'components/extended-chat/ExtendedChat'
import { MenuSide } from 'components/menu-side/MenuSide';

export interface IChoosedChatId {
  user_id:number,
    chat_id:number
}

function App() {

  const [chooseId, setChooseId] = useState<IChoosedChatId>({user_id:0,
      chat_id:0});
  const [userMessageHistory, setUserMessageHistory] = useState<IMessagesItem[]>([]);

  
  return (
    <div className="App container"> 
    <GlobalContext.Provider value={{chooseId, setChooseId, userMessageHistory, setUserMessageHistory}}>
    <MenuSide data={data}/>
    <ExtendedChat chats={data} choosed_id={chooseId}/>
    </GlobalContext.Provider>
     </div>
  );
}

export default App;
