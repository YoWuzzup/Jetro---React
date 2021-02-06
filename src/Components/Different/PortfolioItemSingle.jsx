import React from 'react';
import styles from './portfolioItemSingle.module.css';
import { useParams } from "react-router-dom";

export default function PortfolioItemSingle({ portfolioItems }) {
    const { portId } = useParams();
    const portItem = portfolioItems.find((p) => p.id === Number(portId));
    let productData;

    if (portItem) {
        productData = (
            <div className={`${styles.portfolioItemSingle} wrapper`}>
            <div className={`${styles.portfolioItem}`}>
               
                <div className={`${styles.PortfolioItem_img}`} 
                    style={ {backgroundImage: `url(${portItem.imageUrl})`}} />
                
                <p className={`${styles.PortfolioItem_para}`}>{portItem.description}</p>
            
            </div>
            </div>
        );
      } else {
        productData = <h2>Sorry. The item doesn't exist</h2>;
      }

    return(
        <>
        {productData}
        </>
    )
}