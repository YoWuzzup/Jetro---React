import React from "react";
import styles from './postsSection.module.css';
import SinglePost from './SinglePost';

export default function Posts(){
    return(
        <div className={`${styles.PostsSection} wrapper`}>
                
                <SinglePost />
                <SinglePost />
                <SinglePost />

            </div>
    )
};