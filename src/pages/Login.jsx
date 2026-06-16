import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const login = () => {

    localStorage.setItem(
      "user",
      "admin"
    );

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Login</h1>

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;