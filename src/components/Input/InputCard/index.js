import React,{useState,useContext} from 'react';
import { IconButton } from '@material-ui/core';
import { Button, InputBase, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import {makeStyles, alpha} from '@material-ui/core/styles';
import  CardContext  from '../../../utils/storeApi';


const useStyle = makeStyles((theme) =>({
  card: {
    width: '280px',
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: 'green',
    color: '#fff',
    '&:hover': {
      background: alpha('#5AAC44', 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}))

const InputCard = ({setOpen, listId, type}) => {
  
  const classes = useStyle();
  const [cardTitle,setCardTitle] = useState('')
  const {addMoreCard, addMoreList} = useContext(CardContext)


  const handleBtnConfirm = () => {
    if(type === 'card') {
      addMoreCard(cardTitle, listId)
    setCardTitle('')
    setOpen(false)
    } else {
      addMoreList(cardTitle)
      setCardTitle('')
    setOpen(false)
    }
  }
 
  const handleBlur = () => {
    setOpen(false);
  }

  return (
    <div>
      <div >
      <Paper className={classes.card}>
        <InputBase onChange={(e)=>setCardTitle(e.target.value)} value={cardTitle} multiline fullWidth inputProps={{className:classes.input}} placeholder={type=== "card" ? 'Enter a title of this card..' : 'Enter list title..'} onBlur={handleBlur}/>
      </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>{type === 'card' ? "Add Card" : "Add List"}</Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default InputCard
