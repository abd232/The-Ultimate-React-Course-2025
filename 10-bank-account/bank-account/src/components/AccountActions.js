function AccountActions({
  dispatch,
  AccountActions,
  loanBalance,
  balance,
  isAccountOpen,
}) {
  return (
    <div>
      <h3>Account Informations</h3>
      <div>
        <div>
          <h4>Account Actions</h4>
          <div className="action-logs">
            {AccountActions.map((action, index) => (
              <div key={index}>
                <p>{action}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button
            className="btn open-btn"
            disabled={!isAccountOpen}
            onClick={() => dispatch({ type: "openAccount" })}
          >
            Open Account
          </button>
          <button
            disabled={loanBalance !== 0 || balance !== 0 || isAccountOpen}
            className="btn close-btn"
            onClick={() => dispatch({ type: "closeAccount" })}
          >
            Close Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountActions;
