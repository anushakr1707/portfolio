// App.js
import React from 'react';
import './Home.css';

function App() {
  const downloadResume = () => {
    fetch('http://localhost:5000/download-resume')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(err => {
        alert('Download failed: ' + err.message);
      });
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">👋 Hi, I’m <span className="highlight">Anusha K R</span></h1>
        <p className="hero-subtitle">6th Semester CSE Student @ Malnad College of Engineering</p>
        <p className="hero-description">
          Passionate about technology, development, and learning. I enjoy building interactive projects and exploring new tech.
        </p>

        <button className="btn-download" onClick={downloadResume}>
          📄 Download Resume
        </button>

        <div className="skills-section">
          <h2>🚀 My Skills & Projects</h2>
          <ul className="skills-list">
            <li><strong>C Programming:</strong> Basic data structures and algorithms.</li>
            <li><strong>Java:</strong> Object-Oriented Programming concepts.</li>
            <li><strong>HTML & CSS:</strong> Building responsive user-friendly layouts.</li>
            <li><strong>JavaScript:</strong> Adding dynamic functionality to websites.</li>
          </ul>
        </div>

        <p className="navigation-links">
          Feel free to check out my <a href="/about">About</a> and <a href="/contact">Contact</a> pages.
        </p>
      </div>
    </div>
  );
}

export default App;
