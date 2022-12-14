import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <h1> Mujahid Elmaki</h1>

    <ul>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    </ul>
  </nav>
)

export default Navigation
