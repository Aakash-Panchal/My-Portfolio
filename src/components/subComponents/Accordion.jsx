import React, { useEffect, useRef, useState } from "react";

const Accordion = ({ title, AccordionContent }) => {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{title}</p>
        <span style={{ marginLeft: "20px", fontSize: "1.5rem" }}>
          {active ? "-" : "+"}
        </span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div className="accordion__text">{AccordionContent}</div>
      </div>
    </div>
  );
};

export default Accordion;
