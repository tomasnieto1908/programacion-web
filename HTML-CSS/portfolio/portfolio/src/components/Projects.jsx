import React from "react";

function Projects() {
  return (
    <div className="projects">
      <h2>Proyectos</h2>
      <div className="project">
        <p>Estos son algunos de mis Proyectos</p>
        <h3>cartas de rick and morty</h3>
        <p>Hice unas cartas de rick and morty con react.</p>
      </div>
      <div className="project">
        <h3>conversor de moneda</h3>
        <p>Hice un conversor de monedas con react.</p>
        <p>aca esta mi git hub donde estan todos mis Proyectos</p>
        <a
          className="link"
          href="https://github.com/tomasnieto1908"
          target="_blank"
        >
          tomasnieto1908
        </a>
      </div>
    </div>
  );
}

export default Projects;
