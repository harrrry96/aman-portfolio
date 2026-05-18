function Projects() {
  return (
    <section id="projects" className="section section-dark">
      
      <div className="container-custom">

        <p className="section-top-title">
          FEATURED PROJECT
        </p>

        <h1 className="section-title">
          Ridox Cafe
        </h1>

        <div className="premium-card">

          <div className="project-wrapper">

            {/* Project Image */}
            <div className="project-image">

              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
                alt="Ridox Cafe"
              />

            </div>

            {/* Project Content */}
            <div className="project-content">

              <h2>
                Premium Restaurant Website
              </h2>

              <p>
                Modern cafe website built using React
                and Tailwind CSS with premium UI design.
              </p>

              <div className="hero-buttons">

                {/* Live Preview Button */}
                <a
                  href="https://ridox-cafe.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="primary-btn">
                    Live Preview
                  </button>
                </a>

                {/* GitHub Button */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="secondary-btn">
                    GitHub
                  </button>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;