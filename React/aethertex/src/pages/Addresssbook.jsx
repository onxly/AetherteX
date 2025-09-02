function addressbook ()
{
    return
    <>
        <div className="address1">
            <div>
                <address>Steet</address>
                <address>city</address>
                <address>country</address>
                <address>phone number</address>
            </div>
            <div className="managemnt buttons">
                <button>edit</button>
                <button>remove</button>
                <button>set as default</button>
            </div>                          
        </div>

        <div className="addadress">
            <button>add address</button>
            <label>pop up page</label>
        </div>
    
    </>;
}
export default addressbook