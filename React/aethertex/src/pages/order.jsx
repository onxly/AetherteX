function order()
{
    return(
    <>
    <div className="DisplayDetailedOrder">
        <div className="orderproducts">
            <div className="product">
                <img src="https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg" alt="Product image" className="Productimg"></img>
                <div className="productdet">
                    <label>description:</label>
                    <label>price:</label>
                    <label>quantity:</label>
                </div>
            </div>

            <div className="product">
                <img src="https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg" alt="Product image" className="Productimg"></img>
                <div className="productdet">
                    <label>description:</label>
                    <label>price:</label>
                    <label>quantity:</label>
                </div>
            </div>

            <div className="product">
                <img src="https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg" alt="Product image" className="Productimg"></img>
                <div className="productdet">
                    <label>description:</label>
                    <label>price:</label>
                    <label>quantity:</label>
                </div>
            </div>
        </div>

        <div className="ordershippingdet">
            <h1>shipping adress</h1>
            <label>delivered to</label>
            <label>delevery adress</label>
        </div>

        <div className="ordersummarydet">
            <h1>order summary</h1>
            <label>total price of items</label>
            <label>delivery fee</label>
            <label>total</label>
        </div>
    </div>
    
    </>);
}
export default order