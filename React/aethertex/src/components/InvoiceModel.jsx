import InvoiceBox from "../components/InvoiceBox.jsx";
import { useState } from "react";
import InvoiceGen from "../components/InvoiceGen.jsx";
import "../stylesheets/profile.css";

function InvoiceModel({Orders, Addr}){
    const [InModel, setInvoiceModel] = useState(false);
    const [selectedOrder, setselectedOrder] = useState(null);
    return(
        
        <section className="OrdersPage">

            {InModel?(
                <InvoiceGen Order={selectedOrder} address={Addr[selectedOrder.Address]}/>
            ):(
                <div className="OrderHistory">
                    <h2>Invoices</h2>
                        {Orders.map(order => 
                            <InvoiceBox
                                key={order.id}
                                price={order.Price}
                                title={order.title}
                                DelDate={order.Date}
                                address={Addr[order.address]}
                                quantity={order.Quantity}
                                products={order.products}
                                id={order.id}
                                onClick={() => {
                                                    setInvoiceModel(true);
                                                    setselectedOrder(order);
                                                }
                                        }
                            />
                        )}
                </div>
            )}
            
        </section>
    )
} export default InvoiceModel