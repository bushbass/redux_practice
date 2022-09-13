import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from './messageListSlice';

function MessageList() {
  const [formName, setformName] = useState('enter new message');

  const dispatch = useDispatch();
  const messageList = useSelector((state) => state.messageList);

  return (
    <div>
      <div>Messages</div>
      <div>
        <label htmlFor="message">new message</label>
        <input
          id="message"
          type="text"
          placeholder={formName}
          onChange={(e) => setformName(e.target.value)}
        />
        <button onClick={() => dispatch(addMessage(formName))}>
          add message
        </button>
        <ul>
          {messageList.value.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default MessageList;
