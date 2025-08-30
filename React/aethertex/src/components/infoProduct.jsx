import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductSummary from "./ProductSummary.jsx";
import "../stylesheets/infoProduct.css";

function infoProduct(info) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (info.rating >= i) {
            stars.push(<FaStar key={i} color="gold" />);
        } else if (info.rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} color="gold" />);
        } else {
            stars.push(<FaRegStar key={i} color="gold" />);
        }
    }

    return (
        <div className="product-info">
            <h1>{info.name}</h1>
            <div className="rating">
                <span>{info.rating}</span>
                <span className="spanStars">{stars}</span>
                <a href="#reviewSec" >
                        {info.reviews} reviews
                </a>
            </div>
            <p>{info.description}</p>
            <table border="1" cellPadding="8">
                <caption>Specifications</caption>
                <tbody>
                    {Object.entries(info.specs || {}).map(([key, value]) => (
                        <tr key={key}>
                            <td className="col1">{key}:</td>
                            <td className="col2">{info.specs[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="buttonSec">
                <button className="btnShowMore">
                    Show More
                </button>
                
                <ProductSummary />
            </div>
        </div>
    );
}
export default infoProduct