
import { GlobalContext, IChatOwnerInfo } from 'components/context/GlobalContext';
import { AuthorizationPage } from 'components/Pages/AuthorizationPage';
import { IChoosedChatId } from 'components/context/GlobalContext';
import { IMessagesItem } from 'components/chat-line/ChatLine';
import { ChatPage } from 'components/Pages/ChatPage';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'


export const Pages: React.FC = () => {
    const [chooseId, setChooseId] = useState<IChoosedChatId>({ user_id: 0, chat_id: 0 });
    const [userMessageHistory, setUserMessageHistory] = useState<IMessagesItem[]>([]);
    const [chatOwnerInfo, setChatOwnerInfo] = useState<IChatOwnerInfo>(localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData') || '')
        : {
            chatOwnerPhoto: '',
            chatOwnerName: '',
            chatOwnerId: 0
        })
    const [openChatHistory, setOpenChatHistory] = useState<boolean>(false)

    return (
        <div className='App'>
            <GlobalContext.Provider value={{ openChatHistory, setOpenChatHistory, chatOwnerInfo, setChatOwnerInfo, chooseId, setChooseId, userMessageHistory, setUserMessageHistory }}> <Routes>
                <Route path='/' element={<AuthorizationPage />}></Route>
                <Route path='/chat' element={<ChatPage choosedId={chooseId} />}></Route>
            </Routes>
            </GlobalContext.Provider>
        </div>
    )
}