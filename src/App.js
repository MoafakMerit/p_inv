import "./App.css";
import InvInputForm from "./components/invInputForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Invoice from "./components/invoice";
import { useState, useContext } from "react";
import React from "react";

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
        setCurrency,
        setInvoice,
        setTableOfWorks,
        setWorks,
        setPayments,
      }}
    >
      <div className="App">
        {/* <InvInputForm /> */}
        <Invoice />
      </div>
    </InvoiceContext.Provider>
  );
}

export { InvoiceContext };
export default App;
