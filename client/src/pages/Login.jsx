import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    if (email && password) {

      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
        })
      );

      alert("Login Successful ✅");

      navigate("/");

    } else {

      alert("Fill all fields");

    }
  };

  return (

    <div className="auth-container">

      <form
        className="auth-box"
        onSubmit={handleLogin}
      >

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;