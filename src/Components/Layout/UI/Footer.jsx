import React from "react";
import footerContact from "../../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGooglePlay, FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footers = () => {
    const footerIcons = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    };

    return (
        <footer className="footer-section">
            {/* Contact Section */}
            <div className="footer-container grid grid-three-cols">
                {footerContact.map((curData, index) => {
                    const { icon, title, details } = curData;
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">{footerIcons[icon]}</div>
                            <div className="footer-contact-text">
                                <p className="footer-contact-title">{title}</p>
                                <p className="footer-contact-details">{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Links and Download Section */}
            <div className="footer-container footer-links-area grid grid-three-cols">
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/safety">Safety</NavLink></li>
                        <li><NavLink to="/careers">Careers</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="support-links">
                    <h3>Support</h3>
                    <ul>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                        <li><NavLink to="/terms">Terms of Service</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="download-app">
                    <h3>Download Our App</h3>
                    <div className="app-icons">
                        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"><FaGooglePlay /></a>
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer"><FaApple /></a>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="footer-social-media">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-copyright-area">
                <div className="footer-container">
                    <div className="footer-grid grid-two-cols">
                        <p>&copy; 2024, All Rights Reserved. <span className="name">Niranjan Kumar Vishu</span></p>
                        <nav className="footer-menu">
                            <ul>
                                <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                                <li><NavLink to="/terms">Terms of Service</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
