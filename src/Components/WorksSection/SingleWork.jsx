import React from 'react';
import styles from "./singleWork.module.css";
import WorkImg from "../../img/RecentWorkImg.png";

export default function SingleWork() {
    
    return(
        <div className={styles.SingleWork}>
        
            <img alt='work' className={styles.WorkImg} src={`${WorkImg}`}/>

            <div className={styles.WorkInfo}>
                <div className={styles.WorkName}>CHARACTER DESIGN</div>
                <div className={styles.WorkDate}>10.10.2020</div>
            </div>

        </div>
    )
}