import React from "react";
import { NavLink } from "react-router-dom";
import ProjectData from "../project-components/projectsBox-data";
import "./index.css";
function ProjectPage() {
  const [projectsData, setProjectData] = React.useState(ProjectData);

  return (
    <section className="project--section  flex--section">
      <h3 className="title_project">Projects</h3>

      <div className="parent-projectsBox">
        {projectsData.map((product, index) => (
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
    </section>
  );
}

export default ProjectPage;
