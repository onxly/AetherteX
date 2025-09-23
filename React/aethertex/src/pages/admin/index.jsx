import React from "react";
import "../../stylesheets/AdminHome.css";
import AdminPanel from "../../components/AdminPanel";
import InputSubmit from "../../components/InputSubmit";

function AdminHome() {
  return (
    <div className="main-container">
      <section className="panel">
        <AdminPanel />
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
