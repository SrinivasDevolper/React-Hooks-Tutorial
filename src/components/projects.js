import React from "react";
import { Link, Outlet } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <nav style={{ backgroundColor: "transparent" }}>
        <Link to="/projects/featured">FeaturedProjects</Link>
        <Link to="/projects/new-projects">NewProjects</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default Projects;
