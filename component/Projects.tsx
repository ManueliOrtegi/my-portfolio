export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Warehouse Management System Winforms",
      description: "A core warehouse management solution designed for inventory tracking, order processing, and logistics management. Features include real-time inventory updates, reporting, and integration with barcode scanners.",
      technologies: ["C#.NET", "Winforms", "DevExpress", "SAP Integration", "MSSQL", "RESTful APIs", "Git"],
    },
    {
      id: 2,
      title: "Warehouse Management System Web Application",
      description: "A core warehouse management solution designed for inventory tracking, order processing, and logistics management. Features include real-time inventory updates, reporting, and integration with barcode scanners.",
      technologies: ["ASP.NET Core", "ASP.NET Core MVC", "C#", "SAP Integration", "RESTful APIs", "DevExpress", "MSSQL", "Git"],
    },
    {
      id: 3,
      title: "Attendance Monitoring System",
      description: "An integrated attendance tracking solution featuring real-time monitoring, reporting, and employee management. Includes desktop for comprehensive coverage.",
      technologies: ["C#.NET", "WinForms", "VB.NET", "MSSQL", "Git"],
    },
    {
      id: 4,
      title: "HRIS",
      description: "Human Resource Information System designed for employee data management, payroll processing, and HR analytics. Features secure authentication and role-based access control.",
      technologies: ["VB.NET", "MSSQL", "SAP Report Designer", "Git"],
    },
    {
      id: 5,
      title: "Internal ERP System",
      description: "A robust system including modules for HRIS, Accounting, Inventory Management, HRIS, and Sales. Designed to streamline business processes and improve operational efficiency.",
      technologies: ["ASP.NET Core", "C#", "MSSQL", "Stored Procedures", "Git", "WinForms"],
    },
    {
      id: 6,
      title: "Webhook",
      description: "Maintained and improved desktop and web applications while enhancing system performance for reliability and scalability. Developed an integration system that bridges the company's API with third-party cargo services, enabling seamless data exchange and order processing.",
      technologies: ["ASP.NET Core", "VB.NET", "C#.NET", "REST APIs", "MSSQL", "Clean Architecture", "Git"],
    },
    {
      id: 7,
      title: "Transaction Practice Group Platform",
      description: "Developed a web application using Blazor (Server/WebAssembly) with Telerik UI Components, implementing CQRS pattern and Clean Architecture principles for scalability and maintainability. Collaborated with cross-functional teams (UI/UX, QA, BA) to deliver end-to-end solutions while enforcing code review standards, best practices, and performance optimization.",
      technologies: ["ASP.NET Core", "Blazor", "Telerik UI", "CQRS", "Clean Architecture", "MSSQL", "Github Copilot", "Azure DevOps", "Git", "Claude AI", "xUnit", "Functional Testing", "Unit Testing", "Integration Testing"],
    },
  ];

  return (
    <section className="projects-page">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of the key projects Ive developed showcasing my expertise in full-stack development
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
