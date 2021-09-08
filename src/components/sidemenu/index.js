import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Drawer, Grow } from '@material-ui/core';
import colors from '../../utils/color';
import {getImages} from '../../utils/imageApi';

const useStyles = makeStyles((theme) => ({
  drawer:{
    width: '400px',
  },
  menu:{
    marginTop:theme.spacing(2),
    display:'flex',
    justifyContent: 'space-around',
    marginBottom:theme.spacing(2)
  },
  box:{
    width:'45%',
    height:'90px',
    borderRadius:'9px',
    marginBottom:theme.spacing(2)
  },
   optionContainer:{
    marginTop:theme.spacing(2),
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
  }
}));

const SideMenu = ({openSideMenu, setOpenSideMenu, setBackgroundImage}) => {
  const classes= useStyles();
    const [openOptionsColor, setOpenOptionColor] = useState(false);
    const [openOptionsImage, setOpenOptionImage] = useState(false);
    const [images, setImage] = useState([]);

    const getListOfImages = async () => {
      const listOfImages  = await getImages();
      setImage(listOfImages);
    }
    useEffect(() => {
      getListOfImages();
    }, [])
  return (
    <div>
      <Drawer open={openSideMenu} anchor='right' onClose={()=>setOpenSideMenu(false)}>
        <div className={classes.drawer}>
        <div className={classes.menu}>
          <div  className={classes.box} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)', backgroundRepeat: 'no-repeat', backgroundSize:'cover',}} onClick={()=>setOpenOptionImage(true)}>
          </div>
          <div className={classes.box} style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RVOGvfFe_dyqQ6N2Oy5n6v1ieDP4bLM1_w&usqp=CAU)', backgroundRepeat: 'no-repeat', backgroundSize:'cover',}} onClick={()=>{
            setOpenOptionColor(true);
            setOpenOptionImage(false);
          }}>
          </div>
        </div>
        {openOptionsImage ? (<Grow in={openOptionsImage}>
        <div className={classes.optionContainer}>
          {images.map((image, index) => {
           return( 
           <div key={index} className={classes.box} style={{backgroundImage: `url(${image.thumb})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover',}} onClick={()=>setBackgroundImage(image.full)}>
           </div>)
          })}
        </div>
        </Grow>) : (<Grow in={openOptionsColor}>
        <div className={classes.optionContainer}>
          {colors.map((color, index) => {
           return( 
           <div key={index} className={classes.box} style={{
             backgroundColor:color,
           }} onClick={()=>setBackgroundImage(color)}>
           </div>)
          })}
        </div>
        </Grow>)}
        
        
        </div>
      </Drawer>
    </div>
  )
}

export default SideMenu
