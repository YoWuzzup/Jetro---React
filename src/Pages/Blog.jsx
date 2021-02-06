import React from 'react';
import { HeaderName, BlogContent } from '../Components';
import { useSelector } from "react-redux";

export default function Blog({ headerName }) {
    const [loading, setLoading] = React.useState(false);
    
    const { items } = useSelector(({ itemsReducer }) =>{
        return{
            items: itemsReducer.items
        };
    })

    React.useEffect(()=>{
        items ? setLoading(false) : setLoading(true)
    },[items]);


    // pagination
    const [blogItemsPerPage] = React.useState(4);
    const [currentPage, setCurrentPage] = React.useState(1);
    
    // Get current blog items
    const indexOfLastBlogItem = currentPage * blogItemsPerPage;
    const indexOfFirstBlogItem =  indexOfLastBlogItem - blogItemsPerPage;
    const currentBlogItem = items.slice(indexOfFirstBlogItem, indexOfLastBlogItem);

    // Change page 
    const paginate = pageNumber => setCurrentPage(pageNumber);
   
    // Scrolling top on page click
    const topRef = React.useRef(null);

    function handleClickToTop() {
        topRef.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "start"
        })
    }

    return(
    <div>
        <HeaderName  topRef={topRef} headerName={headerName} />
        <BlogContent blogItems={currentBlogItem} loading={loading} 
                     blogItemsPerPage={blogItemsPerPage} totalBlogItems={items.length}
                     paginate={paginate} currentPage={currentPage} handleClickToTop={handleClickToTop}
                     />
    </div>
    )
};