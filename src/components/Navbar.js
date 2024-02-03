import { Link } from 'gatsby'
import logo from '../img/logo.png'
import React, { useState } from 'react'
import github from '../img/github-icon.svg'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="personal-site" style={{ minHeight: "64px" }} />
          </Link>
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </li>
          <li className="navbar-end has-text-centered">
            <div className="navbar-brand">
              <a
                className="navbar-item"
                href="https://github.com/RMNProgrammer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon">
                  <img src={github} alt="Github" style={{ minHeight: "32px", minWidth: "32px" }} />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar