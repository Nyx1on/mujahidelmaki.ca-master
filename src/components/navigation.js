import React, { useState } from "react"
import { Link } from "gatsby"

function Navigation() {
  const [theme, setTheme] = useState("light")

  function handleThemeChange() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <nav>
      <h1> Mujahid Elmaki</h1>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>{" "}
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
      <button onClick={handleThemeChange}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  )
}

export default Navigation
