function AccountActions({ dispatch, AccountActions }) {
  return (
    <div>
      <h3>Account Informations</h3>
      <div>
        <div>
          <h4>Account Actions</h4>
          {AccountActions.map((action, index) => (
            <div key={index}>
              <p>{action}</p>
            </div>
          ))}
        </div>
        <div>
          <button>Open Account</button>
          <button>Close Account</button>
        </div>
      </div>
    </div>
  );
}

export default AccountActions;
