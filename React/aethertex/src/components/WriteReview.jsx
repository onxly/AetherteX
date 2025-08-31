import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../stylesheets/WriteReview.css";

function WriteReview() {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<FaRegStar
             key={i} color="gold" 
             onClick={() => handleStarClick(5)}
             />);
    }

    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);

    return (
        <div>
            <button className="btnWrite" onClick={() => setShowModal(true)} >
                Write a review``
            </button>

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
                    placeholder="Write your review here...(255 characters max)"
                    maxLength={255}
                >   
                </textarea>

                <button
                    style={{backgroundColor: "rgba(209, 166, 61, 1)", marginTop: "10px", marginBottom: "10px", borderRadius: "10px", cursor: "pointer", width: "75px", height: "35px", fontWeight: "bold", textAlign: "center"}}
                    onClick={() => setShowModal(false)} 
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