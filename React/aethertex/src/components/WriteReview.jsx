import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useState,useEffect } from "react";
import {AddRatingforProduct} from "../jsfunctions/alljsfunctions";
import "../stylesheets/WriteReview.css";

function WriteReview({ prodid }) {
    const { isLoggedIn } = useContext(AuthContext);
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<FaRegStar
        key={i} color="gold" 
         onClick={() => handleStarClick(5)}
             />);
    }

    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [isSent, setSent] = useState(false);
    
    useEffect(() => {
        async function addReview() {
            const pId = parseInt(prodid);
            console.log("Product info Write: "+prodid)
            console.log("Stars Write: "+rating)
            console.log("Review Write: "+review)
        if (!isNaN(rating) && !isNaN(prodid)) {
            await AddRatingforProduct(1, prodid, rating, review);
            console.log("Review sent successfully");
            
          } else {
            console.log("Review NOT sent successfully");
          }  
        }
        if (isSent === true && rating > 0) {
          addReview();
        }
      }, [isSent]);

    return (
        <div>
            {isLoggedIn?(
                <button className="btnWrite" onClick={() => setShowModal(true)} >
                    Write a review
                </button>
            ):(
                <></>
            )}
            

        {showModal && (
            <div className="WriteModel">          
            <div className="WriteContent">
                <span className="close" onClick={() => setShowModal(false)}>
                    ×
                </span>
                
                <h2>Write a review</h2>
                <p className="NumStars">Enter the number of stars</p>
                
                <div>
                    {[1, 2, 3, 4, 5].map((star) =>
                        star <= rating ? (
                        <FaStar 
                            key={star} 
                            color="gold" 
                            onClick={() => setRating(star)} 
                        />
                        ) : (
                        <FaRegStar 
                            key={star} 
                            color="gray" 
                            onClick={() => setRating(star)} 
                        />
                        )
                    )}
                </div>

                <p className="txtRev">Your review</p>
                <textarea className="taComment" id="taComment"
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here...(255 characters max)"
                    maxLength={255}
                >   
                </textarea>

                <button
                    className="btnSubmit"
                    onClick={() => {
                                    setSent(true);
                                    setShowModal(false);
                                }
                            } 
                >
                    Submit
                </button>

            </div>
            </div>
        )}
        </div>
    );
}

export default WriteReview;