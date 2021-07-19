import React,{useState,useContext} from 'react';
import { IconButton } from '@material-ui/core';
import { Button, InputBase, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import {makeStyles, alpha} from '@material-ui/core/styles';
import { CardContext } from '../../../utils/storeApi';


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

const InputCard = ({setOpen, listId}) => {
  const classes = useStyle();
  const [cardTitle,setCardTitle] = useState('')
  const {addMoreCard} = useContext(CardContext)
  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, listId)
    setCardTitle('')
    setOpen(false)
  }
 
  const handleBlur = () => {
    setOpen(false);
    setCardTitle('')
  }
  return (
    <div>
      <div >
      <Paper className={classes.card}>
        <InputBase onChange={(e)=>setCardTitle(e.target.value)} value={cardTitle} multiline fullWidth inputProps={{className:classes.input}} placeholder="Enter a title of this card.." onBlur={handleBlur}/>
      </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>Add Card</Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default InputCard
