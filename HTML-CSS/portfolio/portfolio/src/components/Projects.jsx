// src/components/Projects.js
import React from "react";
import projectImage1 from "../assets/rickmorty.jpg";
import projectImage2 from "../assets/conversor.jpg";

const Projects = () => {
  return (
    <>
      <div className="about">
        <h1>Mis proyectos</h1>
      </div>
      <div className="projects-container  ">
        <div className="projects-images">
          {/* Imagen 1 */}
          <div className="about">
            <h2 className="about">Cartas de rick and morty</h2>
            <img className="achicar" src={projectImage1} alt="Project 1" />
            <h3>Cartas de rick and morty con react</h3>
          </div>
          {/* Imagen 2 */}
          <div className="padding about">
            <h2>Conversor de moneda</h2>
            <img className="achicar" src={projectImage2} alt="Project 2" />
            <h3>Conversor de menoeda con react</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
