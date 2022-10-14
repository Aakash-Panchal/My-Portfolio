import React from "react";
import styled from "styled-components";
import AddProject from "./AddProject";

const Admin = () => {
  const handelLogOut = () => {
    localStorage.clear();
  };
  return (
    <div>
      <AddProject />
      <Logout>
        <button onClick={handelLogOut}>Logout</button>
      </Logout>
    </div>
  );
};

const Logout = styled.div``;

export default Admin;
