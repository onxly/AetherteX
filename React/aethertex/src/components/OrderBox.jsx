function OrderBox({price, DelDate, title, address, quantity, products =[], onClick})
{
    return (
        <div className="OrderBox" onClick={onClick}>
            <span className="DelDate">Delivered: {DelDate}</span>
            <span className="TotalPrice">Total Price: R {price}</span>
            <div className="thumbSec">
            {products.map(product => (
                <img 
                className ="thumbnail"
                src={product.imgSrc}
                alt="Product Image" 
                height={100} 
                width={100} 
                key={product.id}  
            />
            ))}
            </div>
        </div>
    );
} export default OrderBox