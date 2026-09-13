import { useState } from "react";

function LoansActions({ dispatch }) {
  const [repaymentAmount, setRepaymentAmount] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  return (
    <div>
      <h3>Loans Actions</h3>
      <div>
        <form>
          <label htmlFor="amount">Get:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "getLoan", payload: loanAmount });
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <form>
          <label htmlFor="amount">Repay:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={repaymentAmount}
            onChange={(e) => setRepaymentAmount(Number(e.target.value))}
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "repayLoan", payload: repaymentAmount });
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoansActions;
