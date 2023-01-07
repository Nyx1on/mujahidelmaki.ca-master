import React, { useState, useEffect } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer.js"
import Helmet from "react-helmet"

import "../styles/global.css"

export default function Layout({ children }) {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  const [theme, setTheme] = useState("dark")

  const onUpdateTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    window.localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  return (
    <div className="global-wrapper">
      <Helmet>
        {theme === "dark" && (
          <link rel="stylesheet" type="text/css" href="/dark-mode.css" />
        )}
      </Helmet>

      <div id="layout" className="layout">
        <Navigation onUpdateTheme={onUpdateTheme} theme={theme} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
