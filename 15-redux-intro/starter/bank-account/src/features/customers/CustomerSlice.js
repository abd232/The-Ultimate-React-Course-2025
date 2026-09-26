const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

function createCustomer(fullName, nationalID) {
  const now = new Date();

  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: now.toString(),
    },
  };
}

function updateCustomer(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

export { reducer, createCustomer, updateCustomer };
