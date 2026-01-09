import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gear } from 'phosphor-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>

            {/* Background - In a real app, this would be a video or high-res image */}
            <div className={styles.background}>
                <div className={styles.gradient}></div>
            </div>

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.textContent}
                >
                    <h2 className={styles.subtitle}>Welcome to ToshineLight</h2>
                    <h1 className={styles.title}>
                        The Future of <br />
                        <span className={styles.highlight}>Automotive Excellence</span>
                    </h1>
                    <p className={styles.description}>
                        Experience top-tier vehicle repairs, genuine spare parts, and a vision for the future of mobility.
                        Precision engineering meets customer-first service.
                    </p>

                    <div className={styles.actions}>
                        <motion.button
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Service <ArrowRight weight="bold" />
                        </motion.button>
                        <motion.button
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Parts <Gear weight="bold" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll to Explore</span>
                <div className={styles.line}></div>
            </div>
        </section>
    );
};

export default Hero;
