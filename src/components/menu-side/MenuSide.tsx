import { ChatList } from "components/chat-list/ChatList"
import { ChatsHeader } from "components/header/ChatsHeader"
import {IChatLineItemProps} from 'components/chat-line/ChatLine'
import {useState } from 'react'

interface IMenuSideProps {
    data:IChatLineItemProps[]; 
}

export const MenuSide: React.FC<IMenuSideProps> = ({data}) => {

    const [searchValue, setSearchValue] = useState<string>('') // state for the searching value 


    return (
        <section className='chat-menu'>
            <ChatsHeader inputValue={searchValue} inputValueHandler={setSearchValue}/>
            <ChatList chats={data} searchRequets={searchValue}/>
        </section>
    )
}