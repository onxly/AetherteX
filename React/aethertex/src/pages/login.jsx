import React from 'react';
import Zeus from './Zeus.jpg';  // <-- import the image
import '../styling/login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
<div className="formStyle">
  
    <div><img src={Zeus} width={300} height={300} alt="Zeus" /></div>

         
       <div style={{marginRight:100}}><input type="text" id="email" placeholder="Member email" className="Boxs" /> </div> 
       <div style={{marginRight:100}}><input type="password" id="password" placeholder="Password" className="Boxs"/></div>

      <button type="submit" className="loginbtn">Log in</button>
      <p>Not a member? <Link to='/register'>Register here!</Link></p>
  
    
</div>

  );
}

export default Login;
