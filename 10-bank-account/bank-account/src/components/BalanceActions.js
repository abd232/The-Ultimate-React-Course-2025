import { useState } from "react";

function BalanceActions({ dispatch }) {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  return (
    <div>
      <h3>Balance Actions</h3>
      <div>
        <form>
          <label htmlFor="amount">Deposit:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(Number(e.target.value))}
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "deposit", payload: depositAmount });
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <form>
          <label htmlFor="amount">WithDrawal:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "withdrawal", payload: withdrawalAmount });
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BalanceActions;
