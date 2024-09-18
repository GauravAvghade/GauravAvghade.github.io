import React, { useState } from 'react';
import '../styles/ProjectPage.css';

const projects = [
  {
    title: 'Whealth Fisher',
    subheading: 'Finance Application with Machine Learning',
    technicalStack: [
      'Python',
      'NumPy',
      'Pandas',
      'OpenCV',
      'Random Forest Classifier',
      'Texture Analysis: GLCM, LBP',
      'k-fold Cross-Validation',
      'Image Processing',
    ],
    githubLink: 'https://github.com/your-repo-1',
    description: 'A system designed to identify and classify steel surface defects using Random Forest Classifier and texture descriptors like GLCM and LBP. Image processing was performed with Python, leveraging NumPy, Pandas, and OpenCV. The model was trained using k-fold cross-validation for improved accuracy.',
  },
  {
    title: 'Surface Defect Pro',
    subheading: 'Steel Surface Defect Classification with GLCM and LBP',
    technicalStack: [
      'MERN Stack: MongoDB, Express.js, ReactJS, Node.js',
      'Redux Toolkit, Material UI',
      'Machine Learning: Regression-js for revenue prediction',
      'TypeScript, Axios, React Router',
      'API Integration: Vite for optimized performance',
    ],
    githubLink: 'https://github.com/your-repo-2',
    description: 'A full-stack finance application built using the MERN stack (MongoDB, Express.js, ReactJS, Node.js) with integrated financial tracking and KPI features. The backend, developed with Node.js, Express.js, and TypeScript, ensures reliable performance, while state management is handled using Redux Toolkit Query. Regression-js was implemented for machine learning-based revenue prediction. The frontend includes an intuitive UI designed with Material UI, Vite, React Router, and Axios for seamless API interaction.',
  }
  // Add more projects as needed
];
 
const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = (index) => {
      setSelectedProject(index);
      setShowDetails(false);
  };

  const handleAboutClick = () => {
      setShowDetails(!showDetails);
      // Toggle the active class on the GitHub button
      const githubButton = document.querySelector('.github-button');
      if (githubButton) {
          githubButton.classList.toggle('active');
      }
  };

  return (
      <div className="project-page">
          <h1 className="project-header">My Projects</h1>
          <div className="project-card">
              <h2 className="card-header">{projects[selectedProject].title}</h2>
              <h3 className="card-subheading">{projects[selectedProject].subheading}</h3>
              <h4 className="technical-stack-header">Technical Stack</h4>
              <div className="card-body-container">
                  <div className="card-body">
                      {showDetails ? (
                          <div className="description-container">
                              <p>{projects[selectedProject].description}</p>
                          </div>
                      ) : (
                          <ul className="technical-stack-list">
                              {projects[selectedProject].technicalStack.map((skill, index) => (
                                  <li key={index}>{skill}</li>
                              ))}
                          </ul>
                      )}
                  </div>
                  <button className="button about-button" onClick={handleAboutClick}>
                      {showDetails ? 'Back' : 'About Project'}
                  </button>
                  <a
                      href={projects[selectedProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`button github-button ${showDetails ? 'active' : ''}`}
                  >
                      GitHub
                  </a>
              </div>
          </div>
          <div className="toggle-buttons">
              {projects.map((_, index) => (
                  <button
                      key={index}
                      className={`toggle-button ${selectedProject === index ? 'active' : ''}`}
                      onClick={() => handleToggle(index)}
                  >
                      Project {index + 1}
                  </button>
              ))}
          </div>
      </div>
  );
};

export default ProjectPage;
