import { useGlobalContext } from 'components/context/GlobalContext'
import { ChatHistory } from 'components/chat-history/ChatHistory';
import { IChatLineItemProps } from 'components/chat-line/ChatLine'
import { EntryField } from 'components/entry-field/EntryField'
import { Avatar } from 'components/UI/avatar/Avatar';
import { useState } from 'react'

export interface IExtendedChatProps {
    chats: IChatLineItemProps[];
    choosed_id: {
        user_id: number,
        chat_id: number
    };
}


export const ExtendedChat: React.FC<IExtendedChatProps> = ({ chats, choosed_id }) => {

    const [newMsg, setNewMsg] = useState<string>('');
    const { chooseId, openChatHistory, setOpenChatHistory } = useGlobalContext()

    const renderItem: IChatLineItemProps[] = chats.filter(chat => chat.user_id === choosed_id.user_id);


    return (
        <div className={openChatHistory ? 'extended-chat' : 'extended-chat--hidden'}>
            {renderItem.map(item => (
                <div className='extended-chat__content' key={item.user_id}>
                    <div className='extended-chat__header'>
                        <button type='button' onClick={() => setOpenChatHistory(false)} className='extended-chat__back-btn'>{'<'}</button>
                        <Avatar avatar={item.photo} status={true} />
                        <p>{item.user_name} {item.user_surname}</p>
                    </div>
                    <ChatHistory choosed_chat={item} choosed_id={chooseId} /></div>
            ))}
            <EntryField
                userName={choosed_id.chat_id > 0 ? `${renderItem[0].user_name} ${renderItem[0].user_surname}` : ''}
                setTypeMsgHandler={setNewMsg}
                typeMsg={newMsg}
                chat={renderItem}
            />
        </div>
    )
}