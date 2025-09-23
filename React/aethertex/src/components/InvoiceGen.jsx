import Icon from "../assets/AetherteXIcon.png";
import { jsPDF } from "jspdf";
import { FiDownload } from 'react-icons/fi';
import html2canvas from "html2canvas";
import { useRef } from "react";
import "../stylesheets/profile.css";

function InvoiceGen({Order, address}) {
  const invoiceRef = useRef();

  const downloadPDF = async () => {
    const element = invoiceRef.current;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4"); // p=portrait, mm=millimeters, a4=page size

    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);

    // Save it
    pdf.save("invoice.pdf");
  };

  return (
    <div>
      {/* The invoice content */}
      <div
        ref={invoiceRef}
        className="InvoicePDF"
      >
        <div className="row1-col1">
          <h1>Invoice</h1>
          <b className="CompName">AetherteX Inc</b>
          <address>University of Johannesburg, apk campus</address>
        </div>

        <img
          className="row1-col3"
          src={Icon}
          alt="AetherteX Icon"
          height={75}
          width={246}
        />

        <div className="row2-col1">
          <h2>Bill to</h2>
          <b>{address.Name}</b>
          <address>{address.Street}, {address.City}, {address.Postal}</address>
        </div>

        <div className="row2-col2">
          <h2>Ship to</h2>
          <b>{address.Name}</b>
          <address>{address.Street}, {address.City}, {address.Postal}</address>
        </div>

        <div className="row2-col3">
          <p>
            <b>Invoice #</b> {2}
            <br />
            <b>Order #</b> {Order.id}
          </p>
        </div>


        <table border="1" className="row3">
        <tr>
          <th width="50px">QTY</th>
          <th width="500px">Description</th>
          <th>Unit Price</th>
          <th>Amount</th>
        </tr>

        {Order.products.map(product => (
              <tr>
                <td>{product.Quantity}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.price * product.Quantity}</td>
              </tr>
        ))}
        
      </table>
      </div>
      {/* Download button */}
      <button
        onClick={downloadPDF}
        className="btnDownloadInv"
      >
        <FiDownload color="white"/>
      </button>
    </div>
  );
}export default InvoiceGen