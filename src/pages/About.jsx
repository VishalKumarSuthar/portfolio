import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-img glass">
                        <img src="/profile.jpeg" alt="Profile" />
                    </div>
                    <div className="about-text glass">
                        <h2>About <span>Me</span></h2>
                        <h3>Frontend Developer</h3>
                        <p>
                            I am a passionate frontend developer with a keen eye for design and detail.
                            I love creating interactive and dynamic user experiences using modern web technologies.
                            With a strong foundation in React.js, HTML5, and CSS3, I build scalable and maintainable applications.
                        </p>
                        <p>
                            Throughout my journey, I have worked on various projects that have honed my skills in
                            problem-solving and UI/UX design. I am always eager to learn new technologies and improve my craft.
                        </p>
                        <div className="about-btn">
                            <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
