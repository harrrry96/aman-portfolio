function Contact() {
  return (
    <section id="contact" className="section">

      <div className="container-custom">

        <p className="section-top-title">
          CONTACT
        </p>

        <h1 className="section-title">
          Let’s Work Together
        </h1>

        <div className="premium-card">

          <div className="contact-wrapper">

            <div>

              <h2
                style={{
                  fontSize:"54px",
                  marginBottom:"30px",
                  fontWeight:"900"
                }}
              >
                Contact Me
              </h2>

              <p
                style={{
                  color:"#94a3b8",
                  fontSize:"22px",
                  lineHeight:"42px"
                }}
              >

                Feel free to contact me for React projects,
                portfolio websites, UI design and modern
                web development work.

              </p>

            </div>

            <div className="contact-form">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <textarea
                rows="7"
                placeholder="Your Message"
              ></textarea>

              <button className="primary-btn">
                Send Message
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact