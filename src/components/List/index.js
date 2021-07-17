import React from 'react'
import {Paper,Typography,CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from '../Title'
import { Card } from '../../container';
import { InputContainer } from '../Input';

const useStyle = makeStyles((theme) =>({
  root: {
    width:'300px',
    backgroundColor:'#EBECF0',
    marginLeft: theme.spacing(1),
  }
}))
const List = ({list}) => {
  const classes = useStyle()
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
            <Title title={list.title}/>
            {list.cards.map((card)=> {
              return <Card key={card.id} card={card}/>
            })}
            <InputContainer />
      </Paper>
    </div>
  )
}

export default List