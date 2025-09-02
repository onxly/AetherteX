    import React from 'react';
    import '../styling/register.css';
    import { Link } from 'react-router-dom';

    function Register() {
    return (
        <form style={{backgroundColor:'black'}}>
        <div className="column">
            
            <h2>Create your Account</h2>

            <label htmlFor="username" style={{ marginRight: "235px" }}>Username</label>
            <input type="text" id="username" placeholder="Type your Username" className="RegisterBoxs" style={{ height: "60px" }} />

            <label htmlFor="name" style={{ marginRight: "250px" }}>Name</label>
            <input type="text" id="name" placeholder="Type your Name" className="RegisterBoxs" />

            <label htmlFor="surname" style={{ marginRight: "245px" }}>Surname</label>
            <input type="text" id="surname" placeholder="Type your Surname" className="RegisterBoxs" />

            <label htmlFor="email" style={{ marginRight: "260px" }}>Email</label>
            <input type="text" id="email" placeholder="Type your Email" className="RegisterBoxs" />

            <label htmlFor="phoneNumber" style={{ marginRight: "204px" }}>Phone Number</label>
            <input type="text" id="phoneNumber" placeholder="Type your Phone Number" className="RegisterBoxs" />

            <label htmlFor="password" style={{ marginRight: "240px" }}>Password</label>
            <input type="password" id="password" placeholder="Type your Password" className="RegisterBoxs" />

            <label htmlFor="confirmPassword" style={{ marginRight: "184px" }}>Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your Password" className="RegisterBoxs" />

            <button type="submit" className="Registerloginbtn">Create Account</button>
            <p style={{ marginTop: "10px" }}>
                Already a Member? <Link to="/login">Click here!</Link>
            </p>
            <hr />
        </div>
        </form>
    );
    }

    export default Register;
