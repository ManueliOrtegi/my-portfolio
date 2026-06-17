export default function Projects() {
  const projects = [
    {
      id: 1,
      CompanyName: "Mayer Steel Pipe Corporation",
      title: "Junior Programmer",
      description:
        "333 T. Santiago, Bo. Lingunan, Valenzuela, 1446 Metro Manila",
      Year: "October 2018 - February 2019",
    },
    {
      id: 2,
      CompanyName: "Market Merge Inc",
      title: "Junior Programmer",
      description:
        "Ground Floor, Azure Business Center, 1197-A Epifanio de los Santos Ave, Quezon City, 1105 Metro Manila",
      Year: "August 2019 - August 2020",
    },
    {
      id: 3,
      CompanyName: "Phil-Data Business Systems, Inc.",
      title: "Junior Programmer",
      description:
        "King's Court Building 2, 3F, 2129 Chino Roces Ave, Makati, 1231 Kalakhang Maynila",
      Year: "March 2021 - June 2021",
    },
    {
      id: 4,
      CompanyName: "Huawei Technologies Philippines Incorporated",
      title: "OSS Engineer/ Software Engineer",
      description:
        "53rd Floor, PBCom Tower, Ayala Avenue Corner V. A. Rufino Street, Makati, Philippines, 1227",
      Year: "June 2021 - June 2023",
    },
    {
      id: 5,
      CompanyName: "Golden ABC Inc",
      title: "Systems Developer",
      description:
        "GABC 1155, 1155 Epifanio de los Santos Ave (EDSA), Balintawak, Quezon City, 1106 Philippines",
      Year: "June 2023 - March 2025",
    },
    {
      id: 6,
      CompanyName: "Axesscom Philippines Inc",
      title: "Senior .NET Developer",
      description:
        "Clark Center 11, Unit 3 Jose Abad Santos Avenue, Pinatubo Extension Clark Freeport Zone, 2023, Clark Freeport, Zone, 2023 Pampanga",
      Year: "June 2025 - Present",
    },
  ];

  return (
    <section className="projects-page">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of the key projects Ive developed showcasing my
          expertise in full-stack development
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.CompanyName}</h3>
                <h5>{project.title}</h5>
              </div>
              <div className="project-body">
                <h5>Address:</h5>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <h5>Year stay:</h5>
                  <div className="tech-tags">
                    <span className="tech-tag">{project.Year}</span>
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
