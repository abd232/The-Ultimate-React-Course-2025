import { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext();
const initalState = {
  UserName: "Abdallah",
  Password: "qwerty",
  Email: "Abdallah@example.com",
  loadingLogin: false,
  avatar: "https://i.pravatar.cc/100?u=zz",
  loggedIn: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      if (
        action.payload.Email === state.Email &&
        action.payload.Password === state.Password
      )
        return { ...state, loggedIn: true };

      return state;

    case "logout":
      return { ...state, loggedIn: false };

    default:
      throw new Error("Unknown reducer action");
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [loadingLogin, setLoadingLogin] = useState(false);
  function login(email, password) {
    setLoadingLogin(true);
    dispatch({ type: "login", payload: { Email: email, Password: password } });
    setLoadingLogin(false);
  }

  function logout() {
    setLoadingLogin(true);
    dispatch({ type: "logout" });
    setLoadingLogin(false);
    return state.loggedIn;
  }

  return (
    <AuthContext.Provider
      value={{
        name: state.UserName,
        loggedIn: state.loggedIn,
        avatar: state.avatar,
        login,
        logout,
        loadingLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("the useAuth was called outside the AuthProvider");
  return context;
}
