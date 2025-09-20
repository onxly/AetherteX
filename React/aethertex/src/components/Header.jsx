import Icon from "../assets/AetherteXIcon.png";
import "../stylesheets/header.css";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router";
import { useState } from "react";
import { FaUser, FaCrown  } from "react-icons/fa";
import CartIcon from "./CartIcon";

function Header() {
  const { isLoggedIn, setIsLoggedIn, user, cart = [] } = useContext(AuthContext);
  const [LogModel, setLogModel] = useState(false);
  const [UserModel, setUserModel] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.Quantity, 0);
  return (
    <header className="navBar">
      <Link to="/">
        <img
          className="imgAetherteX"
          src={Icon}
          alt="AetherteX Icon"
          height={35}
          width={115}
        />
      </Link>

      <input className="searchBar" type="text" placeholder="Search..." />
      <button className="btnSearch">Search</button>

    {isLoggedIn? (
      <div
      className="UserBox"
      onMouseEnter={() => setUserModel(true)}
      onMouseLeave={() => setUserModel(false)}
    >
      {/* Trigger button */} 
        <div className="userOptions">
          {user.IsPremium?(
            <FaCrown width={20} height={20} color="black" />
          ):(
            <FaUser width={20} height={20} color="black" />
          )}
          
          <p>{user.username}</p>
        </div>
  

      {/* Floating panel */}
      {UserModel && (
        <div className="AccModel">
          <div className="AccContent">
            <span className="close" onClick={() => setUserModel(false)}>
              ×
            </span>
            <div className="HeadAccDet">
            {user.IsPremium?(
              <h2><FaCrown width={20} height={20} color="gold" /> &nbsp;{user.username} <em className="IsPrem">(Premium)</em></h2>
            ):(
              <h2><FaUser width={20} height={20} color="rgba(209, 166, 61, 1)" /> &nbsp;{user.username}</h2>
            )}
            <em style={{marginTop:"-20px", fontSize:"12px"}}>Loyaltity points: {user.LPoints}</em>
            <b style={{marginTop:"8px"}}>Account</b>
            <Link to={`/profile/${user.username}`}>
              <span className="HeadAccItems">Personal details</span>
            </Link>
            <Link to={`/profile/${user.username}`}>
              <span className="HeadAccItems">Addresses</span>
            </Link>
            <Link to={`/profile/${user.username}`}>
              <span className="HeadAccItems">Orders</span>
            </Link>
            <Link to={`/profile/${user.username}`}>
              <span className="HeadAccItems">Coupons</span>
            </Link>
            <Link className="lkSign" to="/">
              <button className="btnSign" onClick={() => setIsLoggedIn(false)}>Sign out</button>
            </Link>
            </div>

          </div>
        </div>
      )}
    </div>
    ):(
      <div
      className="UserBox"
      onMouseEnter={() => setLogModel(true)}
      onMouseLeave={() => setLogModel(false)}
    >
      {/* Trigger button */} 
        <div className="userOptions">
          <p>Account</p>
        </div>
  

      {/* Floating panel */}
      {LogModel && (
        <div className="AccModel">
          <div className="AccContent">
            <span className="close" onClick={() => setLogModel(false)}>
              ×
            </span>

            <Link className="lkSign" to="/login">
              <button className="btnSign">Sign in</button>
            </Link>
            <span className="txtRegister">
              New customer? <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
      )}
    </div>
    )}
    
    {isLoggedIn?(
      <Link to={"/cart"} style={{ textDecorationLine: "none" }}>
        <CartIcon iconColor={"white"} numItems={totalItems} />
      </Link>
    ):(
      <Link to={"/cart"} style={{ textDecorationLine: "none" }}>
        <CartIcon iconColor={"white"} numItems={0} />
      </Link>
    )}
      

    </header>
  );
}

export default Header;
