import { useState } from "react";
import OrderBox from "../components/OrderBox.jsx";
import OrderDetModel from "../components/OrderDetModel.jsx";
import "../stylesheets/profile.css";

function OrdersModel({Orders= [], Addr = [] }){
    const [activeModel, setActiveModel] = useState(true);
    const [selectedOrder, setselectedOrder] = useState(null);
    return(
        <section className="OrdersPage">
            { Orders.length!=0?(
                activeModel?(
                    <div className="OrderHistory">
                        <h2>Order History</h2>
                        {Orders.map(order => 
                            <OrderBox
                                key={order.id}
                                price={order.Price}
                                title={order.title}
                                DelDate={order.Date}
                                address={Addr[order.address]}
                                quantity={order.Quantity}
                                products={order.products}
                                onClick={() =>
                                        {
                                            setActiveModel(false);
                                            setselectedOrder(order);
                                        }
                                }
                            />
                        )}
                    </div>
                ):(
                    <div className="OrderDet">
                        <OrderDetModel 
                            id={selectedOrder.id} 
                            price={selectedOrder.Price} 
                            Date={selectedOrder.Date} 
                            Addr={Addr[selectedOrder.Address]} 
                            products={selectedOrder.products}
                        />
                        <span className="OrdReturn" onClick={() => setActiveModel(true)}>Return to History</span>
                    </div>
            )):(
                <div>
                    <label>You dont have any orders yet</label>
                </div>
            )}
            
        </section>
    );
} export default OrdersModel