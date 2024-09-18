import React, { useState } from 'react';
import '../styles/OldEducationPage.css.css';

const EducationPage = () => {
    // Initialize with the first item (index 0) being open
    const [openIndex, setOpenIndex] = useState(0);
  
    // Toggle the content open/close on click
    const toggleContent = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="education-page">
        <div className="education-container">
          <h1 className="education-header">Education</h1>
          <div className="education-timeline">
            <div className="education-line" style={{ transform: `scaleY(${openIndex !== null ? 1 : 0})` }}></div>
  
            {/* BTech in Electronics and Telecommunication */}
            <div className="education-item">
              <div
                className={`education-header-item ${openIndex === 0 ? 'open' : ''}`}
                onClick={() => toggleContent(0)}
              >
                BTech in Electronics and Telecommunication
              </div>
              <div className={`education-content ${openIndex === 0 ? 'open' : 'closed'}`}>
                <div className="college-name">Vishwakarma Institute of Technology</div>
                <div className="education-year">2022 - present</div>
                <div className="skills">
                  <div className="skill">Skill One</div>
                  <div className="skill">Skill Two</div>
                  <div className="skill">Skill Three</div>
                  <div className="skill">Skill Three</div>
                  <div className="skill">Skill Three</div>

                </div>
              </div>
            </div>
  
            {/* Diploma in Mechanical Engineering */}
            <div className="education-item">
              <div
                className={`education-header-item ${openIndex === 1 ? 'open' : ''}`}
                onClick={() => toggleContent(1)}
              >
                Diploma in Mechanical Engineering
              </div>
              <div className={`education-content ${openIndex === 1 ? 'open' : 'closed'}`}>
                <div className="college-name">Government Polytechnic Pune</div>
                <div className="education-year">2019 - 2022</div>
                <div className="skills">
                  <div className="skill">Skill One</div>
                  <div className="skill">Skill Two</div>
                  <div className="skill">Skill Three</div>
                </div>
              </div>
            </div>
  
            {/* 10th (SSC) */}
            <div className="education-item">
              <div
                className={`education-header-item ${openIndex === 2 ? 'open' : ''}`}
                onClick={() => toggleContent(2)}
              >
                10th (SSC)
              </div>
              <div className={`education-content ${openIndex === 2 ? 'open' : 'closed'}`}>
                <div className="college-name">Camp Education High School</div>
                <div className="education-year">2018 - 2019</div>
                <div className="skills">
                  <div className="skill">Skill One</div>
                  <div className="skill">Skill Two</div>
                  <div className="skill">Skill Three</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EducationPage;
