import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductSummary from "./ProductSummary.jsx";
import "../stylesheets/infoProduct.css";
import { useState } from "react";

function InfoProduct(info) {
    const [showModel, setShowModal] = useState(false);

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
                <a className="PrdATag" href="#reviewSec" >
                        {info.reviews} reviews
                </a>
            </div>
            <p>{info.description}</p>
            <table className="PrdTable" border="1" cellPadding="8">
                <caption className="PrdCaption">Specifications</caption>
                <tbody>
                    {Object.entries(info.specs || {}).map(([key, value]) => (
                        <tr key={key}>
                            <td className="col1">{key}:</td>
                            <td className="col2">{info.specs[key]}</td>
                        </tr>
                    ))}
                </tbody>
                {showModel && (
                        <tbody>  
                            <tr>
                                <td colSpan={2} className="hRow">CPU</td>
                            </tr>
                            {Object.entries(info.CPU || {}).map(([key, value]) => (
                                <tr key ={key}>
                                    <td className="col1">{key}:</td>
                                    <td className="col2">{info.CPU[key]}</td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={2} className="hRow">GPU</td>
                            </tr>
                            {Object.entries(info.GPU || {}).map(([key, value]) => (
                                <tr key ={key}>
                                    <td className="col1">{key}:</td>
                                    <td className="col2">{info.GPU[key]}</td>
                                </tr>
                            ))} 

                            <tr>
                                <td colSpan={2} className="hRow">RAM</td>
                            </tr>
                            {Object.entries(info.RAM || {}).map(([key, value]) => (
                                <tr key ={key}>
                                    <td className="col1">{key}:</td>
                                    <td className="col2">{info.RAM[key]}</td>
                                </tr>
                            ))} 
                        </tbody>   
                    )}
            </table>
            <div className="buttonSec">
                {
                    showModel == true ? (
                        <button className="btnShow" onClick={() => setShowModal(false)}>
                            Show Less
                        </button>  
                    ) : (
                        <button className="btnShow" onClick={() => setShowModal(true)}>
                            Show More
                        </button>
                    )}
    
                <ProductSummary />
            </div>
        </div>
    );
}
export default InfoProduct