import {useGlobalContext} from 'components/context/GlobalContext'
import {LogOutBtn}  from 'components/authorization/LogOutBtn'
import default_avatar from 'assets/images/default.jpeg';
import {Avatar } from 'components/UI/avatar/Avatar';
import search from 'assets/images/search.png';


interface IChatsHeaderProps {
    inputValue:string;
    inputValueHandler:(value:string)=> void;
}

export const ChatsHeader: React.FC<IChatsHeaderProps>= ({inputValue, inputValueHandler}) => {
    
    const {chatOwnerInfo} = useGlobalContext(); 

    return (
        <div className='header'>
            <div className='header__user-info'> 
            <Avatar avatar={chatOwnerInfo.chatOwnerPhoto || default_avatar} status={true}/>
            <h3 className='header__title'>{chatOwnerInfo.chatOwnerName || 'Guest'}</h3>
            </div>
            <label className='header__search'>
                <img className = 'search' src={search} alt='search'/>
                <input 
                value={inputValue}
                onChange={(e)=> {inputValueHandler(e.currentTarget.value);console.log(inputValue)}}
                placeholder='Search or start new chat'
                className='header__seach-field'
                name='user-search'
                type='text'
                /> 
            </label>
            {chatOwnerInfo.chatOwnerName?<LogOutBtn/>:false}
        </div>
    )
}