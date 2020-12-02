import React, {useContext} from 'react';
import {ChatContext} from '../context/ChatProvider';


const Navbar= () => {

  const {user, userLogin, userLogout} = useContext(ChatContext);
  
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <span className="nav-bar-brand">Chat</span>
      <div>
        {
          user.state 
            ? (
              <button className="btn btn-outline-danger my-2" onClick={userLogout}>
                Logout
              </button>

            )
            :(
              <button className="btn btn-outline-success my-2" onClick={userLogin}>
                Signin
              </button>
            )
        }
        
      </div>
    </nav>
  )
}

export default Navbar;
