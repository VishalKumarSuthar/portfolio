import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <section className="projects-section section">
            <div className="container">
                <h2 className="section-title">My <span>Projects</span></h2>
                <div className="projects-grid">
                    {/* Project Card 1 */}
                    <div className="project-card glass">
                        <div className="project-img">
                            <img src="/food.png" alt="Project 1" />
                        </div>
                        <div className="project-content">
                            <h3>Food Delivery Website</h3>
                            <p>A fully functional e-commerce platform with cart and checkout features.</p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn-icon"><FaGithub /> Code</a>
                                <a href="#" className="btn-icon"><FaExternalLinkAlt /> Live</a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="project-card glass">
                        <div className="project-img">
                            <img src="port.png" alt="Project 2" />
                        </div>
                        <div className="project-content">
                            <h3>Portfolio Website</h3>
                            <p>A modern personal portfolio website with glassmorphism design.</p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>HTML5</span>
                                <span>CSS3</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn-icon"><FaGithub /> Code</a>
                                <a href="#" className="btn-icon"><FaExternalLinkAlt /> Live</a>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="project-card glass">
                        <div className="project-img">
                            <img src="coming.jpg" alt="Project 3" />
                        </div>
                        <div className="project-content">
                            <h3>Coming Soon</h3>
                            <p>.......</p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>API</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="btn-icon"><FaGithub /> Code</a>
                                <a href="#" className="btn-icon"><FaExternalLinkAlt /> Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
