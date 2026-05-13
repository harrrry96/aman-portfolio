function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-wrapper">

        {/* LOGO */}

        <h1 className="logo">
          Aman Khan
        </h1>

        {/* LINKS */}

        <ul className="nav-links">

          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#skills">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar