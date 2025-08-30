import '../stylesheets/index.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import ReviewBox from "./reviewBox.jsx"
import WriteReview from './WriteReview.jsx';
import { useState } from 'react'

function reviewProduct(Reviews)
{
    const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (Reviews.rating >= i) {
                stars.push(<FaStar key={i} color="gold" />);
            } else if (Reviews.rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} color="gold" />);
            } else {
                stars.push(<FaRegStar key={i} color="gold" />);
            }
        }

    const data = [
        { name: "5", percentage: 80 },
        { name: "4", percentage: 10 },
        { name: "3", percentage: 6 },
        { name: "2", percentage: 3 },
        { name: "1", percentage: 1 },
    ];

    return(
        <section 
            className="review-product"
            id='reviews-product'
            style={{display:"flex", flexDirection:"row", gap:"15px", marginTop:"20px"}}
        >   
            <div style={{display:"flex", flexDirection:"column"}}>  
                <h2 style={{marginLeft:"10px"}} >Product Reviews</h2>
                <span style={{marginLeft: "10px"}}>{stars} {Reviews.rating}</span>
                <BarChart 
                    data={data}
                    width={500}
                    height={300}
                    layout="vertical" 
                    barSize={20}
                    color="white"
                >
                    <CartesianGrid strokeDasharray="none" stroke='none'/>
                    <XAxis type="number" domain={[0, 100]} stroke="white" strokeWidth={3}/>
                    <YAxis type="category" dataKey="name" width={20} stroke="white" strokeWidth={3}/>
                    <Tooltip 
                        contentStyle={{ 
                        backgroundColor: "#121212",   
                        border: "1px solid #ccc",   // border style
                        borderRadius: "20px",        // rounded corners
                        color: "white",             // text color
                        fontSize: "14px"            // text size
                        }} 
                        itemStyle={{ 
                            color: "gold"           // color of each value inside
                        }} 
                    />

                    <Legend />
                    <Bar dataKey="percentage" fill="gold"/>
                </BarChart>

                
                <WriteReview />
            </div>

            <div>
                <h2 style={{marginLeft:"10px"}}>Top reviews</h2>
                <div style={{display:"flex", flexDirection:"column", gap:"15px", marginTop:"10px", marginLeft:"10px"}}>
                    {Object.entries(Reviews.CusReviews || {}).map(([key, value]) => (
                    <div 
                        key={key} 
                        style={{
                        backgroundColor: "#1a1a1a",
                        padding: "10px",
                        borderRadius: "10px",
                        width: "600px"
                        }}
                    >
                        <ReviewBox 
                        Name={value.user} 
                        numStars={value.rating} 
                        comment={value.comment} 
                        />
                    </div>
                    ))}
                    
                </div>
                <a 
                    href="#reviews-product" 
                    style={{marginLeft: "10px", fontSize: "12px", textDecoration: "none", color: "cyan"}}>
                        See more
                </a>
            </div>
        </section>
    )

} export default reviewProduct