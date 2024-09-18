import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const texts = [
  "software developer.",
  "software engineer.",
  "web developer.",
  "programmer.",
  "coder.",
  "web designer."
];

const LandingPage = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typeSpeed, setTypeSpeed] = useState(150); // Speed for typing
  const [deleteSpeed, setDeleteSpeed] = useState(100); // Speed for deleting

  useEffect(() => {
    let timer;

    const currentText = texts[textIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setCharIndex(0);
        timer = setTimeout(() => setDisplayText(""), 200); // Pause before typing the next text
      }
    } else {
      if (charIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typeSpeed);
      } else {
        setIsDeleting(true);
        timer = setTimeout(() => {}, 1000); // Pause before deleting
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="landing-page">
      <div className="intro-text">
        <p className="greeting">Hi, welcome I am</p>
        <h1 className="name">Gaurav Avghade</h1>
        <p className="role">
          I am <span className="dynamic-role">{displayText}</span>
        </p>
      </div>
      <div className="social-buttons">
        <a href="https://www.linkedin.com/in/your-profile" className="social-button linkedin" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/your-profile" className="social-button github" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
