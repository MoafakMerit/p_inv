import "./App.css";
import InvInputForm from "./components/invInputForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Invoice from "./components/invoice";
import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";

const InvoiceContext = React.createContext();

function App() {
  const [invoice, setInvoice] = useState({
    billTo: "",
    invNo: "",
    invDate: "",
    invDueDate: "",
  });
  const [tableOfWorks, setTableOfWorks] = useState({
    descritpion: "",
    volume: "",
    rate: "",
    date: "",
    amount: 0,
  });
  const [bankAccount, setBankAccount] = useState({
    bankName: "",
    accountNo: "",
    iban: "",
  });
  const [works, setWorks] = useState([]);
  const [payments, setPayments] = useState([]);
  const [currency, setCurrency] = useState("$");

  return (
    <InvoiceContext.Provider
      value={{
        invoice,
        tableOfWorks,
        works,
        payments,
        currency,
        bankAccount,
        setBankAccount,
        setCurrency,
        setInvoice,
        setTableOfWorks,
        setWorks,
        setPayments,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<InvInputForm />} />
          <Route path="invoice" element={<Invoice />} />
        </Routes>
      </div>
    </InvoiceContext.Provider>
  );
}

export { InvoiceContext };
export default App;
