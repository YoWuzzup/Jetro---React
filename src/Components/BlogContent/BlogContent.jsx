import React from 'react';
import styles from './blogContent.module.css';
import { AboutJetro, AboutCategories, AboutGallery, BlogItem, Pagination } from '../';

export default function BlogContent({ blogItems, loading, blogItemsPerPage, 
                        totalBlogItems, paginate, currentPage, handleClickToTop }) {
                            
    if(loading) return <h2 className={`${styles.loadingHeader}`}>Loading...</h2>;

    return(
        <div className={`${styles.BlogContent}`}>
           
            <div className={`${styles.BlogContentWrapper} wrapper`}>

                <div className={`${styles.BlogContent_mainContent}`}>
                
                    {blogItems.map((item, index) => (
                        <BlogItem key={`${item.name}_${index}`} {...item} />
                    ))}

                </div>

                <div className={`${styles.BlogContent_sideContent}`}>
                    <AboutJetro />
                    <AboutCategories />
                    <AboutGallery />
                </div>
        
            </div>

            <Pagination blogItemsPerPage={blogItemsPerPage} 
                        totalBlogItems={totalBlogItems} paginate={paginate} 
                        currentPage={currentPage} handleClickToTop={handleClickToTop}
            />
            
        </div>
    )
}