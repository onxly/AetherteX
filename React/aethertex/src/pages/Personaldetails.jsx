import { Button } from "@mui/joy";

function personaldetails()
{
    return(
            <>
            <div className="DisplayDetailspage">
                <div className="DisplayDetails">
                  <h1>Personal details</h1>
                  <div className="userdetails">
                    <div className="DisplayDetails_col1">
                      <div className="Currentdetails">
                        <label>Username</label>
                        <input type="text" className="txtPersonaldetails"></input>
                      </div>
                      <div className="Currentdetails">
                        <label>Email</label>
                        <input type="text" className="txtPersonaldetails"></input>
                      </div>
                    </div>

                    <div className="DisplayDetails_col2">
                      <div className="Currentdetails">
                        <label>Name</label>
                        <input type="text" className="txtPersonaldetails"></input>
                      </div>
                      <div className="Currentdetails">
                        <label>Phone number</label>
                        <input type="text" className="txtPersonaldetails" ></input>
                      </div>
                    </div>

                    <div className="DisplayDetails_col3">
                      <div className="Currentdetails">
                          <label>Surname</label>
                          <input type="text" className="txtPersonaldetails"></input>
                      </div>
                    </div>
                  </div>
                    <div className="editpasswordsection">
                          <h1>Password</h1>
                            <div className="Passworddetails">
                              <div className="changepasswordsect">
                                <label>Current password:</label>
                                <input type="text" className="txtchangepassword"></input>
                              </div>
                              <div className="changepasswordsect">
                                <label>New password:</label>
                                <input type="text" className="txtchangepassword"></input>
                              </div>
                              <div className="changepasswordsect">
                                <label>Re-enter new password:</label>
                                <input type="text" className="txtchangepassword" ></input>
                              </div>
                            </div>
                    </div>

                    <button className="btnsavechanges">save changes</button>
                  </div>
                  <div className="userimage">
                      <section className="Profileimg">
                                    <div>
                                      <img src={ProfPic} className="ProfiledetIcon"></img>
                                    </div>
                                    <div className="ProfInfo">
                                      <p>username<br/>email</p>
                                    </div>
                                  </section>
                  </div>
            </div>
            </>
          );
}
export default personaldetails;