import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.message) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            // Simulate form submission
            console.log("Form Submitted", formData);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <section className="contact-section section">
            <div className="container">
                <h2 className="section-title">Contact <span>Me</span></h2>

                <div className="contact-container">
                    <div className="contact-info glass">
                        <h3>Get In Touch</h3>
                        <p>Feel free to reach out for collaborations or just a friendly hello!</p>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <span>email@example.com</span>
                        </div>
                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <span>+123 456 7890</span>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <span>New York, USA</span>
                        </div>

                        {/* Map Placeholder */}
                        <div className="map-placeholder glass">
                            <p>Google Map Placeholder</p>
                        </div>
                    </div>

                    <form className="contact-form glass" onSubmit={handleSubmit}>
                        <h3>Send Message</h3>
                        {isSubmitted && <div className="success-msg">Message Sent Successfully!</div>}

                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                            ></textarea>
                            {errors.message && <span className="error-text">{errors.message}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
