import '../stylesheets/reviewProduct.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import CommentBox from "./CommentBox.jsx"
import WriteReview from './WriteReview.jsx';
import { useState } from 'react'

function ReviewProduct({Prodid, rating, CusReviews = []})
{
    const ratNum = parseFloat(rating);
    const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} color="gold" />);
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} color="gold" />);
            } else {
                stars.push(<FaRegStar key={i} color="gold" />);
            }
        }
        const id = Prodid;
        let iOne = 0;
        let iTwo = 0;
        let iThree = 0;
        let iFour = 0;
        let iFive = 0;
        let totCount = 0;

        CusReviews.forEach(rev => {
            totCount++;
            if (rev.stars === 1) {
                iOne++;          
            } else if (rev.stars === 2) {
                iTwo++;
            } else if (rev.stars === 3) {
                iThree++;
            } else if (rev.stars === 4) {
                iFour++;
            } else if (rev.stars === 5) {
                iFive++;
            }
        });
    const data = [
        { name: "5", Count: iFive },
        { name: "4", Count: iFour },
        { name: "3", Count: iThree },
        { name: "2", Count: iTwo },
        { name: "1", Count: iOne },
    ];

    return(
        <section 
            className="reviewSec"
            id='reviewSec'
        >   
            <div style={{display:"flex", flexDirection:"column"}}>  
                <h2>Product Reviews</h2>
                <span>{stars} {ratNum.toFixed(1)}</span>
                <BarChart 
                    data={data}
                    width={500}
                    height={300}
                    layout="vertical" 
                    barSize={20}
                    color="white"
                >
                    <CartesianGrid strokeDasharray="none" stroke='none'/>
                    <XAxis type="number" domain={[0, totCount]} stroke="white" strokeWidth={3} ticks={Array.from({ length: totCount + 1 }, (_, i) => i)}/>
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
                    <Bar dataKey="Count" fill="gold"/>
                </BarChart>
                {console.log(id)}
                <WriteReview prodid={id}/>
            </div>

            <div>
                <h2>Top reviews</h2>
                <div className='CommentSec'>
                    {CusReviews.length > 0?(
                        <section className='revs'>
                            {Object.entries(CusReviews || {}).map(([key, value]) => (
                                <div className='reviewBox' key={key}>
                                    <CommentBox 
                                    Name={value.userId} 
                                    numStars={value.stars} 
                                    comment={value.review} 
                                    date={value.datePosted}
                                    />
                                </div>
                             ))}
                        </section>
                    ):(
                        <p style={{padding:"20px", textAlign:"center",color:"black" ,backgroundColor:"tan"}}>No reviews available</p>
                    )}
                    
                    
                </div>
                <a href="#reviews-product">
                        See more
                </a>
            </div>
        </section>
    )

} export default ReviewProduct