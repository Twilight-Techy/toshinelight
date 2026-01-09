import React from 'react';
import { motion } from 'framer-motion';
import { Student, PaintBrush, Car, TrendUp } from 'phosphor-react';
import styles from './Roadmap.module.css';

const roadmapData = [
    {
        title: "Automotive Training",
        description: "Hands-on technical training and skills development in automotive repairs, diagnostics, and modern vehicle systems.",
        icon: <Student size={24} />,
        status: "Coming Soon"
    },
    {
        title: "Auto Body & Paint",
        description: "Professional bodywork, refinishing, and collision repair services using modern tools and industry best practices.",
        icon: <PaintBrush size={24} />,
        status: "Coming Soon"
    },
    {
        title: "Vehicle Manufacturing",
        description: "Design, engineering, and production of vehicles built to meet modern safety, durability, and performance requirements.",
        icon: <Car size={24} />,
        status: "Future Plan"
    },
    {
        title: "Global Expansion",
        description: "Vehicle Sales, Leasing, and large-scale Spare Parts distribution networks.",
        icon: <TrendUp size={24} />,
        status: "Future Plan"
    }
];

const Roadmap = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Roadmap for the Future</h2>
                    <p className={styles.sectionSubtitle}>
                        Our vision extends beyond today. Here is what we are building for tomorrow.
                    </p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.line}></div>

                    {roadmapData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                        >
                            <div className={styles.content}>
                                <div className={styles.badge}>{item.status}</div>
                                <div className={styles.iconBox}>{item.icon}</div>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemDesc}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
