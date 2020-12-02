import React, { createContext, useEffect, useState } from 'react';
import {db, auth, provider} from '../firebase';

export const ChatContext = createContext();

const ChatProvider = (props) => {
  
  const dataUser = {uid: null, email: null, state: null};
  const [user, setUser] = useState(dataUser);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    detectUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[]);

  const detectUser = () => {
    auth.onAuthStateChanged(user =>  {
      if(user){
        setUser({uid: user.uid, email: user.email, state: true})
        loadMessages() 
      }
      else{
        setUser({uid: null, email: null, state: false}) 
      }
    });
  };

  const userLogin = async () => {
    try{
      await auth.signInWithPopup(provider);

    }
    catch(error){
      console.log(error);
    }
  }

  const userLogout = () => auth.signOut();

  const loadMessages = () => {
    db.collection('chat').orderBy('date').onSnapshot(query => {
      const arrayMessages = query.docs.map(item => item.data());
      setMessages(arrayMessages);
    })
  }

  const addMessages = async (messageInput, uidChat) => {
    try { 
      await db.collection('chat').add({
        date: Date.now(),
        message: messageInput,
        uid: uidChat
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ChatContext.Provider value={{user, messages, userLogin, userLogout, addMessages}}>
      {props.children}
    </ChatContext.Provider>
  )
}

export default ChatProvider;