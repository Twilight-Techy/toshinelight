import React, { useState } from 'react';
import { WhatsappLogo, EnvelopeSimple, MapPin, PaperPlaneRight, Spinner } from 'phosphor-react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const apiUrl = import.meta.env.VITE_API_URL;

        if (!apiUrl || apiUrl.includes('localhost')) {
            // Simulate sending if no real API is connected
            setTimeout(() => {
                console.log('Form Data:', formData);
                console.log('Target API:', apiUrl);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, 1000);
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.infoCol}>
                        <h1 className={styles.heading}>Get in Touch</h1>
                        <p className={styles.subtext}>
                            Have a question or need to book a service? We are here to help.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <EnvelopeSimple size={24} className={styles.icon} />
                                <span>toshinelightt@gmail.com</span>
                            </div>
                            <div className={styles.contactItem}>
                                <MapPin size={24} className={styles.icon} />
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>

                        <div className={styles.separator}></div>

                        <a
                            href="https://wa.me/2349167864104"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            <WhatsappLogo size={24} weight="fill" />
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div className={styles.formCol}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <h3 className={styles.formTitle}>Send us a message</h3>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    className={styles.input}
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    className={styles.input}
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    placeholder="How can we help?"
                                    className={styles.textarea}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button className={styles.submitBtn} disabled={status === 'sending'}>
                                {status === 'sending' ? (
                                    <>Sending... <Spinner className={styles.spin} /></>
                                ) : status === 'success' ? (
                                    'Message Sent!'
                                ) : (
                                    <>Send Message <PaperPlaneRight weight="fill" /></>
                                )}
                            </button>
                            {status === 'error' && (
                                <p className={styles.errorMsg}>Something went wrong. Please try again or use WhatsApp.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
