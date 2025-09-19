
function InvoiceBox({price, DelDate, title, address, quantity, products =[], id, setInvoiceModel, onClick})
{
    return(
        <div className="OrderBox" onClick={onClick}>
            <span className="DelDate">Order# {id}</span>
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
            <button className="btnDownInvoice" onClick={() => setInvoiceModel(true)}>
                Download Invoice
            </button>
            
        </div>
    );
} export default InvoiceBox