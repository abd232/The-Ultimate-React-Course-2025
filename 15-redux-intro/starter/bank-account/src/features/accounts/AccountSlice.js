const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/depost":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      if (state.balance >= state.loan)
        return {
          ...state,
          loanPurpose: "",
          balance: state.balance - state.loan,
          loan: 0,
        };
      return state;
    case "account/loading":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

function depost(amount, currency) {
  if (currency === "USD") return { type: "account/depost", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/loading" });

    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/depost", payload: converted });
  };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, loanPurpose: purpose },
  };
}

function payLoan() {
  return {
    type: "account/payLoan",
  };
}

export { reducer, depost, withdraw, requestLoan, payLoan };
