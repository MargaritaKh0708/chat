import React from 'react';
import { useContext } from 'react';
import { Dispatch, SetStateAction } from 'react'
import { IMessagesItem, IChatLineItemProps } from 'components/chat-line/ChatLine';



export interface IChoosedChatId {
  user_id: number,
  chat_id: number
}

export interface IChatOwnerInfo {
  chatOwnerPhoto: string;
  chatOwnerName: string;
  chatOwnerId: number;
}


export type GlobalContextType = {
  chooseId: IChoosedChatId;
  setChooseId: Dispatch<SetStateAction<IChoosedChatId>>;
  userMessageHistory: IMessagesItem[];
  setUserMessageHistory: (value: IMessagesItem[]) => void;
  chatOwnerInfo: IChatOwnerInfo;
  setChatOwnerInfo: Dispatch<SetStateAction<IChatOwnerInfo>>;
  openChatHistory: boolean;
  setOpenChatHistory: (value: boolean) => void;

};

export const GlobalContext = React.createContext<GlobalContextType>({
  chooseId: {
    user_id: 0,
    chat_id: 0
  },
  setChooseId: () => { },
  userMessageHistory: [],
  setUserMessageHistory: () => { },
  chatOwnerInfo: {
    chatOwnerPhoto: '',
    chatOwnerName: '',
    chatOwnerId: 0
  },
  setChatOwnerInfo: () => { },
  openChatHistory: false,
  setOpenChatHistory: () => { }
});

export const useGlobalContext = () => useContext(GlobalContext);