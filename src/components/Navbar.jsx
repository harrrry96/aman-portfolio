function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-wrapper">

        {/* NAME LOGO */}
        <h1 className="logo">
          Mohammad Aman Khan
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

          {/* EDUCATION */}
          <li>
            <a href="#education">
              Education
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
  );
}

export default Navbar;