import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

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
            <button
                style={{backgroundColor: "rgba(209, 166, 61, 1)", marginTop: "10px", marginLeft: "10px", marginBottom: "10px", padding: "10px 20px", borderRadius: "20px", cursor: "pointer", width: "150px", height: "40px", fontWeight: "bold", textAlign: "center"}}
                onClick={() => setShowModal(true)} 
            >
                Write a review
            </button>

        {showModal && (
            <div 
            style={{
                position: "fixed",
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: "rgba(0,0,0,0.6)", // dark background overlay
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                Index: 1000,
            }}
            >
                
            <div 
                style={{
                position: "relative",
                backgroundColor: "#121212",
                padding: "10px",
                borderRadius: "10px",
                minWidth: "300px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",                
                display: "flex",    
                flexDirection: "column",
                }}
            >
                
                <span
                    onClick={() => setShowModal(false)}
                    style={{
                    position: "absolute",
                    top: "10px",
                    right: "15px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "white",
                    }}
                >
                    ×
                </span>
                
                <h2>Write a review</h2>
                <p style={{marginTop: "-10px"}}>Enter the number of stars</p>
                
                <div style={{ display: "flex", gap: "5px", fontSize: "20px", cursor: "pointer", marginTop: "-10px"}}>
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

                <p style={{marginTop: "20px"}}>Your review</p>
                <textarea style={{marginTop: "-8px", height: "150px", borderRadius: "10px", backgroundColor: "#1a1a1a", color: "white", padding: "10px", border: "none", resize: "none"}}
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