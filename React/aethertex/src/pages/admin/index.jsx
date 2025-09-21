import React from "react";
import "../../stylesheets/AdminHome.css";
import { FaPlus, FaRegFileAlt, FaPen  } from "react-icons/fa";
import AdminPanel from "../../components/AdminPanel";
import InputSubmit from "../../components/InputSubmit";

function AdminHome() {
  return (
    <div className="main-container">
      <section className="panel">
        <AdminPanel />
        <div className="AdminOptions">
          <span><FaPlus color="white"/> &nbsp; Add PC</span>
          <span><FaPen color="white"/> &nbsp; Edit PC</span>
          <span><FaRegFileAlt color="white"/> &nbsp; View Report</span>
          
        </div>
      </section>
      <section className="view-container">
        <div className="search-section">
          <InputSubmit
            buttonLabel={"Search"}
            containerClassName={"admin-search-container"}
            inputClassName={"admin-search-input"}
            buttonClassName={"admin-search-button"}
          />
        </div>
      </section>
    </div>
  );
}

export default AdminHome;
