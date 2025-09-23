import "../stylesheets/imgProduct.css";
import { useState,useEffect } from "react";
function ImgProduct({imgMain, img1, img2, img3, img4}) {
    const placeholder =
    "https://blocks.astratic.com/img/general-img-landscape.png";

  // start safe: filter out falsy values so thumbnails is never [undefined,...]
  const [thumbnails, setThumbnails] = useState(() =>
    [img1, img2, img3, img4].filter(Boolean)
  );

  // pick a sensible initial main image (imgMain, first available imgX, or empty)
  const [mainImg, setMainImg] = useState(() =>
    imgMain || img1 || img2 || img3 || img4 || ""
  );

  // Update thumbnails and mainImg whenever the props change (handles async props)
  useEffect(() => {
    const thumbs = [img1, img2, img3, img4].filter(Boolean);
    setThumbnails(thumbs);

    // If parent provided an explicit imgMain use it, otherwise keep current main or pick first thumb
    setMainImg((prev) => imgMain || thumbs[0] || prev || "");
  }, [imgMain, img1, img2, img3, img4]);

  const swapImg = (clickedImg) => {
    if (!clickedImg) return;
    setMainImg(clickedImg);
  };


    return (
        <div className="product-img">
            <img className="MainImg" src={"/PCS/"+mainImg} alt="Product Image" height={500} width={500} />
            <div className="thumbSec">
                {thumbnails.map((thumb, idx) => (
                <img 
                    className ="thumbnail"
                    src={"/PCS/"+thumb}
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
export default ImgProduct