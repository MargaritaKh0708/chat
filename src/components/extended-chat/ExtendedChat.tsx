import {IChatLineItemProps} from 'components/chat-line/ChatLine'
import {useGlobalContext } from 'components/context/GlobalContext'
import { ChatHistory } from 'components/chat-history/ChatHistory';
import { Avatar } from 'components/UI/avatar/Avatar';
import {EntryField} from 'components/entry-field/EntryField'
import {useState}  from 'react'

export interface IExtendedChatProps {
    chats:IChatLineItemProps[];
    choosed_id:{user_id:number,
        chat_id:number};
}


export const ExtendedChat: React.FC<IExtendedChatProps> = ({chats, choosed_id}) => {

    const [newMsg, setNewMsg] = useState<string>('');

    const renderItem:IChatLineItemProps[] = chats.filter(chat => chat.user_id === choosed_id.user_id);

    const {chooseId} = useGlobalContext()

    return (
        <div className='extended-chat'>
                {renderItem.map(item => (
                    <div className='extended-chat__content' key={item.user_id}>
                        <div className='extended-chat__header'>
                        <Avatar avatar={item.photo} status={true}/>
                        <p>{item.user_name} {item.user_surname}</p>
                    </div>
                    <ChatHistory choosed_chat={item} choosed_id={chooseId}/></div>
                ))}
                <EntryField
                setTypeMsgHandler={setNewMsg}
                typeMsg={newMsg}
                chat={renderItem}
      />
        </div>
    )
}