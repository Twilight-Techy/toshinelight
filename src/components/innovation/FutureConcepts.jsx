import React from 'react';
import { motion } from 'framer-motion';
import { Storefront, Factory, Car } from 'phosphor-react';
import styles from './FutureConcepts.module.css';

const concepts = [
    {
        title: "Vehicle Manufacturing",
        desc: "Production of vehicles built to meet modern safety and durability standards.",
        icon: <Factory size={32} />
    },
    {
        title: "Dealership Network",
        desc: "Authorized sales and distribution partners across the region.",
        icon: <Storefront size={32} />
    },
    {
        title: "Leasing & Mobility",
        desc: "Flexible rental solutions for individuals and fleet customers.",
        icon: <Car size={32} />
    }
];

const FutureConcepts = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {concepts.map((concept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15 }}
                            className={styles.card}
                        >
                            <div className={styles.iconBox}>{concept.icon}</div>
                            <h3 className={styles.cardTitle}>{concept.title}</h3>
                            <p className={styles.cardDesc}>{concept.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureConcepts;
