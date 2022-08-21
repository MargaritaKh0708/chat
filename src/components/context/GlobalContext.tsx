import React from 'react';
import { useContext } from 'react';
import {IMessagesItem, IChatLineItemProps} from 'components/chat-line/ChatLine';


export type GlobalContext = {
  chooseId: number;
  setChooseId: (value: number) => void;
  userMessageHistory:IMessagesItem[];
  setUserMessageHistory:(value:IMessagesItem[])=>void;
};

export const GlobalContext = React.createContext<GlobalContext>({
    chooseId: 0,
    setChooseId: () => {},
    userMessageHistory:[],
  setUserMessageHistory:()=>{},
});

export const useGlobalContext = () => useContext(GlobalContext);