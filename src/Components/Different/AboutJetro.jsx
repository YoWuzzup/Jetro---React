import React from 'react';
import styles from './aboutJetro.module.css'

export default function AboutJetro() {
    return(
        <div className={`${styles.AboutContent_sideContent}`}> 
            
            <div className={`${styles.aboutJetro_title}`}>
                <div className={`${styles.aboutJetro_name}`}>
                    About Jetro
                </div>
                <span className={`${styles.aboutJetro_titlePicture}`}></span>
            </div>

            <div className={`${styles.aboutJetro_para}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Integer nec odio. Praese nt libero. Sed cursus ante dapibus diam. 
                Sed nisi. Nulla quis sem at nibh elemen tum imperdiet. Duis sagittis ipsum. 
            </div>

        </div>
    )
}