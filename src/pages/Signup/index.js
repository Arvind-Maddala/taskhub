import React from 'react';
import './style.css'

export default function SignUp() {
  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__container--left">
          <h1>Welcome to TaskHub</h1>
          <p>Create account to manage your tasks accordingly.</p>
          <p>Continue with..</p>
          <div className="signup__btn">
          <button className="btn btn--google"><i class="fab fa-google"></i> Google</button>
          <button className="btn btn--fb"><i class="fab fa-facebook-f"></i> Facebook</button>
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
