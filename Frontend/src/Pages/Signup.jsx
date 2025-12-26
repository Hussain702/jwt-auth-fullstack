import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

const Signup = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: ""
  });
   const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value
    });
  };

  const handeSignup = async (e) => {
  e.preventDefault();

  const { name, email, password } = info;
  if (!name || !email || !password) {
    return handleError("All fields are required");
  }

  try {
    const url = "http://localhost:8080/auth/signup";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    });

    const result = await response.json();
    console.log(result)
    if (!response.ok) {

      const errorMessage = result?.error?.details?.[0]?.message || "Signup failed";
      return handleError(errorMessage);
    }

    handleSuccess("Signup successful!");
     setTimeout(()=>
    {
          navigate('/login')
    },1000)
    
     setInfo({ name: "", email: "", password: "" })
  } catch (error) {
    handleError(error.message || "Something went wrong");
  }
};

  return (
    <div className="container">
      <form onSubmit={handeSignup}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={handleChange}
          placeholder="Enter name..."
          required
        />
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

        <button type="submit">Signup</button>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
