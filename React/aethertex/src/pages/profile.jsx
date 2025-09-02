import React from "react";
import ProfPic from '../assets/ProfilepageIcons/PersonaldetIcon.png'
import AdressPic from '../assets/ProfilepageIcons/AdressbookIcon.png'
import CupponPic from '../assets/ProfilepageIcons/CupponIcon.png'
import SecurityPic from '../assets/ProfilepageIcons/SettingsIcon.png'
import OrdersPic from '../assets/ProfilepageIcons/OrdersIcon.png'

function Profile() {

  return <>
            <div className="displayprof">
              <h1>Profile page</h1>

              <div className="Displayprof-row1"> 

                <section className="Personaldetails">
                  <div className="Image">
                    <img src={ProfPic} className="Icon"></img>
                  </div>
                  <div className="Info"> 
                    <h1>Personal details</h1>
                    <p>Edit username,name,surname,email and phone number</p>
                  </div>
                </section>

                <section className="Adressbook">
                  <div className="Image">
                    <img src={AdressPic} className="Icon"></img>
                  </div>
                  <div className="Info"> 
                    <h1>Adress book</h1>
                    <p>Add, delete, or edit an address</p>
                  </div>
                </section>

                <section className="Cupponsandoffers">
                  <div className="Image">
                    <img src={CupponPic} className="Icon"></img>
                  </div>
                    <div className="Info"> 
                    <h1>Cuppons and offers</h1>
                  </div>
                </section>

              </div>

              <div className="Displayprof-row2">

                <section section="Securitysettings">
                  <div className="Image">
                    <img src={SecurityPic} className="Icon"></img>
                  </div>

                  <div className="Info"> 
                    <h1>Security settings</h1>
                    <p>Change passowrd or enable 2 step authentication </p>
                  </div>
                </section>

                <section className="orders">
                  <div className="Image">
                    <img src={OrdersPic} className="Icon"></img>
                  </div>
                  <div className="Info"> 
                    <h1>orders</h1>
                    <p>view all your orders</p>
                  </div>
                </section>

            </div>

            <div>Profile (displayprof)</div>
            </div>
          </>;
}

export default Profile;
