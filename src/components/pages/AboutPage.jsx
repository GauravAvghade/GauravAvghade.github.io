import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { SiLeetcode } from 'react-icons/si';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">About Me</div>
      <div className="about-content">
        I'm a final-year B.Tech student in Electronics and Telecommunication Engineering, skilled in front-end development with React.js and TypeScript, and backend technologies like Node.js, Java, SQL, and NoSQL databases. I have experience with the MERN stack and Spring Boot. Proficient in languages like Java, C, C++, JavaScript, and Python, I’m passionate about problem-solving, Data Structures, and Algorithms. I also enjoy creative activities like sketching and painting, and I’m actively working toward a career in software development.
      </div>
      <div className="about-buttons">
        <a href="https://leetcode.com/yourprofile" className="button">
          <SiLeetcode /> LeetCode
        </a>
        <a href="your-resume-link.pdf" className="button" download>
          <FontAwesomeIcon icon={faCircleDown} /> Resume
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
