import Icon from '../assets/AetherteXIcon.png';
import UserIcon from '../assets/userIcon.png';
import CartIcon from '../assets/CartIcon.png';
import "../stylesheets/header.css";
function Header(CartElm) {
    return (
        <header className="navBar">
            <img className="imgAetherteX" src={Icon} alt="AetherteX Icon" height={35} width={115}/>

            <input className="searchBar" type="text" placeholder="Search..."/>
            <button className='btnSearch'>Search</button>
            <div className='userOptions'>
                <img src={UserIcon} height={20} width={20}/>
                <p>{CartElm.AccName}</p>
            </div>
            
            <div className='Cart'> 
                <img src={CartIcon} alt="Cart Icon" height={30} width={34}/>
                <b className='NumOf'>{CartElm.NumOf}</b>
                <b className="cartTxt">Cart</b>
            </div>
        </header>
    );
}

export default Header