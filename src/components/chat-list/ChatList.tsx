import { ChatLine, IChatLineItemProps, IMessagesItem } from "components/chat-line/ChatLine"
import {useGlobalContext} from 'components/context/GlobalContext'
import { useEffect, useState } from "react";

export interface IChatListProps {
    chats: IChatLineItemProps[];
    searchRequets: string;
}

export const ChatList: React.FC<IChatListProps> =({chats, searchRequets})=> {

  
    const {setChooseId} = useGlobalContext();


    useEffect(() => {
        const messageHistory:IMessagesItem[] = JSON.parse(localStorage.getItem('messageHistory') || '[]');
        console.log(messageHistory)
        
        chats.map(chat => 
            messageHistory.forEach(item =>
                { if (chat.chat_id===item.chat_id) {
                    chat.messages.push(item)
                }}))
       console.log(chats)  
    }, [])

    // Sort chat by last msg date

    chats.sort((a,b)=> 
    b.messages.length && a.messages.length ?
    (new Date(b.messages[b.messages.length-1].time[0].split('.').reverse().join('-') + `T` 
    + b.messages[b.messages.length-1].time.join(',').substring(12)).getTime() - new Date(a.messages[a.messages.length-1].time[0].split('.').reverse().join('-') + `T` 
    + a.messages[a.messages.length-1].time.join(',').substring(12)).getTime())
    : a.chat_id-b.chat_id);
    
    // render list considering search. value

    const renderList = chats.filter(item => item.user_name.toLowerCase().startsWith(searchRequets.toLowerCase())|| item.user_surname.toLowerCase().startsWith(searchRequets.toLowerCase())
    )
    
    return (
        <div className='chat__list'>
            <h2 className='chat__title'> Chats</h2>
            <div className='chat__items'>{renderList.map(chat => 
                <ChatLine
                setChooseUserDataHandler={()=>{setChooseId({user_id:chat.user_id, chat_id:chat.chat_id})}}
                key={chat.user_id}
                item={chat}
                />)}</div>
            
        </div>
    )
}