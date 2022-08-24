import { useGlobalContext } from 'components/context/GlobalContext'
import {IChatLineItemProps} from 'components/chat-line/ChatLine'
import { ChatsHeader } from "components/header/ChatsHeader"
import { ChatList } from "components/chat-list/ChatList"
import {useState } from 'react'

interface IMenuSideProps {
    data:IChatLineItemProps[]; 
}

export const MenuSide: React.FC<IMenuSideProps> = ({data}) => {

    const [searchValue, setSearchValue] = useState<string>('') // state for the searching value 
    const {chooseId, openChatHistory} = useGlobalContext()

    return (
        <section className='chat-menu'>
            <ChatsHeader inputValue={searchValue} inputValueHandler={setSearchValue}/>
            <ChatList chats={data} searchRequets={searchValue}/>
        </section>
    )
}