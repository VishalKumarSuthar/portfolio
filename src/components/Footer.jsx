import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">Port<span>folio</span></div>
                <div className="social-icons-footer">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-suthar-2bb31b261/" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-link">
                        <FaTwitter />
                    </a>
                </div>
                <small className="footer-rights">© {new Date().getFullYear()} All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
