import { useEffect,useState } from "react";
import {useGlobalContext } from 'components/context/GlobalContext'
import axios from 'axios';

interface IEntryFieldProps {
    setTypeMsgHandler:(value:string)=> void;
    typeMsg: string;
}

export const EntryField: React.FC<IEntryFieldProps> = ({setTypeMsgHandler,typeMsg }) => {

    const [update, setUpdate] = useState<boolean>(false)
    const {chooseId, userMessageHistory, setUserMessageHistory} = useGlobalContext()


    useEffect(()=> {
        const messageHistory = JSON.parse(localStorage.getItem('messageHistory') || '[]');
        setUserMessageHistory(messageHistory)
        console.log(userMessageHistory)
        setUpdate(false)
        
    }, [update])



        async function answer() {
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            
            localStorage.setItem('messageHistory',  JSON.stringify([...userMessageHistory,
                { text: response.data.value, time: new Date().toLocaleString().split(','), user_id: chooseId, chat_id: 1 },
            ]))
            setUpdate(true)
        } {/* почнму не работает!!   */}

        const msgMemorized = () => {
            localStorage.setItem('messageHistory',  JSON.stringify([...userMessageHistory,
                { text: typeMsg, time: new Date().toLocaleString().split(','), user_id: 66553, chat_id: 1 },
            ]))
            // const messageHistory = JSON.parse(localStorage.getItem('messageHistory') || '[]');
            // setUserMessageHistory(messageHistory);
            setUpdate(true)
            console.log(userMessageHistory)
        }



    return (
        <div className='type-line'>
            <label className='type-line__field'>
                <input 
                value={typeMsg}
                onChange={(e)=>{setTypeMsgHandler(e.currentTarget.value); console.log(typeMsg)}}
                placeholder='Type your message'
                className='type-line__input'
                name='type-line'
                type='text'
                />
                <button type='submit' onClick={()=>{ msgMemorized(); setTimeout(answer, 2000)}} className='type-line__send-btn'>send</button>
            </label>
        </div>
    )
}