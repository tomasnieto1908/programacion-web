import React from "react";

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setCurrentPage("Home")}>Inicio</li>
        <li onClick={() => setCurrentPage("About")}>Sobre Mí</li>
        <li onClick={() => setCurrentPage("Projects")}>Proyectos</li>
      </ul>
    </nav>
  );
}

export default Navbar;
