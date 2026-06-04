export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I&apos;d love to hear from you. Let&apos;s discuss your next project or opportunity.
        </p>

        <div className="contact-info-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h5>Email</h5>
              <p>
                <a href="mailto:manuelortega20@yahoo.com">manuelortega20@yahoo.com</a>
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <h5>LinkedIn</h5>
              <p>
                <a href="https://www.linkedin.com/in/manuel-ortega-32aa6a16a/" target="_blank" rel="noopener noreferrer">
                  linkedin.com
                </a>
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <h5>GitHub</h5>
              <p>
                <a href="https://github.com/ManueliOrtegi" target="_blank" rel="noopener noreferrer">
                  github.com
                </a>
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h5>Location</h5>
              <p>Available for remote opportunities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
