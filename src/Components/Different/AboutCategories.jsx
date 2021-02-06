import React from 'react';
import styles from './aboutCategories.module.css'

export default function AboutCategories() {
    return(
        <div className={`${styles.AboutContent_sideContent}`}> 

            <div className={`${styles.aboutCategories_title}`}>
                <div className={`${styles.aboutCategories_name}`}>
                    Categories
                </div>
                <span className={`${styles.aboutCategories_titlePicture}`}></span>
            </div>

            <div className={`${styles.AboutCategories_links}`}>
                <span className={`${styles.AboutCategories_link}`}>Video</span>
                <span className={`${styles.AboutCategories_link}`}>Sports</span>
                <span className={`${styles.AboutCategories_link}`}>Media</span>
                <span className={`${styles.AboutCategories_link}`}>Entertainment</span>
                <span className={`${styles.AboutCategories_link}`}>Life</span>
                <span className={`${styles.AboutCategories_link}`}>Super Cool Stuff</span>
            </div>

        </div>
    )
}