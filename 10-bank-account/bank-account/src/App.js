import BalanceInformations from "./components/BalanceInformations";
import Header from "./components/Header";
import Main from "./components/Main";
import ActionsSection from "./components/ActionsSection";
import BalanceActions from "./components/BalanceActions";
import LoansActions from "./components/LoansActions";
import AccountActions from "./components/AccountActions";
import { useReducer } from "react";

const initalState = {
  isAccountOpen: false,
  balance: 0,
  loanBalance: 0,
  AccountActionLogs: [],
};

function reducer(state, action) {
  const now = new Date();

  const formattedDate =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0") +
    " " +
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0") +
    ":" +
    String(now.getSeconds()).padStart(2, "0");

  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isAccountOpen: true,
        AccountActionLogs: [
          `${formattedDate} - Account Opened`,
          ...state.AccountActionslogs,
        ],
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        AccountActionLogs: [
          `${formattedDate} - deposit (${action.payload}$)`,
          ...state.AccountActionslogs,
        ],
      };
    case "withdrawal":
      if (state.balance < action.payload)
        throw new Error("Insufficient balance");
      return {
        ...state,
        balance: state.balance - action.payload,
        AccountActionLogs: [
          `${formattedDate} - withdrawal (${action.payload}$)`,
          ...state.AccountActionslogs,
        ],
      };
    case "getLoan":
      return {
        ...state,
        balance: state.balance + action.payload,
        loanBalance: state.loanBalance - action.payload,
        AccountActionLogs: [
          `${formattedDate} - withdrawal (${action.payload}$)`,
          ...state.AccountActionslogs,
        ],
      };
    case "repayLoan":
      if (state.loanBalance < action.payload)
        throw new Error("loan payback can't be larger than the loan balance");
      return {
        ...state,
        balance: state.balance - action.payload,
        loanBalance: state.loanBalance + action.payload,
        AccountActionLogs: [
          `${formattedDate} - get loan of (${action.payload}$)`,
          ...state.AccountActionslogs,
        ],
      };
    case "closeAccount":
      if (state.balance !== 0 || state.loanBalance !== 0)
        throw new Error(
          "both account balance and loan balance need to be zero to close the account",
        );
      return {
        ...state,
        isAccountOpen: false,
        AccountActionLogs: [
          `${formattedDate} - Account Closed$)`,
          ...state.AccountActionslogs,
        ],
      };
    default:
      throw new Error("Unknown reducer action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div className="app">
      <Header />
      <Main>
        <BalanceInformations
          balance={state.balance}
          loanBalance={state.loanBalance}
        />
        <ActionsSection>
          <BalanceActions dispatch={dispatch} />
          <LoansActions dispatch={dispatch} />
          <AccountActions
            AccountActions={state.AccountActionLogs}
            dispatch={dispatch}
          />
        </ActionsSection>
      </Main>
    </div>
  );
}

export default App;
