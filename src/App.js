import React from 'react';
import {Home, SignUp} from './pages';
import { auth, providerFaceBook, providerGoogle} from './firebase'
import {useDispatch,useSelector} from 'react-redux';
import {setActiveUser, setUserLogOutState, selectUserName} from './features/userSlice';
import './App.css';


function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleSignInGoogle = () => {
    auth.signInWithPopup(providerGoogle).then((res)=> {
      console.log(res)
      dispatch(setActiveUser({
        userName: res.user.displayName,
        photoURL: res.user.photoURL
      }))
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleSignInFaceBook =  async () => {
    await auth.signInWithPopup(providerFaceBook).then((res)=> {
      dispatch(setActiveUser({
        userName: res.user.displayName,
        photoURL: res.user.photoURL
      }))
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState())
    }).catch((err) => {
        alert(err.message)
    })
  }

  return (
    <div className="app">
   {userName ? (<Home handleSignOut={handleSignOut}/>) :(<SignUp handleSignInGoogle={handleSignInGoogle} handleSignInFaceBook={handleSignInFaceBook}/>)}
    </div>
  );
}

export default App;
