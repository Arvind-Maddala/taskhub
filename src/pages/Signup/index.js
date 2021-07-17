import React from 'react';
import './style.css';

export default function SignUp({handleSignInGoogle, handleSignInFaceBook}) {


  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__container--left">
          <h1>Welcome to <span className="signup__title">TaskHub</span></h1>
          <p>Create account to manage your tasks accordingly.</p>
          <p>Continue with...</p>
          <div className="signup__btn">
          <button className="btn btn--google" onClick={handleSignInGoogle}><i className="fab fa-google"></i> Google</button>
          <button className="btn btn--fb" onClick={handleSignInFaceBook}><i className="fab fa-facebook-f"></i> Facebook</button>
          </div>
        </div>
        <div className="signup__container--right">
          <div className="signup__image">
          </div>
        </div>
      </div>
    </div>
  )
}
