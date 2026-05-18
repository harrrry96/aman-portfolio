function Hero() {
  return (
    <section className="hero">

      <div className="hero-wrapper">

        {/* LEFT IMAGE */}
        <div className="hero-image-area">

          <div className="hero-glow"></div>

          <div className="hero-circle"></div>

          <img
            src="/profile.jpg"
            alt="Mohammad Aman Khan"
            className="hero-profile"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-content">

          {/* TAGS */}
          <div className="hero-top-tags">

            <span>Frontend Developer</span>

            <span>Data Analyst</span>

          </div>

          {/* NAME */}
          <h1>
            Mohammad Aman Khan
          </h1>

          {/* SUBTITLE */}
          <h2>
            Building Modern Digital Experiences
          </h2>

          {/* DESCRIPTION */}
          <p>

            Passionate about creating premium modern websites,
            responsive UI designs, restaurant platforms and
            modern frontend experiences using React,
            Tailwind CSS and Data Analytics.

          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            {/* Hire Me */}
            <a
              href="https://wa.me/918840770829"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="primary-btn">
                Hire Me
              </button>

            </a>

            {/* Download CV */}
            <a
              href="/Aman-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >

              <button className="secondary-btn">
                Download CV
              </button>

            </a>

          </div>

          {/* STATS */}
          <div className="hero-stats">

            <div>
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>Frontend</h3>
              <p>Developer</p>
            </div>

            <div>
              <h3>Data</h3>
              <p>Analytics</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;