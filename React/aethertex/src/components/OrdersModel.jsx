import OrderBox from "../components/OrderBox.jsx";
import "../stylesheets/profile.css";

function OrdersModel({Orders= [], Addr = []}){
    return(
        <section className="OrdersPage">
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
                />
            )}
        </section>
    );
} export default OrdersModel