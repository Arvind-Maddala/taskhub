import React,{useState} from 'react';
import {List, Navbar} from '../../components';
import store from '../../utils/store'
import './style.css';
import {CardContext} from '../../utils/storeApi';
import {v4 as uuid} from 'uuid'


export default function Home({handleSignOut}) {
  const [data,setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,

    }
    const list = data.lists[listId];
    list.cards = [...list.cards,newCard];

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]:list,
      }
    }
    setData(newState)
  }
  return (
    <CardContext.Provider value={{addMoreCard}}>
      <div  className="home">
      <Navbar handleSignOut={handleSignOut}/>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId}/>
      }
      )}
    </div>
    </ CardContext.Provider>
    
  )
}
