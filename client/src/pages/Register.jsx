import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    if (name && email && password) {

      alert("Registered Successfully ✅");

      navigate("/login");

    } else {

      alert("Fill all fields");

    }
  };

  return (

    <div className="auth-container">

      <form
        className="auth-box"
        onSubmit={handleRegister}
      >

        <h1>Register</h1>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;