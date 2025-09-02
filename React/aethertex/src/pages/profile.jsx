import ProfPic from '../assets/ProfilepageIcons/PersonaldetIcon.png';
import AdressPic from '../assets/ProfilepageIcons/AdressbookIcon.png';
import CupponPic from '../assets/ProfilepageIcons/CupponIcon.png';
import SecurityPic from '../assets/ProfilepageIcons/SettingsIcon.png';
import OrdersPic from '../assets/ProfilepageIcons/OrdersIcon.png';
import '../stylesheets/defaultcomponets.css';
import { Link } from "react-router-dom";


function Profile() {

  return <>
            <div className="displayprof">
              <h1>Profile page</h1>
                  <div className="Displayprof-row1">
                    <Link to="/Personaldetails">
                      <section className="Profilesection">
                        <div>
                          <img src={ProfPic} className="Icon"></img>
                        </div>
                        <div className="Info"> 
                          <h1>Personal details</h1>
                          <p>Edit username,name,surname,email and phone number</p>
                        </div>
                      </section>
                    </Link>
                  
                <Link to="/Addressbook">
                  <section className="Profilesection">
                    <div>
                      <img src={AdressPic} className="Icon"></img>
                    </div>
                    <div className="Info"> 
                      <h1>Adress book</h1>
                      <p>Add, delete, or edit an address</p>
                    </div>
                  </section>
                </Link>

                <a>
                  <section className="Profilesection">
                    <div>
                      <img src={CupponPic} className="Icon"></img>
                    </div>
                      <div className="Info"> 
                      <h1>Cuppons and offers</h1>
                      <p>make use of coupons</p>
                    </div>
                  </section>
                </a>

              </div>

              <div className="Displayprof-row2">
                <a>
                  <section className="Profilesection">
                    <div>
                      <img src={SecurityPic} className="Icon"></img>
                    </div>

                    <div className="Info"> 
                      <h1>Security settings</h1>
                      <p>Change passowrd or enable 2 step authentication </p>
                    </div>
                  </section>
                </a>

                <a>
                  <section className="Profilesection">
                    <div>
                      <img src={OrdersPic} className="Icon"></img>
                    </div>
                    <div className="Info"> 
                      <h1>orders</h1>
                      <p>view all your orders</p>
                    </div>
                  </section>
                </a>

              </div>

            </div>
          </>;
}

export default Profile;
