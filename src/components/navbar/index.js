import React from 'react';
import {useSelector} from 'react-redux';
import './style.css'

export default function Navbar({handleSignOut}) {
  const store = useSelector((state) => state);
  return (
    <div className="navbar">

      <div className="navbar__title">
      <h2>TaskHub</h2> <span role="img" aria-label="memo">📝</span>
      </div>
      <div className="navbar__avatar">
       <div className="navbar__name">
       <p>Welcome,<span className="navbar__username">{store.user.userName.split(" ")[0]}</span> </p>
        <img src={store.user.photoURL} alt="avatar" style={{width:'36px', borderRadius:'50%'}}/>
       </div>
        <button className="signout--button" onClick={handleSignOut}> <i className="fas fa-sign-out-alt"></i>Signout</button>
      </div>
    </div>
  )
}
