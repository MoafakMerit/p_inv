import React from "react";
import NavBar from "./navBar";

const Invoice = () => {
  return (
    <>
      <NavBar />
      <div>
        <h6 className="billTo">Bill to</h6>
        <h6>{}</h6>
      </div>
    </>
  );
};

export default Invoice;
