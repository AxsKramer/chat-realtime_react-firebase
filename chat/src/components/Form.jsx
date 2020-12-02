import React, { useContext, useState } from 'react';
import {ChatContext} from '../context/ChatProvider';

const Form = () => {

  const {addMessages, user} = useContext(ChatContext);
  const [msg, setMsg] = useState('');

  const addMsg = event => {
    event.preventDefault();
    if(!msg.trim()){
      console.log('Field Empty');
      return;
    }
    addMessages(msg, user.uid);
    setMsg('');

  }

  return ( 
    <form className='fixed-bottom input-group p-3 bg-dark' onSubmit={addMsg}>
      <input 
        type="text" 
        className='form-control'
        value={msg}
        onChange={e => setMsg(e.target.value)}  
      />
      <div className='input-group-append'>
        <button className='btn btn-primary' type='submit'>
          Send
        </button>
      </div>
    </form>
  );
}
 
export default Form;