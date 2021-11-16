import React, { useContext } from "react";
import { useState } from "react";
import { InvoiceContext } from "../App";

const InvInputForm = () => {
  const invoiceData = useContext(InvoiceContext);
  const {
    invoice,
    tableOfWorks,
    works,
    payments,
    currency,
    setCurrency,
    setPayments,
    setWorks,
    setInvoice,
    setTableOfWorks,
  } = invoiceData;

  const handleWorks = (e) => {
    e.preventDefault();
    setWorks((works) => {
      const newTableOfWorks = {
        ...tableOfWorks,
        id: new Date().getTime().toString(),
        amount: tableOfWorks.volume * tableOfWorks.rate,
      };

      return [...works, newTableOfWorks];
    });

    setTableOfWorks({
      descritpion: "",
      volume: "",
      rate: "",
      date: "",
    });
  };

  return (
    <React.Fragment>
      <form>
        {/*  */}
        <div>
          <label htmlFor="billTo" name="billTo" type="text">
            Bill To
          </label>
          <br />
          <textarea
            className="multiLines"
            type="text"
            id="billTo"
            value={invoice.billTo}
            onChange={(e) => setInvoice({ ...invoice, billTo: e.target.value })}
          ></textarea>
          List of works
          {works.map((work) => (
            <tr key={work.id}>{work.descritpion}</tr>
          ))}
        </div>
        <div className="inputBox">
          <h3>invoice info</h3>
          <label name="invNo">No.</label>
          <input
            className="textInput"
            type="number"
            value={invoice.invNo}
            onChange={(e) => setInvoice({ ...invoice, invNo: e.target.value })}
          ></input>
          <label name="invDate">Date</label>
          <input
            className="textInput"
            type="Date"
            value={invoice.invDate}
            onChange={(e) =>
              setInvoice({ ...invoice, invDate: e.target.value })
            }
          ></input>
          <label name="invDueDate">Due Date</label>
          <input
            className="textInput"
            type="Date"
            value={invoice.invDueDate}
            onChange={(e) =>
              setInvoice({ ...invoice, invDueDate: e.target.value })
            }
          ></input>
        </div>
        <div className="inputBox">
          {/* the third part */}
          <h3>Translations</h3>
          <label htmlFor="description" name="description">
            Description:
          </label>
          <input
            id="description"
            className="textInput"
            type="text"
            value={tableOfWorks.descritpion}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, descritpion: e.target.value })
            }
          ></input>
          <label htmlFor="volume" name="volume">
            Volume (target words)
          </label>
          <input
            className="textInput"
            type="number"
            value={tableOfWorks.volume}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, volume: e.target.value })
            }
          ></input>
          <br />
          <label htmlFor="rate" name="rate">
            Rate:
          </label>
          <input
            className="textInput"
            type="number"
            value={tableOfWorks.rate}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, rate: e.target.value })
            }
          ></input>
          <label htmlFor="date" name="date">
            Date:
          </label>
          <input
            className="textInput"
            type="Date"
            value={tableOfWorks.date}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, date: e.target.value })
            }
          ></input>
          <label htmlFor="currency" for="currency">
            Currency
          </label>

          <select
            name="currecnt"
            id="currecny"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="$">$</option>
            <option value="£">£</option>
            <option value="sek">SEK</option>
          </select>

          <br />
          <button
            type="button"
            class="btn m-2 btn-primary"
            onClick={handleWorks}
          >
            +
          </button>
        </div>
        <div class="inputBox">
          <label htmlFor="paymentMade" name="paymentMade">
            Payment Made:
          </label>
          <input
            className="textInput"
            type="number"
            value={payments}
            onChange={(e) => setPayments(e.target.value)}
          ></input>
        </div>
      </form>
    </React.Fragment>
  );
};

export default InvInputForm;
