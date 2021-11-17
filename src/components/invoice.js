import React, { useContext } from "react";
import NavBar from "./navBar";
import { InvoiceContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const Invoice = () => {
  const invoiceData = useContext(InvoiceContext);
  const { invoice, tableOfWorks, works, payments, currency, bankAccount } =
    invoiceData;
  return (
    <>
      <NavBar />
      <div className="divBoxInvoice">
        <table>
          <caption
            style={{
              captionSide: "top",
              width: "50vh",

              background: "gray",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Bill To
          </caption>
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
              <th id="tdGrayWorksTable">
                Volume <br />
                (target words)
              </th>
              <th id="tdGrayWorksTable">Rate</th>
              <th id="tdGrayWorksTable">Amount({currency})</th>
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
      <div className="divBoxInvoice">
        <table>
          <caption
            style={{
              captionSide: "top",
              width: "75vh",
              textAlign: "center",
              background: "gray",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Bank Account Detalis
          </caption>
          <tr>
            <th id="tdGray">Bank Account</th>
            <td>{bankAccount.bankName}</td>
          </tr>
          <tr>
            <th id="tdGray">Account Number</th>
            <td>{bankAccount.accountNo}</td>
          </tr>
          <tr>
            <th id="tdGray">IBAN</th>
            <td>{bankAccount.iban}</td>
          </tr>
        </table>
      </div>
      <div className="divBoxInvoice">
        <table>
          <tbody>
            <tr>
              <td style={{ border: "none" }}>Total:</td>
              <td style={{ border: "none" }}>
                {Math.floor(
                  works.reduce((prev, cur) => {
                    return prev + cur.amount;
                  }, 0)
                )}
              </td>
            </tr>
            <tr>
              <td style={{ border: "none" }}>Payment Made:</td>
              <td style={{ border: "none" }}>{payments}</td>
            </tr>
            <tr>
              <td style={{ border: "none" }}>Balance Due ({currency}):</td>
              <td style={{ border: "none" }}>
                {Math.floor(
                  works.reduce((prev, cur) => {
                    return prev + cur.amount;
                  }, 0)
                ) - payments}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        style={{ backgroundColor: "darkblue" }}
        icon={faPrint}
        className="button"
        id="printPageButton"
        onClick={() => window.print()}
      >
        Print <FontAwesomeIcon icon={faPrint} />
      </button>
    </>
  );
};

export default Invoice;
