import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../App.css";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        area: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        if (!formData.message) errors.message = "Message is required.";
        if (!formData.area) errors.area = "Please select your area.";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length) {
            setFormErrors(errors);
            return;
        }

        console.log('Form submitted:', formData);
        setFormSubmitted(true);
        setFormErrors({});
        setFormData({ name: '', email: '', message: '', area: '' });
    };

    return (
        <div className="contact-page">
            <h1 className="contact-heading">Aamcha Auto - Get in Touch!</h1>
            <div className="contact-logo-container">
                <img src="/images/logo1.png" alt="Aamcha Auto Logo" className="contact-logo" />
            </div>

            <h2 className="contact-about-subheading">We'd Love to Hear From You!</h2>
            <div className="contact-about-features-grid">
                {/* Contact feature boxes */}
                <div className="contact-about-feature-box">
                    <FaEnvelope className="contact-about-icon" />
                    <h3 className="contact-about-feature-title">Email Us</h3>
                    <p>If you have any questions or inquiries, feel free to reach out!</p>
                    <p>Email: <a href="mailto:info@aamchauto.com">info@aamchauto.com</a></p>
                </div>

                <div className="contact-about-feature-box">
                    <FaPhone className="contact-about-icon" />
                    <h3 className="contact-about-feature-title">Call Us</h3>
                    <p>Our support team is here to assist you.</p>
                    <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
                </div>

                <div className="contact-about-feature-box">
                    <FaMapMarkerAlt className="contact-about-icon" />
                    <h3 className="contact-about-feature-title">Visit Us</h3>
                    <p>1234 Aamcha Auto Lane, Auto City, AC 56789</p>
                </div>

                <div className="contact-about-feature-box">
                    <FaClock className="contact-about-icon" />
                    <h3 className="contact-about-feature-title">Operating Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>

                <div className="contact-about-feature-box">
                    <h3 className="contact-about-feature-title">Follow Us</h3>
                    <p>
                        <FaFacebook className="contact-about-icon" />
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <FaTwitter className="about-icon" />
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <FaInstagram className="about-icon" />
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </p>
                </div>
            </div>

            <div className="contact-form-container">
                <div className="contact-form">
                    <h2>Contact Us Directly</h2>
                    {formSubmitted ? (
                        <div className="thank-you-message">
                            <h3>Thank You!</h3>
                            <p>Your message has been sent. We will get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.name && <p className="error-message">{formErrors.name}</p>}

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.email && <p className="error-message">{formErrors.email}</p>}

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {formErrors.message && <p className="error-message">{formErrors.message}</p>}

                            <select
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Your Area</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Jamshedpur">Jamshedpur</option>
                                <option value="Dhanbad">Dhanbad</option>
                                <option value="Bokaro">Bokaro</option>
                                <option value="Giridih">Giridih</option>
                            </select>
                            {formErrors.area && <p className="error-message">{formErrors.area}</p>}

                            <button type="submit">Send Message</button>
                        </form>
                    )}
                </div>

                <div className="contact-map-container">
                    <h2>Find Us Here</h2>
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2437943846066!2d85.2912!3d23.6102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1c9f5d7f40137%3A0x7f1b1be1f70d6db7!2sJharkhand%2C%20India!5e0!3m2!1sen!2sus!4v1632058809697!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
