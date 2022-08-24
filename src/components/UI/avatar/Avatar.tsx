import online from 'assets/images/availible.svg';


interface IAvatarProps {
    additional_class_name?: string;
    status: boolean;
    avatar: string;
}

export const Avatar: React.FC<IAvatarProps> = ({ avatar, status, additional_class_name }) => {
    return (
        <div className={`user-logo ${additional_class_name || ''}  `}>
            <img src={avatar} alt='user-avatar' />
            {status ? <img className='online' src={online} alt='on-line' /> : false}
        </div>
    )
}