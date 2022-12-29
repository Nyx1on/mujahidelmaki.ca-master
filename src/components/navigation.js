import React, { useState } from "react"
import { Link } from "gatsby"
import maki from "../images/logo.png"
import moon from "../images/moon.png"

function Navigation({ theme, onUpdateTheme }) {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="item brand">
            <img src={maki} className="logo" alt="logo" />
            <span>Mujahid Elmaki</span>
          </Link>

          <nav>
            <div className="nav-item-outer">
              <Link className="item about" activeclassName="active" to="/about">
                About
              </Link>

              <Link className="item blog" activeclassName="active" to="/blog">
                Blog
              </Link>

              <Link
                className="item projects"
                activeclassName="active"
                to="/projects"
              >
                Projects
              </Link>

              <Link
                className="item illustration"
                activeclassName="active"
                to="/illustration"
              >
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
