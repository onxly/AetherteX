import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useState } from "react";

function ProductSummary({ summary }) {
    const [showModal, setShowModal] = useState(false);

    const data = [
        { component: "CPU", benchmark: 40 },
        { component: "GPU", benchmark: 25 },
        { component: "RAM", benchmark: 20 },
        { component: "Storage", benchmark: 15 },
    ];

// Colors for slices
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return(
        <div>
            <button className="btnSummary"
                style={{backgroundColor: "transparent", border: "2px solid white", color: "white", cursor: "pointer", width: "150px", height: "40px", fontWeight: "bold" }}
                onClick={() => setShowModal(true)} 
            >
                Show Summary
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
                            
                        <h2>Product Summary</h2>
                        <p style={{marginTop: "-10px"}}>
                            This pie chart breaks down benchmark scores across the 
                            <br />
                            CPU, GPU, RAM, and storage, highlighting each component’s 
                            <br />
                            share of overall system performance. 
                        </p>
                        
                        <div style={{ textAlign: "center" }}>
                            
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="benchmark"      // tells recharts what number to use
          nameKey="component"       // tells recharts what label to show
          cx="50%"             // x-position center
          cy="50%"             // y-position center
          outerRadius={100}    // size of pie
          fill="#8884d8"
          label                // adds labels on slices
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
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
        /> {/* shows values on hover */}
        <Legend />  {/* shows a legend */}
      </PieChart>
    </div>
        
                    </div>
                </div>
            )}
            </div>
    );
} export default ProductSummary;