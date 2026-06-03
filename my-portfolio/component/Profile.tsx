export default function Profile() {
  return (
    <section className="profile-section">
      <div className="container">
        <h1 className="display-4">Manuel Ortega Jr</h1>
        <h2 className="lead text-muted">Senior .NET Developer • 6+ Years of Experience</h2>
        <p className="bio">
          Passionate developer with expertise in building scalable web applications 
          using modern frameworks and technologies. Focused on creating efficient, 
          user-friendly solutions.
        </p>

        <div className="social-links mb-4">
          <a href="https://github.com/ManueliOrtegi" className="btn btn-outline-primary btn-sm mx-2" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/manuel-ortega-32aa6a16a/" className="btn btn-outline-primary btn-sm mx-2" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:manuelortega20@yahoo.com" className="btn btn-outline-primary btn-sm mx-2">
            Email
          </a>
        </div>
        
        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="stack-category">
                <h4>Backend</h4>
                <p>ASP.NET Core • C# • RESTful APIs</p>
                <p>Entity Framework • SQL Server • CQRS</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stack-category">
                <h4>Frontend</h4>
                <p>React • TypeScript • Blazor • Next.js</p>
                <p>CSS • HTML • JavaScript • Telerik UI • DevExpress </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stack-category">
                <h4>Testing & QA</h4>
                <p>xUnit • Functional Testing</p>
                <p>Unit Testing • Integration Testing</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stack-category">
                <h4>Tools & Methodologies</h4>
                <p>SQL • Git • Visual Studio • VS Code</p>
                <p>Azure DevOps • Agile Scrum • Claude AI</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stack-category">
                <h4>Desktop Development</h4>
                <p>WinForms • C#.NET • Windows Applications</p>
                <p>WinForms • VB.NET • Windows Applications</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stack-category">
                <h4>Database Technologies</h4>
                <p>MSSQL • SQL Server Management</p>
                <p>Stored Procedures • Functions • Indexing</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stack-category">
                <h4>Languages</h4>
                <p>English • Filipino</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="stack-category">
                <h4>Certifications</h4>
                <p>Lean Six Sigma Yellow Belt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="certifications-section mt-5">
          <h3>Certifications & Methodologies</h3>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="certification-item">
                <div className="cert-icon">📜</div>
                <h5>Lean Six Sigma Yellow Belt</h5>
                <p>Process improvement and optimization expertise</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="certification-item">
                <div className="cert-icon">🎯</div>
                <h5>Agile Scrum Methodology</h5>
                <p>Experienced in agile project management and scrum practices</p>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-section mt-5">
          <a href="#projects" className="btn btn-primary btn-lg">
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}