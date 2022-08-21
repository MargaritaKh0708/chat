import { ChatLine, IChatLineItemProps } from "components/chat-line/ChatLine"
import {useGlobalContext} from 'components/context/GlobalContext'

export interface IChatListProps {
    chats: IChatLineItemProps[];
    searchRequets: string;
}

export const ChatList: React.FC<IChatListProps> =({chats, searchRequets})=> {


    const {setChooseId, setUserMessageHistory} = useGlobalContext();

    const renderList = chats.filter(item => item.user_name.toLowerCase().startsWith(searchRequets.toLowerCase())|| item.user_surname.toLowerCase().startsWith(searchRequets.toLowerCase()))
    
    return (
        <div className='chat__list'>
            <h2 className='chat__title'> Chats</h2>
            <div className='chat__items'>{renderList.map(chat => 
                <ChatLine
                setChooseUserDataHandler={()=>{setChooseId(chat.user_id)}}
                key={chat.user_id}
                item={chat}
                />)}</div>
            
        </div>
    )
}