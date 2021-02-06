import React from 'react';
import styles from "./pagination.module.css";

export default function Pagination({ blogItemsPerPage, totalBlogItems, paginate, currentPage, handleClickToTop }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogItems / blogItemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <ul className={`${styles.pagination}`}>
            {pageNumbers.map((item, index)=>(
                <li key={`${index}`} className={ currentPage === index + 1 ? 
                    `${styles.page} ${styles.active}` : `${styles.page}`} 
                    onClick={()=> {paginate(item); handleClickToTop();}}>
                    {item}
                </li>
            ))}
        </ul>
    )
};