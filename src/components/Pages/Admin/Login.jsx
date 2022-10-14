import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../../BaseUrl";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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

      if (res.data.token) {
        localStorage.setItem("AccessToken", res.data.token);
        navigate("/admin");
      }
    } catch (err) {
      setError(err.response.data);
    }
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
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
