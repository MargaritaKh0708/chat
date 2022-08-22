import React from 'react';
import { useContext } from 'react';
import {IChoosedChatId} from 'App'
import {Dispatch, SetStateAction} from 'react'
import {IMessagesItem, IChatLineItemProps} from 'components/chat-line/ChatLine';


export type GlobalContext = {
  chooseId: IChoosedChatId;
  setChooseId: Dispatch<SetStateAction<IChoosedChatId>>;
  userMessageHistory:IMessagesItem[];
  setUserMessageHistory:(value:IMessagesItem[])=>void;
};

export const GlobalContext = React.createContext<GlobalContext>({
    chooseId: {user_id:0,
      chat_id:0},
    setChooseId: () => {},
    userMessageHistory:[],
  setUserMessageHistory:()=>{},
});

export const useGlobalContext = () => useContext(GlobalContext);