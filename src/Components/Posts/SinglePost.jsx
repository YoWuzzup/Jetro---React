import React from "react";
import styles from './singlePost.module.css';
import ButtonMore from '../Buttons/ButtonMore';

export default function SinglePost(){
    return(
        <div className={`${styles.Post}`}>
                
            <h1 className={styles.postHeader}>Check my latest portfolio items</h1>

            <div className={styles.postPara}>
                Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. 
                Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. 
                Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. 
                Aenean sodales nibh non lectus tempor a interdum justo ultricies.
            </div>

            <ButtonMore />

        </div>
    )
};