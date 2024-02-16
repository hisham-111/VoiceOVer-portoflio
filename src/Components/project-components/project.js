import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProjectData from "./projectsBox-data";
import "./index.css";
import { AiOutlineRight } from "react-icons/ai";
function Project() {
  const [projectsData, setProjectData] = useState(ProjectData);
  // const slicedString = projectsData.slice(0, 4);

  return (
    <section className="project--section  flex--section">
      <h3 className="title_project">Projects</h3>

      <div className="parent-projectsBox">
        {projectsData.slice(0, 2).map((product, index) => (
          <div className="child-box" key={index}>
            <div className="img-project-box">
              <img
                className="projects-img"
                src={product.img}
                alt={product.alt}
                height="430"
              />
            </div>
            <div className="projects-info ">
              <h3 className="title"> {product.title}</h3>

              <div className="icon-link-project">
                <NavLink className="link-project" to="/" target="_blank">
                  {product.link}
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sperate-box icon-link-project">
        <NavLink className=" sperate-link" to="/Projects" target="_blank">
          <span className="title-button">View Projects</span>
        </NavLink>
      </div>
    </section>
  );
}

export default Project;
