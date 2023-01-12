import React from "react"

import netlify from "../images/netlify.png"
import gatsby from "../images/gatsby-icon.png"
import github from "../images/github.png"

const links = [
  { url: "https://mujahidelmaki.substack.com", label: "Newsletter" },
]
const madeWithLinks = [
  { url: "https://www.gatsbyjs.org/", label: "Gatsby", icon: gatsby },
  { url: "https://github.com/mujahidelmaki", label: "GitHub", icon: github },
  { url: "https://www.netlify.com", label: "Netlify", icon: netlify },
]

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">Made by Mujahid Elmaki</span>
          {links.map(link => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav>
          {madeWithLinks.map(link => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}

export default Footer
