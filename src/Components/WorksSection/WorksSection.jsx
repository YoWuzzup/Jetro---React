import React from 'react';
import styles from "./worksSection.module.css";
import SingleWork from "./SingleWork";


export default function WorksSection() {

    return (
        <div className={styles.WorksSection}>
            <div className={`${styles.WorksSectionWrapper} wrapper`}>

                <h1 className={styles.WorksSectionHeader}> RECENT WORKS</h1>

                <div className={styles.WorksSectionBlock}>

                    <SingleWork />
                    <SingleWork />
                    <SingleWork />
                    <SingleWork />
                </div>

            </div>
        </div>
    );
}