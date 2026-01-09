import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Lightbulb } from 'phosphor-react';
import styles from './About.module.css';

const values = [
    {
        title: "Professionalism",
        desc: "We adhere to the highest industry standards in every repair and interaction.",
        icon: <Star size={32} />
    },
    {
        title: "Innovation",
        desc: "Constantly evolving with automotive technology to better serve our clients.",
        icon: <Lightbulb size={32} />
    },
    {
        title: "Customer First",
        desc: "Your safety and satisfaction are the driving forces behind everything we do.",
        icon: <Users size={32} />
    }
];

const About = () => {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Our Story</h1>
                    <p className={styles.subtitle}>Driven by passion. Defines by quality.</p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.textBlock}>
                        <h2 className={styles.heading}>Who We Are</h2>
                        <p className={styles.text}>
                            ToshineLight is an emerging automobile company committed to redefining vehicle care and manufacturing.
                            What started as a vision to provide dependable maintenance solutions has grown into a multi-faceted
                            automotive brand.
                        </p>
                        <p className={styles.text}>
                            We serve individual car owners and large-scale businesses alike, offering a blend of technical expertise
                            and genuine care. As we expand into manufacturing and training, our core mission remains unchanged:
                            to keep you moving forward with confidence.
                        </p>
                    </div>

                    <div className={styles.valuesGrid}>
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className={styles.valueCard}
                            >
                                <div className={styles.iconBox}>{val.icon}</div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
