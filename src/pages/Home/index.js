import React,{useState} from 'react';
import {List, Navbar} from '../../components';
import store from '../../utils/store'
import './style.css';


export default function Home({handleSignOut}) {
  const [data,setData] = useState(store)
  return (
    <div  className="home">
      <Navbar handleSignOut={handleSignOut}/>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId}/>
      }
      )}
    </div>
  )
}
