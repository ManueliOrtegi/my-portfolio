export default function About() {
  const highlights = [
    {
      title: "6+ Years Experience",
      description: "Building scalable solutions across web and desktop platforms"
    },
    {
      title: "Full-Stack Developer",
      description: "Expertise in .NET backend, React frontend, and database design"
    },
    {
      title: "Process Improvement",
      description: "Lean Six Sigma Yellow Belt certified in optimization"
    },
    {
      title: "Team Collaboration",
      description: "Experienced in Agile Scrum and cross-functional teamwork"
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">About Me</h2>

        {/* Personal Story */}
        <div className="about-content">
          <div className="about-item">
            <h3>My Journey</h3>
            <p>
              I&apos;m <strong>Manuel Ortega Jr</strong>, a passionate <strong>Senior .NET Developer</strong> with over 6 years of professional experience 
              in building robust, scalable web and desktop applications. My career has been driven by a commitment to 
              creating efficient solutions that solve real business problems.
            </p>
            <p>
              Starting from desktop development with WinForms and VB.NET, I&apos;ve evolved into a full-stack developer 
              with deep expertise in modern technologies like ASP.NET Core, React, Blazor, and MSSQL. This diverse 
              background has given me a unique perspective on software architecture and user experience.
            </p>
          </div>

          {/* Why I Do This */}
          <div className="about-item">
            <h3>Why I&apos;m Passionate About Development</h3>
            <p>
              I believe technology has the power to transform businesses and improve people&apos;s lives. Every project 
              I work on is an opportunity to create something meaningful. I&apos;m driven by:
            </p>
            <ul className="passion-list">
              <li>✓ Building applications that are not just functional, but elegant and user-friendly</li>
              <li>✓ Solving complex technical challenges with clean, maintainable code</li>
              <li>✓ Continuous learning and staying updated with industry best practices</li>
              <li>✓ Collaborating with talented teams to deliver exceptional results</li>
              <li>✓ Optimizing systems for performance, security, and scalability</li>
            </ul>
          </div>

          {/* Experience Summary */}
          <div className="about-item">
            <h3>Experience & Expertise</h3>
            <p>
              Throughout my career, I&apos;ve had the opportunity to work on diverse projects ranging from warehouse 
              management systems to HRIS platforms and custom ERP solutions. My technical foundation includes:
            </p>
            <div className="expertise-grid">
              <div className="expertise-box">
                <h5>Backend Development</h5>
                <p>ASP.NET Core, C#, RESTful APIs, Entity Framework, CQRS pattern, SQL Server</p>
              </div>
              <div className="expertise-box">
                <h5>Frontend Development</h5>
                <p>React, TypeScript, Blazor (Server/WebAssembly), Next.js, Telerik UI</p>
              </div>
              <div className="expertise-box">
                <h5>Database & Performance</h5>
                <p>MSSQL, Stored Procedures, Query Optimization, Indexing, Data Architecture</p>
              </div>
              <div className="expertise-box">
                <h5>Tools & Practices</h5>
                <p>Git, Azure DevOps, Agile Scrum, xUnit Testing, Code Review, Clean Architecture</p>
              </div>
            </div>
          </div>

          {/* Career Highlights */}
          <div className="about-item">
            <h3>Career Highlights</h3>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <h5>{highlight.title}</h5>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Values */}
          <div className="about-item">
            <h3>My Professional Values</h3>
            <p>
              I&apos;m committed to delivering high-quality solutions that exceed expectations. My approach is grounded in:
            </p>
            <div className="values-list">
              <div className="value-item">
                <strong>Quality First</strong>
                <p>Every line of code is written with attention to detail and maintainability</p>
              </div>
              <div className="value-item">
                <strong>Continuous Improvement</strong>
                <p>Always seeking better solutions through process optimization and learning</p>
              </div>
              <div className="value-item">
                <strong>Collaboration</strong>
                <p>Strong believer in teamwork and open communication for better outcomes</p>
              </div>
              <div className="value-item">
                <strong>Reliability</strong>
                <p>Delivering solutions that are secure, scalable, and perform consistently</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
