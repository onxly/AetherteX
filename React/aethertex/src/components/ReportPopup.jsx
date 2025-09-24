import { useRef, useEffect,useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FiDownload, FiX } from "react-icons/fi";
import {getTotalSales,getTopNProducts,getInventoryStatus,getAverageSpending,getNewRegistrations} from "../jsfunctions/alljsfunctions";
function ReportPopup({ products, onClose }) {

  const overlayRef = useRef();
  const contentRef = useRef();
  const [totalSales, setTotalSales] = useState(null);
  const [topProducts, setTopProducts] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [averageSpending, setAverageSpending] = useState(null);
  const [newRegistrations, setNewRegistrations] = useState(null);

  useEffect(() => {
    async function fetchReport() {
      const startDate = "2025-01-01"; // example, adjust as needed
      const endDate = "2025-12-31";

      const sales = await getTotalSales(startDate, endDate);
      const top = await getTopNProducts(5);
      const inv = await getInventoryStatus();
      const avg = await getAverageSpending();
      const regs = await getNewRegistrations(startDate, endDate);
      setTotalSales(sales);
      setTopProducts(top);
      setInventory(inv);
      setAverageSpending(avg);
      setNewRegistrations(regs);
    }
    fetchReport();
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const downloadPDF = async () => {
    const element = contentRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("report.pdf");
  };

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
      }}
    >
      <div
        ref={contentRef}
        style={{
          backgroundColor: "white",
          width: "80%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "20px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "none",
            background: "transparent",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <FiX />
        </button>

        <h1>Admin Report</h1>
        <p><b>Total Sales:</b> {totalSales ?? "Loading..."}</p>
        <p><b>Average Spending:</b> {averageSpending ?? "Loading..."}</p>
        <p><b>New Registrations:</b> {newRegistrations ?? "Loading..."}</p>

        <h2>Top Products</h2>
        <ul>
        {topProducts.length === 0 ? (
            <li>Loading...</li>
        ) : (
            topProducts.map(p => <li key={p.ProductId}>Product {p.ProductId} - {p.SalesCount} sold</li>)
        )}
        </ul>

        <h2>Inventory Status</h2>
        <table border="1" style={{ width: "100%", marginTop: "10px" }}>
        <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Stock</th>
            <th>Active</th>
            </tr>
        </thead>
        <tbody>
            {inventory.length === 0 ? (
            <tr><td colSpan={4}>Loading...</td></tr>
            ) : (
            inventory.map(item => (
                <tr key={item.ProductId}>
                <td>{item.ProductId}</td>
                <td>{item.Title}</td>
                <td>{item.Stock}</td>
                <td>{item.IsActive ? "Yes" : "No"}</td>
                </tr>
            ))
            )}
        </tbody>
        </table>


        <button
          onClick={downloadPDF}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <FiDownload /> Download PDF
        </button>
      </div>
    </div>
  );
}

export default ReportPopup;
