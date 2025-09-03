import { Button } from "@mui/material";

function personaldetails()
{
    return(
            <>
              <h1>Personal details</h1>
                <div className="alldetails">
                    <div className="row">
                      <div className="Currentdetails">
                        <label>Username</label>
                        <input type="text" defaultValue="Username"></input>
                      </div>
                      <div className="Currentdetails">
                        <label>Name</label>
                        <input type="text" defaultValue="name"></input>
                      </div>
                    </div>

                    <div className="row">
                      <div className="Currentdetails">
                        <label>Surname</label>
                        <input type="text" defaultValue="Surname"></input>
                      </div>
                      <div className="Currentdetails">
                        <label>Email</label>
                        <input type="text" defaultValue="Email"></input>
                      </div>
                    </div>

                    <div className="row">
                      <div className="Currentdetails">
                        <label>Phone number</label>
                        <input type="text" defaultValue="Phone number"></input>
                      </div>
                    </div>
                    <div className="editpassword">
                          <p>Password</p>
                          <input type="text" className="changepassword" defaultValue="Current password:"></input>
                          <input type="text" className="changepassword" defaultValue="New password:"></input>
                          <input type="text" className="changepassword" defaultValue="Re-enter new password:"></input>
                    </div>

                    <Button>save changes</Button>
                </div>
            </>
          );
}
export default personaldetails