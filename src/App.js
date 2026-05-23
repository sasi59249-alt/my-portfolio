import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-logo">SK</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span>Sasi Kumar</span> 👋</h1>
          <h2>Full Stack Developer</h2>
          <p>6'0 | Tech Enthusiast | Weights | Building cool stuff with code</p>
          <div className="hero-buttons">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>I'm a Final Year B.Tech Computer Science student at Mohan Babu University, passionate about building full stack web applications. I love reading books, playing hockey, and hitting the gym.</p>
      </section>

      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>Python</span><span>Java</span><span>HTML5</span>
          <span>CSS3</span><span>JavaScript</span><span>React.js</span>
          <span>Node.js</span><span>Express.js</span><span>Django</span>
          <span>PostgreSQL</span><span>MongoDB</span><span>Git</span>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built with React.js showcasing my skills and projects.</p>
            <div className="tags"><span>React.js</span><span>CSS</span></div>
            <div className="project-links">
              <a href="https://github.com/sasi59249-alt/my-portfolio" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://my-portfolio-ahry-lq1jnxazt-personal-s-projects9.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
          <div className="project-card">
            <h3>To-Do App with Auth</h3>
            <p>Full stack to-do application with user authentication, CRUD operations.</p>
            <div className="tags"><span>React.js</span><span>Node.js</span><span>MongoDB</span></div>
            <div className="project-links">
              <a href="https://github.com/sasi59249-alt/todo-app" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://my-portfolio-985pirz4g-personal-s-projects9.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>📧 sasi59249@gmail.com</p>
        <p>📱 8919692990</p>
        <p>🎓 Mohan Babu University | B.Tech CSE | 2026</p>
      </section>
    </div>
  );
}

export default App;