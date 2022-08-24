import { useGlobalContext } from 'components/context/GlobalContext'
import { IChatLineItemProps } from 'components/chat-line/ChatLine'
import { ChatsHeader } from "components/header/ChatsHeader"
import { ChatList } from "components/chat-list/ChatList"
import { useState, useEffect } from 'react'

interface IMenuSideProps {
    data: IChatLineItemProps[];
}

enum WindowVariant {
    'tablet' = 800
}

export const MenuSide: React.FC<IMenuSideProps> = ({ data }) => {

    const [searchValue, setSearchValue] = useState<string>('') // state for the searching value 
    const [hideChatMenu, setHideChatMenu] = useState<boolean>(false) // for reading window size
    const { openChatHistory } = useGlobalContext()


    // ADAPTIVE

    useEffect(() => {
        const handleResize: () => void = () => {
            if (window.innerWidth <= WindowVariant.tablet) setHideChatMenu(true);
            else setHideChatMenu(false)
        };

        handleResize();
        window.addEventListener('resize', handleResize);
    });

    return (
        <section className={openChatHistory && hideChatMenu ? 'chat-menu hidden' : 'chat-menu'}>
            <ChatsHeader inputValue={searchValue} inputValueHandler={setSearchValue} />
            <ChatList chats={data} searchRequets={searchValue} />
        </section>
    )
}