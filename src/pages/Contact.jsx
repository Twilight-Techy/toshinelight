import React from 'react';
import { WhatsappLogo, EnvelopeSimple, MapPin } from 'phosphor-react';
import styles from './Contact.module.css';

const Contact = () => {
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
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <h3 className={styles.formTitle}>Send us a message</h3>
                            <div className={styles.inputGroup}>
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email</label>
                                <input type="email" placeholder="your@email.com" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can we help?" className={styles.textarea}></textarea>
                            </div>
                            <button className={styles.submitBtn}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
