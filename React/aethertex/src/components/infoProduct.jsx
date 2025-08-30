import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductSummary from "./ProductSummary.jsx";
import '../stylesheets/index.css'

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
                <span style={{marginLeft: "8px"}}>{stars}</span>
                <a 
                    href="#reviews-product" 
                    style={{marginLeft: "10px", fontSize: "12px", textDecoration: "none", color: "cyan"}}>
                        {info.reviews} reviews
                </a>
            </div>
            <p>{info.description}</p>
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "500px" }}>
                <caption style={{ fontWeight: "bold", marginBottom: "8px", textAlign: "left"}}>
                Specifications
                </caption>
                <tbody>
                    {Object.entries(info.specs || {}).map(([key, value]) => (
                        <tr key={key}>
                            <td style={{fontWeight: "bold", width: "30%"}}>{key}:</td>
                            <td style={{width: "70%"}}>{info.specs[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{marginTop: "10px", display: "flex", gap: "10px"}}>
                <button className="btnShowMore"
                    style={{backgroundColor: "transparent", border: "2px solid white", color: "white", cursor: "pointer", width: "125px", height: "40px", fontWeight: "bold" }}
                >
                    Show More
                </button>
                
                <ProductSummary />
            </div>
        </div>
    );
}
export default infoProduct