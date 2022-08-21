import avatar from 'assets/images/avatar_1.webp';
import search from 'assets/images/search.png';
import {Avatar } from 'components/UI/avatar/Avatar';


interface IChatsHeaderProps {
    inputValue:string;
    inputValueHandler:(value:string)=> void;
}

export const ChatsHeader: React.FC<IChatsHeaderProps>= ({inputValue, inputValueHandler}) => {
    
    return (
        <div className='header'>
            <Avatar avatar={avatar} status={true}/>
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
        </div>
    )
}