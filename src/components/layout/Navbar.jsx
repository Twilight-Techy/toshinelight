import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { List, X, Sun, Moon } from 'phosphor-react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Operations', path: '/operations' },
        { name: 'Innovation', path: '/expansion' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <NavLink to="/" className={styles.logoContainer}>
                    <img src={logo} alt="ToshineLight" className={styles.logo} />
                    <span className={styles.brandName}>ToshineLight</span>
                </NavLink>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `${styles.navLink} ${isActive ? styles.active : ''}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className={styles.mobileActions}>
                    <button onClick={toggleTheme} className={styles.mobileThemeToggle}>
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={32} /> : <List size={32} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
