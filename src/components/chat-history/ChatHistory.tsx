import {IChatLineItemProps } from "components/chat-line/ChatLine";
import { Avatar } from "components/UI/avatar/Avatar";

export interface IChatHistoryProps {
  choosed_chat:IChatLineItemProps;
  choosed_id: number;
}

export const ChatHistory: React.FC<IChatHistoryProps> = ({
  choosed_chat,
  choosed_id,
}) => {

  // //*Buy something
  // const addToCartHandler: () => void = () => {
  //   // get products in cart from localStorage
  //   const orderProducts = JSON.parse(localStorage.getItem('newMsgArray') || '[]');

  //     // add product to cart
  //     const orderItems = orderProducts.filter(
  //       (order: IOrder) => order.productId === product.id // compare good id that we choose with that which in basket already
  //     );
  //     if (orderItems.length === 0) {
  //       localStorage.setItem(
  //         'order',
  //         JSON.stringify([
  //           ...orderProducts,
  //           { time: new Date().toLocaleString().split(','), , credit: false },
  //         ])
  //       );
  //     }
  //   }
  // };

  return (
    <div className="chat-history">
      {choosed_chat.messages.length !== 0 ? (
        choosed_chat.messages.map((msg) =>
          msg.user_id === choosed_id ? (
            <div className='chat-history__msg'>
            <Avatar status={false} avatar={choosed_chat.photo}/>
            <div className='chat-history__incoming-content'> <div className="chat-history__incoming-msg">
              <span className="chat-history__incoming-msg-text msg-text">{msg.text}</span>
            </div>
            <p className="chat-history__incoming-msg-time msg-time">{msg.time[0].replace(/\.+/gi, '/')} {msg.time[1].substring(0,6)} {msg.time[1].substring(0,6).split(':').map(i=> +i)[0]>12?'PM':'AM'}</p></div>
           </div>
            
          ) : (
            <div className='chat-history__msg chat-history__msg--column'>
              <div className="chat-history__outgoing-msg">
              <span className="chat-history__outgoing-msg-text msg-text">{msg.text}</span>
             
            </div> <p className="chat-history__outgoing-msg-time msg-time">{msg.time[0].replace(/\.+/gi, '/')} {msg.time[1].substring(0,6)} {msg.time[1].substring(0,6).split(':').map(i=> +i)[0]>12?'PM':'AM'}</p></div>
            
          )
        )
      ) : (
        <div> Start your conversation </div>
      )}
    </div>
  );
};
