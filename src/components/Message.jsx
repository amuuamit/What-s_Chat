import { AuthContext } from '@/context/AuthContext';
import { ChatContext } from '@/context/ChatContext';
import React, { useContext } from 'react';
import { format } from 'date-fns';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const isOwner = message.senderId === currentUser.uid;

  // Format the timestamp
  const formattedDate = message.date ? format(message.date.toDate(), 'PPpp') : '';

  return (
    <div className={`message ${isOwner ? 'owner' : ''}`}>
      <div className="messageInfo">
        <img
          src={isOwner ? currentUser.photoURL : data.user.photoURL}
          alt=""
        />
        <span>{formattedDate}</span>
      </div>
      <div className={`messageContent ${isOwner ? 'owner' : ''}`}>
        {message.text && <p>{message.text}</p>}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;