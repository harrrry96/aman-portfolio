import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020817]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-8">

        {/* LOGO */}
        <Link
          to="/"
          className="text-4xl md:text-5xl font-black tracking-wide text-white hover:text-cyan-400 transition duration-300"
        >
          Aman.
        </Link>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-14 text-[20px] font-medium text-white">

          <li>
            <a
              href="/#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="/#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="/#education"
              className="hover:text-cyan-400 transition duration-300"
            >
              Education
            </a>
          </li>

          {/* CERTIFICATION */}
          <li>
            <Link
              to="/certification"
              className="hover:text-cyan-400 transition duration-300"
            >
              Certification
            </Link>
          </li>

          {/* CONTACT BUTTON */}
          <li>
            <a
              href="/#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;