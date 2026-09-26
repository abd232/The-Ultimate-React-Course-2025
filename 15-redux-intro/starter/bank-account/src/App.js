import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const nationalID = useSelector((store) => store.customer.nationalID);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>

      {!nationalID && <CreateCustomer />}

      {nationalID && <Customer />}
      {nationalID && <AccountOperations />}

      <BalanceDisplay />
    </div>
  );
}

export default App;
