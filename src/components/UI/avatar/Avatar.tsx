import online from 'assets/images/availible.svg';


interface IAvatarProps {
    avatar:string;
    status: boolean;
}

export const Avatar: React.FC<IAvatarProps> = ({avatar, status}) => {
    return (
        <div className='user-logo'>
                <img src={avatar} alt ='user-avatar'/>
                {status ? <img className = 'online' src={online} alt='on-line'/> : false}
                </div> 
    )
}