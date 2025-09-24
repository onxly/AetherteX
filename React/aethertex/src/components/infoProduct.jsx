import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductSummary from "./ProductSummary.jsx";
import "../stylesheets/infoProduct.css";
import { useState } from "react";

function InfoProduct({product={}, name, description, rating, reviews, CPU ={}, GPU = {}, RAM ={}, Storage={}}) {
    const [showModel, setShowModal] = useState(false);
    console.log("Rating "+rating, typeof(rating))
    const ratNum = parseFloat(rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (parseFloat(rating) >= i) {
            stars.push(<FaStar key={i} color="gold" />);
        } else if (parseFloat(rating) >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} color="gold" />);
        } else {
            stars.push(<FaRegStar key={i} color="gold" />);
        }
    }
    console.log(product.productId)
    return (
        <div className="product-info">
            <h1>{name}</h1>
            <div className="rating">
                <span>{ratNum.toFixed(1)}</span>
                <span className="spanStars">{stars}</span>
                <a className="PrdATag" href="#reviewSec" >
                        {reviews} reviews
                </a>
            </div>
            <p>{description}</p>
            <table className="PrdTable" border="1" cellPadding="8">
                <caption className="PrdCaption">Specifications</caption>
                <tbody>
                    <tr>
                        <td className="col1">CPU:</td>
                        <td className="col2">{CPU.name}</td>
                    </tr>
                    <tr>
                        <td className="col1">GPU:</td>
                        <td className="col2">{GPU.name}</td>
                    </tr>
                    <tr>
                        <td className="col1">RAM:</td>
                        <td className="col2">{RAM.name}</td>
                    </tr>
                    <tr>
                        <td className="col1">Storage:</td>
                        <td className="col2">{Storage.capacity}GB</td>
                    </tr>
                    
                </tbody>
                {showModel && (
                        <tbody>  
                            <tr>
                                <td colSpan={2} className="hRow">CPU</td>
                            </tr>
                            {Object.entries(CPU || {}).map(([key, value]) => (
                                <tr key ={key}>
                                    <td className="col1">{key}:</td>
                                    <td className="col2">{CPU[key]}</td>
                                </tr>
                            ))}

                            <tr>
                                <td colSpan={2} className="hRow">GPU</td>
                            </tr>
                            {Object.entries(GPU || {}).map(([key, value]) => (
                                <tr key ={key}>
                                    <td className="col1">{key}:</td>
                                    <td className="col2">{GPU[key]}</td>
                                </tr>
                            ))} 

                            <tr>
                                <td colSpan={2} className="hRow">RAM</td>
                            </tr>
                            {Object.entries(RAM || {}).map(([key, value]) => (
                                <tr key ={key}>
                                    <td className="col1">{key}:</td>
                                    <td className="col2">{RAM[key]}</td>
                                </tr>
                            ))} 

                            <tr>
                                <td colSpan={2} className="hRow">Storage</td>
                            </tr>
                            {Object.entries(Storage || {}).map(([key, value]) => (
                                <tr key ={key}>
                                    <td className="col1">{key}:</td>
                                    <td className="col2">{Storage[key]}</td>
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
        
                <ProductSummary prodId={product.productId} CPU={CPU} GPU={GPU} RAM={RAM} Storage={Storage}/>
            </div>
        </div>
    );
}
export default InfoProduct