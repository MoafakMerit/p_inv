import "./App.css";
import InvInputForm from "./components/invInputForm";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import Invoice from "./components/invoice";
import { useContext } from "react";

function App() {
  const InvoiceContext = React.createContext();
  return (
    <InvoiceContext.Provider>
      <div className="App">
        {/* <InvInputForm /> */}

        <Invoice />
      </div>
    </InvoiceContext.Provider>
  );
}

export default App;
