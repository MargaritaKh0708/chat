import { IChatLineItemProps } from "components/chat-line/ChatLine";
import avatar from "assets/images/avatar_1.webp";
import avatar1 from "assets/images/avatar_2.jpeg";
import avatar2 from "assets/images/avatar_3.jpeg";
import avatar3 from "assets/images/avatar_4.jpeg";
import avatar4 from "assets/images/avatar_5.jpeg";
import avatar5 from "assets/images/avatar_6_Amanda-Wixted.jpeg";

export const date = new Date();
const mounth = date.getMonth();

const mounthName = mounth===0?'Jan':mounth===1?'Feb':mounth===2?'Mar':mounth===3?'Apr':mounth===4?'May':mounth===5?'Jun':mounth===6?'Jul':mounth===7?'Aug':mounth===8?'Sep':mounth===9?'Oct':mounth===10?'Nov':'Dec'

export const data: IChatLineItemProps[] = [
  {
    user_id: 145321,
    user_surname: "Black",
    user_name: "Guy",
    chat_id: 1,
    photo: avatar,
    messages: [
      { user_id: 145321, chat_id: 1, text: "Hello, how are you", time: ['18.08.2022', ' 19:04:27'] },
      { user_id: 145000, chat_id: 1, text: "Thanks, i'm fine", time: ['18.08.2022', ' 19:06:27'] },
      { user_id: 145321, chat_id: 1, text: 'What are u up to', time: ['18.08.2022', ' 19:07:27'] },
      { user_id: 145321, chat_id: 1, text: "Lets go to the party", time:['18.08.2022', ' 19:07:29'] },
      { user_id: 145000, chat_id: 1, text: "Sorry, i cann't", time: ['18.08.2022', ' 19:08:27'] },
      { user_id: 145321, chat_id: 1, text: "As always", time: ['19.08.2022', ' 00:09:27'] },

    ],
  },
  {
    user_id: 145322,
    user_surname: "Simpson",
    user_name: "Bart",
    chat_id: 2,
    photo: avatar1,
    messages: [
      { user_id: 145322, chat_id: 2, text: "Hello, how are you", time: ['24.07.2022', ' 19:09:27'] },
    ],
  },
  {
    user_id: 145323,
    user_surname: "Durnev",
    user_name: "Pavel",
    chat_id: 3,
    photo: avatar2,
    messages: [
      { user_id: 145323, chat_id: 3, text: "Hello, how are you", time: ['16.05.2022', ' 19:09:27']},
    ],
  },

  {
    user_id: 145324,
    user_surname: "Zuckerberg",
    user_name: "Mark",
    chat_id: 4,
    photo: avatar3,
    messages: [
      { user_id: 145324, chat_id: 4, text: "Hello, how are you", time: ['08.08.2022', ' 19:09:27'] },
    ],
  },

  {
    user_id: 145325,
    user_surname: "Musk",
    user_name: "Elan",
    chat_id: 5,
    photo: avatar4,
    messages: [
      { user_id: 145325, chat_id: 5, text: "Hello, how are you", time: ['09.08.2022', ' 19:09:27'] },
    ],
  },

  {
    user_id: 145326,
    user_surname: "Wixted",
    user_name: "Amanda",
    chat_id: 6,
    photo: avatar5,
    messages: [
      { user_id: 145326, chat_id: 6, text: "Hello, how are you", time: ['19.08.2022', ' 19:09:27'] },
    ],
  },
];
