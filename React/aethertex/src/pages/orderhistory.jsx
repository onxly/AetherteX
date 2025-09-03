import { Link } from "react-router";

function orderhistory() {
  return (
    <>
      <h1>Orders</h1>
      <select className="OrderDateOptions">
        <option>Period</option>
        <option>Last week</option>
        <option>Last month</option>
        <option>Last year</option>
      </select>

      <Link to="/order">
        <div className="SimplifiedOrder">
          <div className="orderimage">
            <img
              src="https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg"
              alt="Product image"
              className="Productimg"
            ></img>
            <img
              src="https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg"
              alt="Product image"
              className="Productimg"
            ></img>
            <img
              src="https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg"
              alt="Product image"
              className="Productimg"
            ></img>
            <img
              src="https://m.media-amazon.com/images/I/41BiCUr2t9L.jpg"
              alt="Product image"
              className="Productimg"
            ></img>
          </div>
          <div className="BriefOderDet">
            <label>Date:</label>
            <label>Number of items:</label>
            <label>Price:</label>
          </div>
        </div>
      </Link>
    </>
  );
}
export default orderhistory;
