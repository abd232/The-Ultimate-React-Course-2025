import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import { useEffect } from "react";

function ProtactedRoute({ children }) {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      function CheckLoggedIn() {
        if (!loggedIn) navigate("/login");
      }
      CheckLoggedIn();
    },
    [loggedIn, navigate],
  );

  return loggedIn ? children : null;
}

export default ProtactedRoute;
