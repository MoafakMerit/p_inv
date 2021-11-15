import React from "react";
import { useState } from "react";
const InvInputForm = () => {
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
    paymentMade: "",
    currency: "",
  });
  const [bankAccount, setBankAccount] = useState({
    bankName: "",
    accountNo: "",
    iban: "",
  });

  return (
    <React.Fragment>
      <form>
        {/*  */}
        <label name="billTo" type="text">
          Bill To
        </label>
        <textarea
          className="multiLines"
          type="text"
          value={invoice.billTo}
          onChange={(e) => setInvoice({ ...invoice, billTo: e.target.value })}
        ></textarea>
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
          <label name="description">Description:</label>
          <input
            className="textInput"
            type="text"
            value={tableOfWorks.descritpion}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, descritpion: e.target.value })
            }
          ></input>
          <label name="volume">Volume (target words)</label>
          <input
            className="textInput"
            type="number"
            value={tableOfWorks.volume}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, volume: e.target.value })
            }
          ></input>
          <br />
          <label name="rate">Rate:</label>
          <input
            className="textInput"
            type="number"
            value={tableOfWorks.rate}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, rate: e.target.value })
            }
          ></input>
          <label name="date">Date:</label>
          <input
            className="textInput"
            type="Date"
            value={tableOfWorks.date}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, date: e.target.value })
            }
          ></input>
          <label name="paymentMade">Payment Made:</label>
          <input
            className="textInput"
            type="number"
            value={tableOfWorks.paymentMade}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, paymentMade: e.target.value })
            }
          ></input>
          <label for="currency">Currency</label>

          <select name="currecnt" id="currecny">
            <option value="$">$</option>
            <option value="£">£</option>
            <option value="sek">SEK</option>
          </select>
        </div>
      </form>
      <button className="">Create</button>
    </React.Fragment>
  );
};

export default InvInputForm;
