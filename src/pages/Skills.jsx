import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
    return (
        <section className="skills-section section">
            <div className="container">
                <h2 className="section-title">My <span>Skills</span></h2>

                <div className="skills-container">
                    <div className="skill-category glass">
                        <h3>Frontend</h3>
                        <div className="skill-grid">
                            <div className="skill-card">
                                <FaReact className="skill-icon react" />
                                <p>React.js</p>
                            </div>
                            <div className="skill-card">
                                <FaHtml5 className="skill-icon html" />
                                <p>HTML</p>
                            </div>
                            <div className="skill-card">
                                <FaCss3Alt className="skill-icon css" />
                                <p>CSS</p>
                            </div>
                            <div className="skill-card">
                                <FaJs className="skill-icon js" />
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category glass">
                        <h3>Tools & Others</h3>
                        <div className="skill-grid">
                            <div className="skill-card">
                                <FaGitAlt className="skill-icon git" />
                                <p>Github</p>
                            </div>
                            <div className="skill-card">
                                <FaNodeJs className="skill-icon node" />
                                <p>Node.js (basic)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
