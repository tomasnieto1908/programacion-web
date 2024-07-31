import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
