import React from 'react';
import styles from './portfolioContent.module.css';
import { PortfolioItem } from '../';
import { useRouteMatch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/actions/filters";

export default function PortfolioContent({portfolioNavigationButtons, setCurrentSort, currentSort,
    portfolioItems, setActiveItems, items}) {
    const { url } = useRouteMatch();

    const handleClick = (index, item) =>{
        // selecting buttons and styling them
        setCurrentSort(index);
        // sorting contend depending on the buttons
        onSelectCategory(item);
    }
    // set the sorting category
    const dispatch = useDispatch();
    const onSelectCategory = itemName =>{
        dispatch(setCategory(itemName));
        let sideItems = [];
        
        itemName === 'all' ? setActiveItems(items) :
            items.map((i)=>(
                i.sortingType === itemName ? (
                    sideItems.push(i),
                    setActiveItems(sideItems) ) : ''
            ))
    }

    return(
    <div className={`${styles.PortfolioContent} wrapper`}>

        <div className={`${styles.PortfolioContent_sortButtons}`} >
            {portfolioNavigationButtons.map((item, index)=>(
                <div onClick={()=> handleClick(index, item)} 
                    className={`${styles.sortButtons} ${currentSort === index ? styles.active : ''}`} 
                    key={`${item}_${index}`}>{item}</div>
            ))}
        </div>

        <div className={`${styles.PortfolioContent_works}`}>
            
            {portfolioItems.map((item, index)=>(
            <Link to={`${url}/${item.id}`} key={`${item.name}_${index}`}>
                <PortfolioItem className={`portfolioItems`}
                             {...item} />
            </Link>
            ))}

        </div>

    </div>
    )
};