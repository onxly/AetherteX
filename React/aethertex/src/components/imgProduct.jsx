import "../stylesheets/imgProduct.css";
import { useState } from "react";
function imgProduct(imgItem) {
    const [mainImg, setMainImg] = useState(imgItem.imgMain)
    const [thumbnails, setThumbnails] = useState([imgItem.img1, imgItem.img2, imgItem.img3, imgItem.img4])

    const swapImg = (clickedImg, index) =>{
        const oldMain = mainImg;

        setMainImg(clickedImg)
    };
    return (
        <div className="product-img">
            <img className="MainImg" src={mainImg} alt="Product Image" height={500} width={500} />
            <div className="thumbSec">
                {thumbnails.map((thumb, idx) => (
                <img 
                    className ="thumbnail"
                    src={thumb}
                    alt="Product Image" 
                    height={100} 
                    width={100} 
                    key={idx}  
                    onClick={() => swapImg(thumb, idx)}
                />
                ))}
            </div>
        </div>
    );
}
export default imgProduct