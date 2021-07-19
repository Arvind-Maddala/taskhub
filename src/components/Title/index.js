import React,{useState, useContext} from 'react';
import { Typography,InputBase } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import storeApi from '../../utils/storeApi';


const useStyle = makeStyles((theme) =>({
  editableTitleContainer:{
    margin:theme.spacing(1),
    display: 'flex',
  },
  editableTitle:{
    marginLeft:theme.spacing(1),
    flexGrow:1,
    fontSize:'1.2rem',
    fontWeight:'bold'
  },
  input:{
    fontSize:'1.2rem',
    fontWeight:'bold',
    margin: theme.spacing(1),
    "&:focus":{backgroundColor:'#ddd'}
  }
}))

const Title = ({title, listId}) => {
  const [open,setOpen] = useState(false);
  const classes = useStyle();
  const [newTitle,setNewTitle] = useState(title)
  const {updateListTitle} = useContext(storeApi)
  const handleOnChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleBlur = () =>{
   updateListTitle(newTitle, listId);
   setOpen(false);
  }
  return (
    <div>
      {open? (<div className={classes}>
        <InputBase value={newTitle} inputProps={{className:classes.input}} fullWidth onBlur = {handleBlur} autoFocus onChange={handleOnChange}></InputBase>
      </div>)
      :
      (<div className={classes.editableTitleContainer}>
        <Typography onClick={()=>setOpen(!open)} className={classes.editableTitle}>
          {title}
        </Typography>.
        <MoreHorizIcon />
        </div>)}
    </div>
  )
}

export default Title
