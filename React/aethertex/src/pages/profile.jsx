import ProfPic from "../assets/ProfilepageIcons/PersonaldetIcon.png";
import AdressPic from "../assets/ProfilepageIcons/AdressbookIcon.png";
import CupponPic from "../assets/ProfilepageIcons/CupponIcon.png";
import OrdersPic from "../assets/ProfilepageIcons/OrdersIcon.png";
import "../stylesheets/defaultcomponets.css";
import { Link } from "react-router";

function Profile() {
  return (
    <>
      <div className="displayprof">
        <h1>Profile page</h1>
        <div className="Displayprof-row1">
          <Link to="/personaldetails">
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

          <Link to="/addressbook">
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
        </div>

        <div className="Displayprof-row2">
          <Link to="/cuppons">
            <section className="Profilesection">
              <div>
                <img src={CupponPic} className="Icon"></img>
              </div>
              <div className="Info">
                <h1>Cuppons and offers</h1>
                <p>make use of coupons</p>
              </div>
            </section>
          </Link>

          <Link to="/orderhistory">
            <section className="Profilesection">
              <div>
                <img src={OrdersPic} className="Icon"></img>
              </div>
              <div className="Info">
                <h1>orders</h1>
                <p>view all your orders</p>
              </div>
            </section>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
