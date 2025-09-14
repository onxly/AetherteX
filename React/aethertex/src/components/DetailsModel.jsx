import "../stylesheets/profile.css";
function DetailsModel({User}){
    return(
            <section className="DetailsPage">
                <h2>Personal Details</h2>

                <div className="DetailBox">
                    <h3>Username</h3>
                    <input type="text" defaultValue={User.Username} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>First Name</h3>
                    <input type="text" defaultValue={User.FirstName} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Last Name</h3>
                    <input type="text" defaultValue={User.LastName} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Email</h3>
                    <input type="email" defaultValue={User.Email} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>

                <div className="DetailBox">
                    <h3>Password</h3>
                    <input type="password" defaultValue={User.Password} disabled></input>
                    <button className="btnEditDet">Edit</button>
                </div>
                <button className="btnSave">Save Changes</button>
            </section>
    );
} export default DetailsModel