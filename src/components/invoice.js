import React, { useContext } from "react";
import NavBar from "./navBar";
import { InvoiceContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Invoice = () => {
  const invoiceData = useContext(InvoiceContext);
  const { invoice, tableOfWorks, works, payments, currency, bankAccount } =
    invoiceData;
  return (
    <>
      <NavBar />
      <div className="divBoxInvoice">
        <table>
          <th id="tdGray">Bill to</th>
          <tr className="multiline ">{invoice.billTo}</tr>
        </table>
      </div>
      {/*  */}
      <div className="divBoxInvoice">
        <table>
          <tbody>
            <tr>
              <td id="tdGray">Invoice No.</td>
              <td>{invoice.invNo}</td>
            </tr>
            <tr>
              <td id="tdGray">Invoice Date</td>
              <td>{invoice.invDate}</td>
            </tr>
            <tr>
              <td id="tdGray">Due Date</td>
              <td>{invoice.invDueDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="divBoxInvoice">
        <table>
          <tbody>
            <tr>
              <th id="tdGrayWorksTable">Description</th>
              <th id="tdGrayWorksTable">Volume (target words)</th>
              <th id="tdGrayWorksTable">Rate</th>
              <th id="tdGrayWorksTable">Amount ({currency})</th>
              <th id="tdGrayWorksTable">Date</th>
            </tr>
            {works.map((work) => (
              <tr key={work.id}>
                <td>{work.descritpion}</td>
                <td>{work.rate}</td>
                <td>{work.volume}</td>
                <td>{work.amount}</td>
                <td>{work.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section>
        <div className="divBoxInvoice">
          <h6>Bank Account Detalis:</h6>
          <h6>Bank Name: {bankAccount.bankName}</h6>

          <h6>Account Number: {bankAccount.accountNo}</h6>
          <h6>IBAN: {bankAccount.iban}</h6>
        </div>
        <div className="divBoxInvoice">
          <h6>
            Total:
            {Math.floor(
              works.reduce((prev, cur) => {
                return prev + cur.amount;
              }, 0)
            )}
          </h6>
          <h6>Payment Made: {payments}</h6>
          <h6>
            Balance Due ({currency}):
            {Math.floor(
              works.reduce((prev, cur) => {
                return prev + cur.amount;
              }, 0)
            ) - payments}
          </h6>
        </div>
      </section>
      <button
        style={{ backgroundColor: "lightblue" }}
        icon={faFilePdf}
        className="button"
        id="printPageButton"
        onClick={() => window.print()}
      >
        <FontAwesomeIcon icon={faFilePdf} />
      </button>
    </>
  );
};

export default Invoice;
