import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InvoiceContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const InvInputForm = () => {
  const invoiceData = useContext(InvoiceContext);
  const {
    invoice,
    tableOfWorks,
    works,
    payments,
    currency,
    bankAccount,
    setBankAccount,
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

  const removeWork = (id) => {
    setWorks((oldWorks) => {
      let newWorks = oldWorks.filter((work) => work.id !== id);
      return newWorks;
    });
  };

  return (
    <React.Fragment>
      {/*  */}
      <form>
        <div className="inputBox">
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
          <label
            htmlFor="description"
            name="description"
            style={{ marginRight: "27px" }}
          >
            Description:
          </label>
          <input
            style={{ marginRight: "75px" }}
            id="description"
            className="textInput"
            type="text"
            value={tableOfWorks.descritpion}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, descritpion: e.target.value })
            }
          ></input>
          <label htmlFor="volume" name="volume" style={{ marginRight: "20px" }}>
            Volume (target words):
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
          <label style={{ marginRight: "75px" }} htmlFor="rate" name="rate">
            Rate:
          </label>
          <input
            style={{ marginRight: "75px" }}
            className="textInput"
            type="number"
            value={tableOfWorks.rate}
            onChange={(e) =>
              setTableOfWorks({ ...tableOfWorks, rate: e.target.value })
            }
          ></input>
          <label htmlFor="date" name="date" style={{ marginRight: "148px" }}>
            Date:
          </label>
          <input
            style={{ marginRight: "75px" }}
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
            className="btn btn-primary btn-lg btn-block"
            onClick={handleWorks}
          >
            +
          </button>
        </div>
        <div className="inputBox">
          <ul>
            {works.map((work) => (
              <li key={work.id}>
                {work.descritpion}
                <button
                  className="btn m-2 btn-danger"
                  onClick={() => removeWork(work.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                  delete
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="btn m-2 btn-info">
            {works.length} Translations
          </button>
        </div>
        <div className="inputBox">
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
      <div className="inputBox">
        <label htmlFor="bankName" name="bankName">
          Bank Name:
        </label>
        <input
          className="textInput"
          type="text"
          value={bankAccount.bankName}
          onChange={(e) =>
            setBankAccount({ ...bankAccount, bankName: e.target.value })
          }
        ></input>
        <label htmlFor="accountNo" name="accountNo">
          Account No:
        </label>
        <input
          className="textInput"
          type="text"
          value={bankAccount.accountNo}
          onChange={(e) =>
            setBankAccount({ ...bankAccount, accountNo: e.target.value })
          }
        ></input>
        <label htmlFor="iban" name="iban">
          IBAN:
        </label>
        <input
          className="textInput"
          type="text"
          value={bankAccount.iban}
          onChange={(e) =>
            setBankAccount({ ...bankAccount, iban: e.target.value })
          }
        ></input>
      </div>
      <br />

      <Link to="/invoice">
        <button
          className="button"
          style={{ marginRight: "vertical-align:middle" }}
        >
          <span>Create </span>
        </button>
      </Link>
    </React.Fragment>
  );
};

export default InvInputForm;
