import React from 'react';
import { NavLink } from 'react-router-dom';
import { CaretRight, ShieldCheck, UsersThree } from 'phosphor-react';
import styles from './AboutTeaser.module.css';

const AboutTeaser = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Why Choose ToshineLight?</h2>
                    <p className={styles.description}>
                        ToshineLight is an emerging automobile company dedicated to providing high-quality vehicle services,
                        genuine spare parts, and dependable maintenance solutions.
                    </p>
                    <p className={styles.subDescription}>
                        Guided by professionalism, innovation, and a customer-first approach, we are building a foundation
                        for a complete automotive ecosystem that grows with your needs.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <ShieldCheck size={32} className={styles.icon} />
                            <div>
                                <h4>Trusted Quality</h4>
                                <p>Genuine parts and certified repairs.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <UsersThree size={32} className={styles.icon} />
                            <div>
                                <h4>Customer First</h4>
                                <p>We prioritize your safety and satisfaction.</p>
                            </div>
                        </div>
                    </div>

                    <NavLink to="/about" className={styles.link}>
                        Discover Our Story <CaretRight />
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default AboutTeaser;
