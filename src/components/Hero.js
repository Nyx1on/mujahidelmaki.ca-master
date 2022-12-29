import React from "react"

export const Hero = ({ highlight, subtitle, title, children, index }) => {
  return (
    <header className={`hero ${index ? "index" : ""}`}>
      {subtitle && (
        <div className="sub-title">
          {highlight && <span className="highlight">{highlight}</span>}
          {subtitle}
        </div>
      )}

      {title && <h1>{title}</h1>}
      {children && children}
    </header>
  )
}
