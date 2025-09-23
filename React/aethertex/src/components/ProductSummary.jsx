import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useState, useEffect } from "react";
import {GetGPU, GetCPU, GetRAM ,GetStorage} from "../jsfunctions/alljsfunctions";
import '../stylesheets/ProductSummary.css';

function ProductSummary({ CPU ={}, GPU = {}, RAM ={}, Storage={}}) {
    const [showModal, setShowModal] = useState(false);
    
    let data;
    console.log("CPU "+CPU)
    if (CPU && GPU && RAM && Storage )
    {
        const CPUBench = (CPU.benchmarkScore / 133) *100;
        const GPUBench = (GPU.benchmarkScore / 183) *100;
        const RAMBench = (GPU.benchmarkScore / 183) *100;
        const StoBench = (Storage.benchmarkScore / 712) *100;
        const TotBench = CPUBench + GPUBench + RAMBench + StoBench;

         data = [
            { component: "CPU", benchmark: (CPUBench / TotBench) * 100 },
            { component: "GPU", benchmark: (GPUBench / TotBench) * 100 },
            { component: "RAM", benchmark: (RAMBench / TotBench) * 100 },
            { component: "Storage", benchmark: (StoBench / TotBench) * 100 },
        ];
    } else{
        data = [
            { component: "CPU", benchmark: 25 },
            { component: "GPU", benchmark: 25 },
            { component: "RAM", benchmark: 25 },
            { component: "Storage", benchmark: 25 },
        ];
    }

// Colors for slices
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return(
        <div>
            <button className="btnSummary" onClick={() => setShowModal(true)}>
                Show Summary
            </button>
    
            {showModal && (
                <div className="SummaryModal">
                    <div className="SummaryContent">
                        <span className="close" onClick={() => setShowModal(false)}>
                            ×
                        </span>
                            
                        <h2>Product Summary</h2>
                        <p className="SummaryDescription">
                            This pie chart breaks down benchmark scores across the 
                            <br />
                            CPU, GPU, RAM, and storage, highlighting each component’s 
                            <br />
                            share of overall system performance. 
                        </p>
                        
                        <div>               
                        <PieChart width={500} height={400}>
                            <Pie
                            data={data}
                            dataKey="benchmark"      // tells recharts what number to use
                            nameKey="component"       // tells recharts what label to show
                            cx="50%"             // x-position center
                            cy="50%"             // y-position center
                            outerRadius={100}    // size of pie
                            fill="#8884d8"
                            label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            
                            </Pie>
                            <Tooltip 
                                formatter={(value, name, props) => value.toFixed(2)+"%"}
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