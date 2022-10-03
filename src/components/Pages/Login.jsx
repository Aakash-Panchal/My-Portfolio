import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../BaseUrl";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });

  const handelChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(BaseUrl + "/admin/login", inputs, {
        withCredentials: true,
      });
      console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };

  const handeltest = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/projects");
    console.log(res);
  };

  return (
    <div>
      Login
      <form>
        <input
          type="text"
          name="name"
          placeholder="username"
          onChange={handelChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handelChange}
        />
        <button onClick={handelSubmit}>Submit</button>
        <button onClick={handeltest}>test</button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
