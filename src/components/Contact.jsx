function Contact() {
  return (
    <section id="contact" className="section">

      <div className="container-custom">

        <p className="section-top-title">
          CONTACT
        </p>

        <h1 className="section-title">
          Connect With Me
        </h1>

        <div className="premium-card">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "30px",
              marginTop: "40px"
            }}
          >

            {/* WhatsApp */}
            <a
              href="https://wa.me/918840770829"
              target="_blank"
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <h2 style={titleStyle}>📱 WhatsApp</h2>

              <p style={textStyle}>
                Chat directly on WhatsApp
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:amankhan276121@gmail.com"
              style={cardStyle}
            >
              <h2 style={titleStyle}>📧 Email</h2>

              <p style={textStyle}>
                Send me an email anytime
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mohammad-aman-khan-3235a0371"
              target="_blank"
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <h2 style={titleStyle}>💼 LinkedIn</h2>

              <p style={textStyle}>
                Connect professionally
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <h2 style={titleStyle}>📸 Instagram</h2>

              <p style={textStyle}>
                Follow on Instagram
              </p>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <h2 style={titleStyle}>▶️ YouTube</h2>

              <p style={textStyle}>
                Watch my content
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/harrrry96"
              target="_blank"
              rel="noopener noreferrer"
              style={cardStyle}
            >
              <h2 style={titleStyle}>💻 GitHub</h2>

              <p style={textStyle}>
                Explore my projects & code
              </p>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

/* PREMIUM CARD STYLE */
const cardStyle = {
  textDecoration: "none",
  background: "#111827",
  padding: "35px",
  borderRadius: "25px",
  border: "1px solid #facc15",
  transition: "0.3s",
  color: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
};

/* TITLE STYLE */
const titleStyle = {
  fontSize: "30px",
  marginBottom: "15px",
  color: "#facc15",
  fontWeight: "700"
};

/* TEXT STYLE */
const textStyle = {
  color: "#94a3b8",
  fontSize: "18px",
  lineHeight: "30px"
};

export default Contact;