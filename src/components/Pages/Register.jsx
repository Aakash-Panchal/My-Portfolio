import React, { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../BaseUrl";

const Register = () => {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(BaseUrl + "/admin/addadmin", inputs);
      console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div>
      Register
      <form>
        <input
          type="text"
          onChange={handelChange}
          name="name"
          placeholder="First Name"
        />
        <input
          type="email"
          onChange={handelChange}
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={handelChange}
          name="password"
          placeholder="Password"
        />
        <button onClick={handelSubmit}>Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
