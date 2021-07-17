import React,{useState} from 'react';
import { Typography,InputBase } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Title = () => {
  const useStyle = makeStyles((theme) =>({
    editableTitleContainer:{
      margin:theme.spacing(1),
      display: 'flex',
    },
    editableTitle:{
      marginLeft:theme.spacing(1),
      flexGrow:1
    },
    input:{
      margin: theme.spacing(1),
      "&:focus":{backgroundColor:'#ddd'}
    }
  }))
  const [open,setOpen] = useState(false);
  const classes = useStyle()
  return (
    <div>
      {open? (<div className={classes}>
        <InputBase value="Todo from Title" inputProps={{className:classes.input}} fullWidth onBlur = {()=> setOpen(!open)}></InputBase>
      </div>)
      :
      (<div className={classes.editableTitleContainer}>
        <Typography onClick={()=>setOpen(!open)} className={classes.editableTitle}>
          Title Component
        </Typography>
        <MoreHorizIcon />
        </div>)}
    </div>
  )
}

export default Title
