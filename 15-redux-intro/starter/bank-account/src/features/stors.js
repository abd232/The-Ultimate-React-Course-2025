import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { reducer as accountReducer, reducer } from "./accounts/AccountSlice";
import { reducer as customerReducer } from "./customers/CustomerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
