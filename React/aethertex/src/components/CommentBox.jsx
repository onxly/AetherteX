import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { useState,useEffect } from "react";

function CommentBox(cusReview){
    let reviewDate = new Date(cusReview.date);
    return(
        <div>
            <span><b>{cusReview.Name}</b> <em>{reviewDate.toLocaleDateString("fr-FR")}</em></span>
            <div>{[...Array(cusReview.numStars)].map((_, i) => <FaStar key={i} color="gold" />)}</div>
            <p>{cusReview.comment}</p>
        </div>
    )
} export default CommentBox