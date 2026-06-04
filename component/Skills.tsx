export default function Skills() {
  const skills = [
    {
        id: 1,
        name: "C#.NET",
        category: "Backend",
        description: "Proficient in C#.NET for building robust backend applications, APIs, and desktop solutions.",
    },
    {
        id: 2,
        name: "ASP.NET Core",
        category: "Backend",
        description: "Experienced in developing scalable web applications and APIs using ASP.NET Core framework.",
    },
    {
        id: 3,
        name: "React",
        category: "Frontend",
        description: "Skilled in building dynamic and responsive user interfaces with React and TypeScript.",
    },
    {
        id: 4,
        name: "Blazor",
        category: "Frontend",
        description: "Experienced in creating interactive web applications using Blazor (Server and WebAssembly).",
    },
    {
        id: 5,
        name: "MSSQL", 
        category: "Database",
        description: "Proficient in designing and managing databases using Microsoft SQL Server.",
    },
    {
        id: 6,
        name: "Git",
        category: "Tools",
        description: "Experienced in version control and collaboration using Git and GitHub.",
    },
    {
        id: 7,
        name: "Azure DevOps",
        category: "Tools",
        description: "Skilled in CI/CD pipelines, project management, and collaboration using Azure DevOps.",
    },
    {
        id: 8,
        name: "xUnit Testing",
        category: "Testing",
        description: "Experienced in writing unit and integration tests using xUnit framework.",
    },
    {
        id: 9,
        name: "WinForms",
        category: "Desktop Development",
        description: "Proficient in building desktop applications using WinForms, VB.NET and C#.NET.",
    },
    {
        id: 10,
        name: "VB.NET",
        category: "Desktop Development",
        description: "Experienced in developing desktop applications using VB.NET and WinForms.",
    },
  ];

  return (
    <section className="skills-page">
      <div className="container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">
          Here are some of the key skills I have developed over my career as a software engineer, showcasing my expertise in various technologies and tools.
        </p>
        <div className="skills-grid">
            {skills.map((skill) => (
                <div key={skill.id} className="skill-card">
                    <h3>{skill.name}</h3>
                    <p className="skill-category">{skill.category}</p>
                    <p className="skill-description">{skill.description}</p>
                </div>
            ))}
        </div>
        </div>
    </section>
  );
}