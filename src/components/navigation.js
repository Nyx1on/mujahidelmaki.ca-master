import React from "react"
import { Link } from "gatsby"
import maki from "../images/logo.png"
import darkMaki from "../images/logo-dark.png"
import moon from "../images/moon-icon.png"
import sun from "../images/sun-icon.png"
import { ExternalLinkIcon } from "../assets/ExternalLinkIcon"

const mainNavItems = [
  { url: "/", icon: "null", label: "Home", mobileOnly: true },
  { url: "/about", icon: "null", label: "About" },
  { url: "/blog", icon: "null", label: "Blog" },
  { url: "/projects", icon: "null", label: "Projects" },
  { url: "/illustration", icon: "null", label: "Illustration" },
]

const socialNavItems = [
  { url: "https://github.com/mujahidelmaki", icon: "NA", label: "GitHub" },
]

function Navigation({ theme, onUpdateTheme }) {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="item brand">
            <img
              src={theme === "light" ? darkMaki : maki}
              className="logo"
              alt="logo"
            />
            <span>MΛKI</span>
          </Link>
          <nav>
            {mainNavItems.map(item => (
              <div className="nav-item-outer" key={item.url}>
                <Link
                  to={item.url}
                  key={item.label}
                  activeClassName="active"
                  className={`item ${item.label.toLowerCase()} ${
                    item.mobileOnly ? "mobile-only" : ""
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}

            {socialNavItems.map(item => (
              <div className="nav-item-outer" key={item.url}>
                <img src={item.icon} alt={item.label} className="nav-image" />
                <a
                  href={item.url}
                  key={item.label}
                  className={`desktop-only item github`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                  <ExternalLinkIcon />
                </a>
              </div>
            ))}
          </nav>
        </div>

        <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            <img src={theme === "light" ? moon : sun} alt="Theme" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Navigation
