import React, { useState } from 'react';
import '../styles/EducationPage.css';

const EducationPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const educationData = [
        {
            degree: "BTech in Electronics & Telecommunication",
            school: "Vishwakarma Institute of Technology",
            year: "Present",
        },
        {
            degree: "Diploma in Mechanical Engineering",
            school: "Government Polytechnic Pune",
            year: "2022 - 2019",
        },
        {
            degree: "10th (SSC)",
            school: "Camp Education High School",
            year: "2019 - 2018",
        },
    ];

    return (
        <div className="education-page">
            <div className="education-container">
                <h1 className="education-header">Education</h1>
                <div className="education-timeline">
                    {educationData.map((item, index) => (
                        <div key={index} className="education-item" onClick={() => handleToggle(index)}>
                            <div className="degree-program">
                                {item.degree}
                            </div>
                            <div className="education-details">
                                <div className="college-name">
                                    {item.school}
                                </div>
                                <div className="education-year">
                                    {item.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationPage;
