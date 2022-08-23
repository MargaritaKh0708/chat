import {IChatLineItemProps, IMessagesItem } from "components/chat-line/ChatLine";
import { useGlobalContext } from 'components/context/GlobalContext';
import { Avatar } from "components/UI/avatar/Avatar";
import { useEffect , useState} from "react";

export interface IChatHistoryProps {
  choosed_chat:IChatLineItemProps;
  choosed_id: {user_id:number,
    chat_id:number};
}

export const ChatHistory: React.FC<IChatHistoryProps> = ({
  choosed_chat,
  choosed_id,
}) => {

  // // const [newChatMsg, setNewChatMsg] = useState<IMessagesItem[]>([])
  // const { chooseId, userMessageHistory, setUserMessageHistory } =
  //   useGlobalContext();

  return (
    <div className="chat-history">
      {choosed_chat.messages.length !== 0 ? (
        choosed_chat.messages.map((msg, index) =>
          msg.user_id === choosed_id.user_id ? (
            <div className='chat-history__msg' key={choosed_chat.chat_id+index}>
            <Avatar status={false} avatar={choosed_chat.photo}/>
            <div className='chat-history__incoming-content'> <div className="chat-history__incoming-msg">
              <span className="chat-history__incoming-msg-text msg-text">{msg.text}</span>
            </div>
            <p className="chat-history__incoming-msg-time msg-time">{msg.time[0].replace(/\.+/gi, '/')} {msg.time[1].substring(0,6)} {msg.time[1].substring(0,6).split(':').map(i=> +i)[0]>12?'PM':'AM'}</p></div>
          </div>
          ) : (
            <div className='chat-history__msg chat-history__msg--column' key={choosed_chat.chat_id+index}>
              <div className="chat-history__outgoing-msg">
              <span className="chat-history__outgoing-msg-text msg-text">{msg.text}</span>
            
            </div> <p className="chat-history__outgoing-msg-time msg-time">{msg.time[0].replace(/\.+/gi, '/')} {msg.time[1].substring(0,6)} {msg.time[1].substring(0,6).split(':').map(i=> +i)[0]>12?'PM':'AM'}</p></div>
            
          )
        )
      ) : (
        <div> Start your conversation </div>
      )}
    </div>
  );
};
