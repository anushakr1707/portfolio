import React from 'react';
import './ContactInfo.css';

function App() {
  return (
    <section className="contact-container">
      <h1 className="contact-heading">Get In Touch</h1>
      <div className="cards-wrapper">
        <div className="contact-card">
          <div className="icon-circle">
            <img src="/icons/phone.png" alt="Phone" />
          </div>
          <h2>Phone</h2>
          <p>+91 6363154105</p>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <img src="/icons/email.png" alt="Email" />
          </div>
          <h2>Email</h2>
          <p>anushaks1707@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <img src="/icons/address.png" alt="Address" />
          </div>
          <h2>Address</h2>
          <p>Anusha K R D/O<br />
            Ravikumar N K,<br />
            Shivamogga,<br />
            Karnataka, 577413.
          </p>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <img src="/icons/git.png" alt="GitHub" />
          </div>
          <h2>GitHub</h2>
          <a
            href="https://github.com/anushakr1707"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/anushakr1707
          </a>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <img src="/icons/linkdin.png" alt="LinkedIn" />
          </div>
          <h2>LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/anusha-k-r-73a064268"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/anusha-k-r-73a064268
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
