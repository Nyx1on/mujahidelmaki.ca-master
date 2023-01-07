import React from "react"

import vercel from "../images/vercel.png"
import gatsby from "../images/gatsby-icon.png"
import github from "../images/github.png"

const links = [
  { url: "https://taniarascia.substack.com", label: "Newsletter" },
  { url: "https://ko-fi.com/taniarascia", label: "Ko-Fi" },
  { url: "https://patreon.com/taniarascia", label: "Patreon" },
  { url: "https://www.taniarascia.com/rss.xml", label: "RSS" },
]
const madeWithLinks = [
  { url: "https://www.gatsbyjs.org/", label: "Gatsby", icon: gatsby },
  { url: "https://github.com/taniarascia", label: "GitHub", icon: github },
  { url: "https://www.netlify.com", label: "Netlify", icon: vercel },
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
