import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import {AddRatingforProduct} from "../jsfunctions/alljsfunctions";
import "../stylesheets/profile.css";

function DetailsModel({}){
    const { user, changePassword, updateUser } = useContext(AuthContext);
    const [userN, setUserN] = useState(user.username);
    const [FName, setFName] = useState(user.name);
    const [LName, setLName] = useState(user.surname);
    const [phone, setPhone] = useState(user.phoneNumber);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [newPassword, setNew] = useState("");

    const [bUserN, setbUserN] = useState(true);
    const [bName, setbName] = useState(true);
    const [bSur, setbSur] = useState(true);
    const [bPhone, setbPhone] = useState(true);
    const [bEmail, setbEmail] = useState(true);
    const [bPass, setbPass] = useState(true);
    const [bNew, setbNew] = useState(true);
    const [bchangePass, setChange] = useState(false)
    const [bSubmit, setBSubmit] = useState(false);

useEffect(() => {
    async function changePass() {
    const uID = parseInt(user.userId);
    try {
      const res = await changePassword(uID, password, newPassword);
      setChange(false);
      alert("Password changed");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          alert("Incorrect password (404)");
        } else {
          alert(`Server error: ${err.response.status}`);
        }
      } else {
        alert(`Network error: ${err.message}`);
      }
    }
  }

  if (bchangePass && bSubmit) {
    changePass();
  }
}, [password, newPassword, bchangePass, bSubmit]);

useEffect(() => {
        async function update() {
    const uID = parseInt(user.userId);
    console.log("UserId"+uID);
    try {
      const res = await updateUser(uID, userN, FName, LName, email, phone);
      setBSubmit(false);
      alert("User information updated");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          alert("User not found (404)");
        } else {
          alert(`Server error: ${err.response.status}`);
        }
      } else {
        alert(`Network error: ${err.message}`);
      }
    }
  }

  if (bSubmit) {
    update();
  }
}, [bSubmit, user, FName, userN, LName, email, phone]);

    
    return(
            <section className="DetailsPage">

                <h2>Personal Details</h2>

                <div className="DetailBox">
                    <h3>Username</h3>
                    <input 
                        type="text" 
                        defaultValue={user.username} 
                        disabled={bUserN} 
                        onChange={(e) => setUserN(e.target.value)}
                    ></input>
                    <button className="btnEditDet" onClick={() =>setbUserN(false)}>Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>First Name</h3>
                    <input 
                        type="text" 
                        defaultValue={user.name} 
                        disabled={bName}
                        onChange={(e) => setFName(e.target.value)}

                    ></input>
                    <button className="btnEditDet" onClick={() => setbName(false)}>Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Last Name</h3>
                    <input 
                        type="text" 
                        defaultValue={user.surname} 
                        disabled={bSur}
                        onChange={(e) => setLName(e.target.value)}
                    ></input>
                    <button className="btnEditDet" onClick={() => setbSur(false)}>Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Phone number</h3>
                    <input 
                        type="text" 
                        defaultValue={user.phoneNumber} 
                        disabled={bPhone}
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <button className="btnEditDet" onClick={() =>setbPhone(false)}>Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Email</h3>
                    <input 
                        type="email" 
                        defaultValue={user.email} 
                        disabled={bEmail}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <button className="btnEditDet" onClick={() => setbEmail(false)}>Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Current Password</h3>
                    <input type="Current password" 
                        onChange={(e) => setPassword(e.target.value)}
                        disabled = {bPass}
                    ></input>
                    <button className="btnEditDet" onClick={() => {
                        setChange(true);
                        setbPass(false);
                    }}>Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>New Password</h3>
                    <input type="New Password" onChange={(e) => setNew(e.target.value)}
                        disabled={bNew}
                    ></input>
                    <button 
                        className="btnEditDet" 
                        onClick={() => {
                            setChange(true);
                            setbNew(false);
                        }}
                    >Edit</button>
                </div>
                <button className="btnSave" onClick={() => setBSubmit(true)}>Save Changes</button>
            </section>
    );
} export default DetailsModel