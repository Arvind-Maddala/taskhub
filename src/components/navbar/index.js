import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import SideMenu from '../sidemenu'
import './style.css';

export default function Navbar({handleSignOut, setBackgroundImage}) {
  const store = useSelector((state) => state);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const handleSideMenu = () => {
    setOpenSideMenu(true);
  }
  return (
    <div className="navbar">

      <div className="navbar__title">
      <h2>TaskHub</h2> <span role="img" aria-label="memo">📝</span>
      </div>
      <div className="navbar__avatar">
       <div className="navbar__name">
        <img src={store.user.photoURL} alt="avatar" style={{width:'36px', borderRadius:'50%'}}/>
       <p><span className="navbar__username">{store.user.userName.split(" ")[0]}</span> </p>
       </div>
        <button className="navbar__changeBGBtn" onClick={handleSideMenu} > Change Background </button>
        <button className="signout--button" onClick={handleSignOut}> <i className="fas fa-sign-out-alt"></i>Signout</button>
        <SideMenu openSideMenu={openSideMenu} setOpenSideMenu = {setOpenSideMenu} setBackgroundImage={setBackgroundImage} />
      </div>
    </div>
  )
}
