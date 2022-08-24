
import {ExtendedChat} from 'components/extended-chat/ExtendedChat'
import { MenuSide } from 'components/menu-side/MenuSide';
import {data} from 'components/data/data'

export interface IChoosedChatId {
    user_id:number,
    chat_id:number
  }
interface IChatPageProps {
    choosedId: IChoosedChatId;
}

export const ChatPage: React.FC<IChatPageProps> = ({choosedId}) => {

  
    return (
        <section className='chat-page container'>
        <MenuSide data={data}/>
        <ExtendedChat chats={data} choosed_id={choosedId}/>
        </section>
    )
}