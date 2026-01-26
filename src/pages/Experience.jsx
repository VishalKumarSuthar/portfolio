import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
    return (
        <section className="experience-section section">
            <div className="container">
                <h2 className="section-title">My <span>Experience</span></h2>

                <div className="timeline">
                   

                    <div className="timeline-item glass">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">June 2024 - July 2024</div>
                        <div className="timeline-content">
                            <h3>Mern Stack Intern</h3>
                            <h4>MATE (Marvik Academy For Technical Education)</h4>
                            <p>
                            Developed a full-stack Food Delivery Web Application using MongoDB, Express.js, React.js, and Node.js,
                            offering smooth browsing, ordering, and tracking features.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item glass">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2024 - 2026</div>
                        <div className="timeline-content">
                            <h3>Computer Science Degree</h3>
                            <h4>Mohanlal Sukhadia University, Udaipur</h4>
                            <p>
                               Master Of Computer Applications in Computer Science.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
