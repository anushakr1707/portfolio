import React from 'react';
import './About.css';

function App() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
        <p className="about-intro">
          Enthusiastic and dedicated student with a strong academic background, eager to gain hands-on experience.
          Actively seeking an internship or entry-level position to apply analytical and problem-solving skills
          while contributing to an innovative organization's growth.
        </p>
      </header>

      <section className="info-section">
        <h2>🎓 Education</h2>
        <div className="card">
          <h3>Malnad College of Engineering, Hassan</h3>
          <p>CGPA: 8.57 (Pursuing, 2026)</p>
        </div>
        <div className="card">
          <h3>Gov PU College, Shivamogga</h3>
          <p>Percentage: 94.83% (2022)</p>
        </div>
        <div className="card">
          <h3>Morarji Desai Residential Schoola, Shivamogga</h3>
          <p>Percentage: 92% (2020)</p>
        </div>
      </section>

      <section className="info-section">
        <h2>📜 Certifications</h2>
        <div className="card">
          <h3>Introduction To Java</h3>
          <p>LearnTube, 2023</p>
        </div>
        <div className="card">
          <h3>Soft Skill Development</h3>
          <p>NPTEL, 2024</p>
        </div>
        <div className="card">
          <h3>Software Testing</h3>
          <p>NPTEL, 2024</p>
        </div>
      </section>
    </div>
  );
}

export default App;
