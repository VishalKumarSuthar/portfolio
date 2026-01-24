import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
    return (
        <section className="services-section section">
            <div className="container">
                <h2 className="section-title">My <span>Services</span></h2>

                <div className="services-grid">
                    <div className="service-card glass">
                        <div className="service-icon"><FaCode /></div>
                        <h3>Web Development</h3>
                        <p>Building fast, responsive, and secure websites tailored to your needs using modern technologies.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon"><FaPaintBrush /></div>
                        <h3>UI/UX Design</h3>
                        <p>Designing intuitive and visually appealing user interfaces that provide great user experiences.</p>
                    </div>

                    <div className="service-card glass">
                        <div className="service-icon"><FaMobileAlt /></div>
                        <h3>Mobile Responsive</h3>
                        <p>Ensuring your website looks and functions perfectly on all devices, from desktops to smartphones.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
