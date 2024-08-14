// src/components/Projects.js
import React from "react";
// Importa las imágenes de los proyectos
import projectImage1 from "../assets/rickmorty.jpg";
import projectImage2 from "../assets/conversor.jpg";

const Projects = () => {
  return (
    <div className="projects-container about ">
      <h1>Mis proyectos</h1>
      <div className="projects-images">
        {/* Imagen 1 */}
        <div className="">
          <p>cartas de rick and morty</p>
          <img className="achicar" src={projectImage1} alt="Project 1" />
          <p>cartas de rick and morty con react</p>
        </div>
        {/* Imagen 2 */}
        <div className="padding">
          <p>conversor de moneda</p>
          <img className="achicar" src={projectImage2} alt="Project 2" />
          <p>conversor de menoeda con react</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
