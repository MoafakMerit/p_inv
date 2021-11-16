import React, { useContext } from "react";

import NavBar from "./navBar";
import { InvoiceContext } from "../App";

const Invoice = () => {
  const invoiceData = useContext(InvoiceContext);
  const { invoice, tableOfWorks, works, payments, currency } = invoiceData;
  return (
    <>
      <NavBar />
      <div>
        <h6 className="billTo">Bill to</h6>
        <p className="multiline">{invoice.billTo}</p>
      </div>
      <div>
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
      <div>
        The works
        <table>
          <tbody>
            <tr>
              <th id="tdGray">Description</th>
              <th id="tdGray">Volume (target words)</th>
              <th id="tdGray">Rate</th>
              <th id="tdGray">Amount ({currency})</th>
              <th id="tdGray">Date</th>
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
        <div>
          <h6>Bank Account Detalis:</h6>
        </div>
        <div>
          <h6>
            Total:
            {works.reduce((prev, cur) => {
              return prev + cur.amount;
            }, 0)}
          </h6>
          <h6>Payment Made: {payments}</h6>
          <h6>
            Balance Due ({currency}):{" "}
            {works.reduce((prev, cur) => {
              return prev + cur.amount;
            }, 0) - payments}{" "}
          </h6>
        </div>
      </section>
    </>
  );
};

export default Invoice;
