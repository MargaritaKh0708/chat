import {Avatar} from 'components/UI/avatar/Avatar'

export interface IMessagesItem {
    user_id:number;
    text:string;
    time:string[];
    chat_id:number;
}

export interface IChatLineItemProps {
    messages: IMessagesItem[]
    user_surname: string;
    user_name: string;
    user_id: number;
    chat_id: number;
    photo: string;
}

interface IChatLineProps {
    item:IChatLineItemProps;
    setChooseUserDataHandler: ()=> void;
}

export const ChatLine: React.FC<IChatLineProps>= ({item, setChooseUserDataHandler}) => {

    const lastMsgDate:string[] = item.messages.length?item.messages[item.messages.length-1].time[0].split('.'): [''];
    const lastMsgMounth:string = lastMsgDate.splice(1,1).toString();
    const lastMsgLetterMounth = lastMsgMounth==='01'?'Jan':lastMsgMounth==='02'?'Feb':lastMsgMounth==='03'?'Mar':lastMsgMounth==='04'?'Apr':lastMsgMounth==='05'?'May':lastMsgMounth==='06'?'Jun':lastMsgMounth==='07'?'Jul':lastMsgMounth==='08'?'Aug':lastMsgMounth==='09'?'Sep':lastMsgMounth==='10'?'Oct':lastMsgMounth==='11'?'Nov':'Dec'

    return (
        <div className='dialog' key={item.chat_id} onClick={setChooseUserDataHandler}>
            <div className='dialog__main-content'>
                <Avatar avatar={item.photo} status={item.user_id%3 ? true: false} additional_class_name='flex'/>
                <div className='dialog__main-info'>  
                <p className='dialog__title'> {item.user_name} {item.user_surname}</p>
                <p className='dialog__last-msg'>{item.messages.length?item.messages[item.messages.length-1].text:''}</p></div> 
                </div>
        <span className='dialog__last-msg-time'>
        {item.messages.length
            ? <>{lastMsgLetterMounth}&nbsp;
            {lastMsgDate.join(', ')}</>
            : ''}
        </span>
        </div>

    )
}