import React from 'react';
import styles from './portfolioItem.module.css';

export default function PortfolioItem({ imageUrl, name, date }) {

    return(
    <>
        <div className={`${styles.portfolioItem}`}>

            <div className={`${styles.PortfolioItem_img}`} 
                style={ {backgroundImage: `url(${imageUrl})`}}></div>

            <div className={`${styles.PortfolioItem_info}`}>
                <span className={`${styles.infoName}`}>{name}</span>
                <span className={`${styles.infoDate}`}>{date}</span>    
            </div>
        
        </div>
    </>
    )
}