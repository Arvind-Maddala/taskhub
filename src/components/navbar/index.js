import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import SideMenu from '../sidemenu'
import './style.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Navbar({handleSignOut, setBackgroundImage}) {
  const store = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const handleSideMenu = () => {
    setOpenSideMenu(true);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
        
    
        <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Settings <i className="fas fa-caret-down"></i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Button className="navbar__changeBGBtn" onClick={handleSideMenu} > Change Background </Button></MenuItem>
        <MenuItem onClick={handleClose}>    <Button className="signout--button" onClick={handleSignOut}> <i className="fas fa-sign-out-alt"></i>Signout</Button></MenuItem>
      </Menu>
        </div>
        <SideMenu openSideMenu={openSideMenu} setOpenSideMenu = {setOpenSideMenu} setBackgroundImage={setBackgroundImage} />
      </div>
    </div>
  )
}
