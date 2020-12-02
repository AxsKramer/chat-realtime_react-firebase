import React, { useContext } from 'react';
import {ChatContext} from './context/ChatProvider';
import Navbar from './components/Navbar';
import Chat from './components/Chat';


function App() {

  const { user } = useContext(ChatContext);

  return user !== null ? (
    <div>
      <Navbar />
      {
        user.state 
          ? <Chat />
          : <div className='lead text-center mt-5'>You should sign in</div>
      }
    </div>
  ) : <div>Cargando ...</div> 
}

export default App;
