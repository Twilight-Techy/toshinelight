import React from 'react';
import { NavLink } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, WhatsappLogo, EnvelopeSimple } from 'phosphor-react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brandCol}>
                        <div className={styles.logoRow}>
                            <img src={logo} alt="ToshineLight" className={styles.logo} />
                            <span className={styles.brandName}>ToshineLight</span>
                        </div>
                        <p className={styles.tagline}>
                            Building the foundation for a complete automotive ecosystem.
                        </p>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Quick Links</h4>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/operations">Operations</NavLink>
                        <NavLink to="/expansion">Innovation</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                    </div>

                    <div className={styles.contactCol}>
                        <h4>Contact</h4>
                        <a href="mailto:toshinelightt@gmail.com" className={styles.contactLink}>
                            <EnvelopeSimple size={20} />
                            toshinelightt@gmail.com
                        </a>
                        <div className={styles.socials}>
                            <a href="https://facebook.com/Toshinelight" target="_blank" rel="noopener noreferrer">
                                <FacebookLogo size={24} weight="fill" />
                            </a>
                            <a href="https://www.instagram.com/toshinelight" target="_blank" rel="noopener noreferrer">
                                <InstagramLogo size={24} weight="fill" />
                            </a>
                            <a href="https://wa.me/2349167864104" target="_blank" rel="noopener noreferrer">
                                <WhatsappLogo size={24} weight="fill" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} ToshineLight. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
