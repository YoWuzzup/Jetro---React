import React from 'react';
import styles from './blogItem.module.css';
import blogTheme from "../../img/BlogTheme.png";
import blogInfo from "../../img/BlogInfo.png";
import blogQuote from "../../img/BlogQuote.png";
import blogVideo from "../../img/BlogVideo.png";

export default function BlogItem({ name, imageUrl, date, tags, description, type }) {

    function IconSwitcher(iconType){
        switch (iconType) {
            case 'Theme':
                return `url(${blogTheme})`;
        
            case 'Video':
                return `url(${blogVideo})`;
                    
            case 'Info':
                return `url(${blogInfo})`;

            case 'Quote':
                return `url(${blogQuote})`;

            default:
                return `url(${blogTheme})`;
        };
    };    

    return(
        <div className={`${styles.BlogItemEverything}`}>
            <div className={`${styles.BlogContentImg}`} style={{backgroundImage: `${IconSwitcher(type)}`}}></div>

            <div className={`${styles.BlogItemContent}`}> 

                { imageUrl ? <div className={styles.BlogItemImage} style={ {backgroundImage: `url(${imageUrl})`}}></div> : 
                    '' }

                <div className={`${styles.BlogItemInfo}`}> 

                    <div className={`${styles.BlogItemSideInfo}`}> 
                        <div className={`${styles.BlogItemDate} ${styles.SIMargin}`} >
                            <h3 className={styles.headers}>DATE</h3>
                            { date ? <div className={`${styles.BlogItemDate}`}>{date}</div> : '' }
                        </div>
                        <div className={`${styles.BlogItemTags} ${styles.SIMargin}`} >
                            <h3 className={styles.headers}>TAGS</h3>
                            <div className={styles.tags}>
                                { tags && tags.length > 1 ? tags.map((tag, index) => (
                                    <div key={`${index}`} className={`${styles.BlogItemTag}`}>{tag}</div>
                                ))  : '' }
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.BlogItemDesctiptionInfo}`}> 
                        { name ? <div className={styles.BlogItemName}>{name}</div> : '' }
                        { description ? <div className={styles.BlogItemDescription}>{description}</div> : '' }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}