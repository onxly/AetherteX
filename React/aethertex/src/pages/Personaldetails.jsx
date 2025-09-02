function personaldetails()
{
    return(
            <>
              <h1>Personal details</h1>
                <div className="alldetails">
                    <div className="Managedetails">
                      <div className="Currentdetails">
                        <p>Username</p>
                        <address>Username</address>
                      </div>
                      <div className="Editdetails">
                        <button className="btneditdetails">Edit</button>
                      </div>
                    </div>

                    <div className="Managedetails">
                      <div className="Currentdetails">
                        <p>Name</p>
                        <address>Name</address>
                      </div>
                      <div className="Editdetails">
                        <button className="btneditdetails">Edit</button>
                      </div>
                    </div>

                    <div className="Managedetails">
                      <div className="Currentdetails">
                        <p>Surname</p>
                        <address>Surname</address>
                      </div>
                      <div className="Editdetails">
                        <button className="btneditdetails">Edit</button>
                      </div>
                    </div>

                    <div className="Managedetails">
                      <div className="Currentdetails">
                        <p>Email</p>
                        <address>Email</address>
                      </div>
                      <div className="Editdetails">
                        <button className="btneditdetails">Edit</button>
                      </div>
                    </div>

                    <div className="Managedetails">
                      <div className="Currentdetails">
                        <p>Phone number</p>
                        <address>Phone number</address>
                      </div>
                      <div className="Editdetails">
                        <button className="btneditdetails">Edit</button>
                      </div>
                    </div>
                      
                    <div className="Managedetails">
                      <div className="Currentdetails">
                          <p>Password</p>
                          <label>Current password</label>
                          <input type="text"></input>
                          <label>Current password</label>
                          <input type="text"></input>
                          <label>Current password</label>
                          <input type="text"></input>
                      </div>
                      <div className="Editdetails">
                          <button className="btneditdetails">Edit</button>
                      </div>
                    </div>
                </div>
            </>
          );
}
export default personaldetails