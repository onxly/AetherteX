import Icon from "../assets/AetherteXIcon.png";
import UserIcon from "../assets/userIcon.png";
import "../stylesheets/header.css";
import { Link } from "react-router";
import { useState } from "react";

function Header(HeadElm) {
  const [showModel, setShowModel] = useState(false);
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
      <div className="userOptions" onMouseEnter={() => setShowModel(true)}>
        <img src={UserIcon} height={20} width={20} />
        <p>{HeadElm.AccName}</p>
        {showModel && (
          <div className="AccModel">
            <div
              className="AccContent"
              onMouseLeave={() => setShowModel(false)}
            >
              <span className="close" onClick={() => setShowModel(false)}>
                ×
              </span>

              <Link className="lkSign" to="/login">
                <button className="btnSign">Sign in</button>
              </Link>
              <span className="txtRegister">
                New customer?<Link to="/register">Register</Link>
              </span>
            </div>
          </div>
        )}
      </div>

      <Link to="/cart" className="Cart">
        <img src={CartIcon} alt="Cart Icon" height={30} width={34} />
        <b className="NumOf">{HeadElm.NumOf}</b>
        <b className="cartTxt">Cart</b>
      </Link>
    </header>
  );
}

export default Header;
