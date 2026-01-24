import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section container">
                <div className="hero-content">
                    <h2 className="hero-greeting">Hello, It's Me</h2>
                    <h1 className="hero-name">Vishal</h1>
                    <h3 className="hero-role">And I'm a <span>Frontend Developer</span></h3>
                    <p className="hero-description">
                        I create modern, responsive, and user-friendly web interfaces using React.js.
                        Passionate about building seamless digital experiences.
                    </p>
                    <div className="hero-btns">
                        <Link to="/contact" className="btn btn-primary">Hire Me</Link>
                        <a href="resume.pdf" className="btn btn-outline" download>Download CV</a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="img-box">
                        <img src="profile.jpeg" alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
