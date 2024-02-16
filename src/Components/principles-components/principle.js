import React, { useState } from "react";
import PrincipleData from "./principle-data";
import "./index.css";
function Principle() {
  const [principleData, setPrincipleData] = useState(PrincipleData);

  return (
    <section className="principle-parentBox flex--section">
      <h3 className="title_principle">Principles</h3>
      <div className="principle-section">
        {principleData.map((principle, index) => (
          <div className="box-principle-container" key={index}>
            <div className="box-principle">
              <h4 className="title-principle-box">{principle.title}</h4>
              <p className="text-princple-box">{principle.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Principle;
