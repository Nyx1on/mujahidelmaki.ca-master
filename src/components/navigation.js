import React, { useState } from "react"
import { Link } from "gatsby"
import moon from "../images/moon.png"

function Navigation({ theme, onUpdateTheme }) {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/">
            <h4>Mujahid Elmaki</h4>
          </Link>

          <nav>
            <div className="nav-item-outer">
              <Link className="item about" activeclassName="active" to="/about">
                About
              </Link>

              <Link className="item blog" to="/blog">
                Blog
              </Link>

              <Link className="item projects" to="/projects">
                Projects
              </Link>

              <Link className="item illustration" to="/illustration">
                Illustration
              </Link>
            </div>
          </nav>
        </div>
        <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
            <img src={moon} alt="Theme" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Navigation
