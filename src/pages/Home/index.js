import React from 'react';
import {List, Navbar} from '../../components'
import './style.css';


export default function Home({handleSignOut}) {

  return (
    <div  className="home">
      <Navbar handleSignOut={handleSignOut}/>
      <List />
    </div>
  )
}
