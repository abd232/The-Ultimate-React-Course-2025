function BalanceInformations({ balance, loanBalance }) {
  return (
    <div className="balance-information">
      <h3>Balance Information</h3>
      <p>Your current balance is: {balance}$</p>
      <p>Your Current Loan Balance is: {loanBalance} $</p>
    </div>
  );
}

export default BalanceInformations;
