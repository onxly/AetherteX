function OrderBox({price, DelDate, title, address, quantity, products =[]})
{
    return (
        <div className="OrderBox">
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