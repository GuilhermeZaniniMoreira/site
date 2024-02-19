import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { FaJs, FaNodeJs, FaReact, FaDatabase, FaFlask, FaAws, FaPython, FaDocker, FaLinkedin, FaGithub } from 'react-icons/fa';
import './App.css';

ChartJS.register(...registerables);

const skills = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'SQL/NoSQL', icon: <FaDatabase /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Testing', icon: <FaFlask /> },
  { name: 'React', icon: <FaReact /> },
];

const App = () => {
  return (
    <div className="app">
      <div className="left-side">
        <h1 className="name">Guilherme Zanini Moreira</h1>
        <p className="description">
          A passionate backend software developer with expertise in building scalable and efficient server-side applications. 
          Experienced in JavaScript, Node.js, SQL/NoSQL, microservices, Python, testing and AWS. Committed to delivering high-quality code and 
          continuously improving technical skills.
        </p>
        <div className="skill-badges">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              {skill.icon}
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-side">
        <img src="https://avatars.githubusercontent.com/u/34398923?v=4" alt="Developer" className="profile-image" />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/guilherme-zanini-moreira/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/guilhermezaninimoreira" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
