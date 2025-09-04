import '../stylesheets/cuppon.css';
import Coupon1 from '../assets/Couponimage/Coupon1.png';
import Coupon2 from '../assets/Couponimage/Coupon2.png';
import Coupon3 from '../assets/Couponimage/Coupon3.png';
import Coupon4 from '../assets/Couponimage/Coupon4.png';
import Coupon5 from '../assets/Couponimage/Coupon5.png';
import Coupon6 from '../assets/Couponimage/Coupon6.png';
import Coupon7 from '../assets/Couponimage/Coupon7.png';


function cuppons()
{
    return(
    <>
    <div className='displaycouppons'>
        <div className='Couponrow'>
            <img src={Coupon1} alt="Coupon image" className='Couponimg'></img>
            <img src={Coupon2} alt="Coupon image" className='Couponimg'></img>
            <img src={Coupon3} alt="Coupon image" className='Couponimg'></img>
            <img src={Coupon7} alt="Coupon image" className='Couponimg'></img>
        </div>
        <div className='Couponrow'>
            <img src={Coupon4} alt="Coupon image" className='Couponimg'></img>
            <img src={Coupon5} alt="Coupon image" className='Couponimg'></img>
            <img src={Coupon6} alt="Coupon image" className='Couponimg'></img>
        </div>

    </div>
    </>);
}
export default cuppons