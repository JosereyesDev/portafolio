import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Registro de control de centros SICT',
      description: 'Sistema de registro de llamadas de incidencias de licencias nacionales e internacionales, diseñado para registrar datos de manera automatizada para su posterior consulta.',
      technologies: 'HTML • CSS • JavaScript • Bootstrap • PostgreSQL • CodeIgniter 4',
      image: '/assets/proyecto_servicio.webp'
    },
    {
      title: 'Desarrollo de Microservicios y Frontend',
      description: 'Durante mi periodo como becario en el área de Sistemas, participé en el desarrollo de microservicios utilizando Spring Boot con Java, aplicando principios de arquitectura REST (API REST) para implementar funcionalidades tipo POST, PUT, DELETE y GET. Además, colaboré en el diseño e implementación de interfaces dinámicas e interactivas.',
      technologies: 'HTML • Bootstrap • Oracle • Java • Spring Boot',
      image: '/assets/proyecto_becario.webp'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <Image 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                width={600}
                height={400}
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">{project.technologies}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;