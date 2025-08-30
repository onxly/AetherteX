import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

function reviewBox(cusReview){
    return(
        <div>
            <b>{cusReview.Name}</b>
            <div>{[...Array(cusReview.numStars)].map((_, i) => <FaStar key={i} color="gold" />)}</div>
            <p>{cusReview.comment}</p>
        </div>
    )
} export default reviewBox