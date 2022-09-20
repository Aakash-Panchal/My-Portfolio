import React from "react";
import { Link } from "react-router-dom";
import Title from "../subComponents/Title";

const About = () => {
  return (
    <div>
      <Title Title="ABOUT ME" />

      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
