import React from 'react';
import { motion } from 'framer-motion';
import styles from './InnovationHero.module.css';

const InnovationHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.gridOverlay}></div>
            <div className={styles.content}>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={styles.tag}
                >
                    Vision 2030
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.title}
                >
                    Redefining <span className={styles.gradientText}>Mobility</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className={styles.subtitle}
                >
                    From service to manufacturing. We are engineering the next generation of African automotive excellence.
                </motion.p>
            </div>
        </section>
    );
};

export default InnovationHero;
