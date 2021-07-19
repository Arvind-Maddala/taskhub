import React,{useState} from 'react';
import {List, Navbar} from '../../components';
import store from '../../utils/store'
import './style.css';
import CardContext from '../../utils/storeApi';
import {v4 as uuid} from 'uuid'
import { InputContainer } from '../../components/Input';
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) =>({
  root: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor:'green',
    width: '100%',
  }
}))
export default function Home({handleSignOut}) {
  const [data,setData] = useState(store);
  const classes = useStyle()
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
 
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
   const list = data.lists[listId];
   list.title = title;
   const newState = {
     ...data,
     list:{
       ...data.lists,
       [listId]:list,
     }
   };
    setData(newState)
  }

 
  return (
    <CardContext.Provider value={{addMoreCard, addMoreList,updateListTitle}}>
      <div  className="home">
      <Navbar handleSignOut={handleSignOut}/>
      <div className={classes.root}>
      {data.listIds.map((listId,index) => {
        const list = data.lists[listId];
        return <List list={list} key={listId} index={index}/>
      }
      )}
      <InputContainer type="list"/>
      </div>
    </div>
    </ CardContext.Provider>
    
  )
}
