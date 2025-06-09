// App.js
import React from 'react';
import './Project.css';

const App = () => {
  const projectList = [
    {
      title: 'Medi-Core',
      description:
        'Medi-Core revolutionizes clinic operations with a patient-centric digital platform. Incorporates online appointment scheduling, real-time doctor availability, multilingual support, and patient feedback mechanisms.Enhances patient engagement and reduces administrative workload.Ensures seamless communication between doctors and patients.',
      imageUrl: '/icons/hospital img.jpeg'
    }
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>My Project</h1>
        <p>
          A few samples of my recent work, built with modern technologies and optimized for performance.
        </p>
      </header>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-tile" key={index}>
            <div className="project-image-wrapper">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
