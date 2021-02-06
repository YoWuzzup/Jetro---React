import React from 'react';
import styles from './aboutGallery.module.css'

export default function aboutGallery() {
    return(
        <div className={`${styles.AboutContent_sideContent}`}> 

            <div className={`${styles.aboutGallery_title}`}>
                <div className={`${styles.aboutGallery_name}`}>
                    Photo Gallery
                </div>
                <span className={`${styles.aboutGallery_titlePicture}`}></span>
            </div>

            <div className={`${styles.aboutGallery_works}`}>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
                <img alt='img' className={`${styles.aboutGallery_work}`}></img>
            </div>

        </div>
    )
}