import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = info;
    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const url = "http://localhost:8080/auth/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result?.error?.details?.[0]?.message || result?.message || "Login failed";
        return handleError(errorMessage);
      }

      const { jwtToken, name } = result;

      handleSuccess("Login successful!");
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("loggedInUser", name);
      

      setInfo({ email: "", password: "" });

      setTimeout(() => {
        navigate("/home");
      }, 1000);

    } catch (error) {
      handleError(error.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          placeholder="Enter email..."
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={info.password}
          onChange={handleChange}
          placeholder="Enter password..."
          required
        />

        <button type="submit">Login</button>

        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
