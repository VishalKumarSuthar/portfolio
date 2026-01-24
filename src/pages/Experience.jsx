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
                        <div className="timeline-date">2023 - Present</div>
                        <div className="timeline-content">
                            <h3>Frontend Developer</h3>
                            <h4>Tech Solutions Inc.</h4>
                            <p>
                                Developing and maintaining responsive web applications using React.js.
                                Collaborating with cross-functional teams to define features and ship products.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item glass">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2022 - 2023</div>
                        <div className="timeline-content">
                            <h3>Web Development Intern</h3>
                            <h4>Digital Agency</h4>
                            <p>
                                Assisted in building user interfaces for client websites.
                                Learned modern CSS techniques and JavaScript ES6+.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item glass">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2018 - 2022</div>
                        <div className="timeline-content">
                            <h3>Computer Science Degree</h3>
                            <h4>University of Technology</h4>
                            <p>
                                Bachelor of Science in Computer Science. Specialized in Web Technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
