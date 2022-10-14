import React, { useState, useEffect } from "react";

const AddProject = () => {
  const [projectData, setProjectData] = useState({
    projectTitle: "",
    projectCategory: "",
    projectDescription: "",
    projectStartDate: "",
    projectEndDate: "",
    ProjectReview: "",
    projectLink: "",
    projectImages: [],
  });

  const handelChange = (e) => {
    setProjectData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = () => {};

  return (
    <div>
      <form>
        <input
          name="projectTitle"
          type="text"
          placeholder="Project Title"
          onChange={handelChange}
        />
        <input
          name="projectCategory"
          type="text"
          placeholder="Project Category"
          onChange={handelChange}
        />
        <input
          name="projectDescription"
          type="text"
          placeholder="Project Description "
          onChange={handelChange}
        />
        <input
          name="projectStartDate"
          type="date"
          placeholder="Project Start Date"
          onChange={handelChange}
        />
        <input
          name="projectEndDate"
          type="date"
          placeholder="Project End Date "
          onChange={handelChange}
        />
        <input
          name="ProjectReview"
          type="text"
          placeholder="Project Review"
          onChange={handelChange}
        />
        <input
          name="projectLink"
          type="text"
          placeholder="Project Link"
          onChange={handelChange}
        />
        <input name="projectImages" type="file" />
        <button onClick={handelSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddProject;
