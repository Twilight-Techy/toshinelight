import React from 'react';
import { Wrench, Gear, CheckCircle } from 'phosphor-react';
import styles from './CurrentServices.module.css';

const CurrentServices = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Current Operations</h2>
                    <p className={styles.sectionSubtitle}>
                        We are currently fully operational in the following areas, providing top-tier service to our customers.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Service 1 */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Wrench size={40} weight="fill" />
                        </div>
                        <h3 className={styles.cardTitle}>Vehicle Repairs & Maintenance</h3>
                        <p className={styles.cardDesc}>
                            Comprehensive mechanical servicing, diagnostics, and routine vehicle maintenance to ensure reliability, safety, and performance.
                        </p>
                        <ul className={styles.features}>
                            <li><CheckCircle size={18} weight="fill" className={styles.check} /> Diagnostic Scanning</li>
                            <li><CheckCircle size={18} weight="fill" className={styles.check} /> Engine Overhaul</li>
                            <li><CheckCircle size={18} weight="fill" className={styles.check} /> Brake Systems</li>
                            <li><CheckCircle size={18} weight="fill" className={styles.check} /> Suspension Tuning</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Gear size={40} weight="fill" />
                        </div>
                        <h3 className={styles.cardTitle}>ToshineLight Genuine Spare Parts</h3>
                        <p className={styles.cardDesc}>
                            High-quality automotive spare parts and accessories designed to meet recognized automotive quality and performance standards.
                        </p>
                        <ul className={styles.features}>
                            <li><CheckCircle size={18} weight="fill" className={styles.check} /> OEM Standard Parts</li>
                            <li><CheckCircle size={18} weight="fill" className={styles.check} /> Lubricants & Fluids</li>
                            <li><CheckCircle size={18} weight="fill" className={styles.check} /> Electrical Components</li>
                            <li><CheckCircle size={18} weight="fill" className={styles.check} /> Body Accessories</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentServices;
