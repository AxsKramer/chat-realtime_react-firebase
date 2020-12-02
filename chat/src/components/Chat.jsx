import React, { useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../context/ChatProvider';
import Form from './Form';


const Chat = () => {
  
  const {messages, user} = useContext(ChatContext);
  const refZoneChat = useRef(null);

  useEffect(() => {
    refZoneChat.current.scrollTop = refZoneChat.current.scrollHeight;
  }, [messages])

  return ( 
    <div className='mt-3 px-2' style={{height: '75vh', overflowY: 'scroll'}} ref={refZoneChat}>
      {
        messages.map((item, index) => (
          user.uid === item.uid ? (
            <div className='d-flex justify-content-end mb-2' key={index}>
              <span className='badge badge-pill badge-primary'>
                {item.message}
              </span>
            </div>
          ) : (
            <div className='d-flex justify-content-start mb-2' key={index}>
              <span className='badge badge-pill badge-secondary'>
                {item.message}
              </span>
            </div>
          )
        ))
      }
      
      
      <Form />
    </div>
  );
}
 
export default Chat;