import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const navigate = useNavigate();

  const [email, setEmail] = useState("Abdallah@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, loggedIn } = useAuth();
  const [failedToLogin, setFailedToLogin] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    const res = login(email, password);
    if (res) navigate("/app");
    setFailedToLogin(true);
  }

  useEffect(
    function () {
      function checkLogin() {
        if (loggedIn) navigate("/app");
      }

      checkLogin();
    },
    [loggedIn, navigate],
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className={failedToLogin ? styles["borderRed"] : ""}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={failedToLogin ? styles["borderRed"] : ""}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" onClickFunction={(e) => handleLogin(e)}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
