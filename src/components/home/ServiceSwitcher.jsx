import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Gear, ArrowRight } from 'phosphor-react';
import styles from './ServiceSwitcher.module.css';

const services = {
    repairs: {
        title: "Vehicle Repairs & Maintenance",
        description: "Comprehensive mechanical servicing, diagnostics, and routine vehicle maintenance to ensure reliability, safety, and performance.",
        icon: <Wrench size={32} />,
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Mechanic/Shop
        features: ["Diagnostic Scans", "Engine Service", "Brake Systems", "Routine Maintenance"]
    },
    parts: {
        title: "Genuine Spare Parts",
        description: "High-quality automotive spare parts and accessories designed to meet recognized automotive quality and performance standards.",
        icon: <Gear size={32} />,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Car Parts/Engine
        features: ["OEM Standards", "Engine Components", "Body Parts", "Accessories"]
    }
};

const ServiceSwitcher = () => {
    const [activeTab, setActiveTab] = useState('repairs');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Our Core Operations</h2>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'repairs' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('repairs')}
                        >
                            <Wrench size={20} weight="fill" /> Repairs
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'parts' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('parts')}
                        >
                            <Gear size={20} weight="fill" /> Spare Parts
                        </button>
                    </div>
                </div>

                <div className={styles.contentArea}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className={styles.card}
                        >
                            <div className={styles.imageCol}>
                                <img src={services[activeTab].image} alt={services[activeTab].title} className={styles.image} />
                                <div className={styles.iconOverlay}>
                                    {services[activeTab].icon}
                                </div>
                            </div>
                            <div className={styles.textCol}>
                                <h3 className={styles.cardTitle}>{services[activeTab].title}</h3>
                                <p className={styles.cardDesc}>{services[activeTab].description}</p>
                                <ul className={styles.featureList}>
                                    {services[activeTab].features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>{feature}</li>
                                    ))}
                                </ul>
                                <button className={styles.learnMoreBtn}>
                                    Learn More <ArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ServiceSwitcher;
