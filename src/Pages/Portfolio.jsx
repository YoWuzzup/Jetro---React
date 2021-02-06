import React from 'react';
import { HeaderName, PortfolioContent } from '../Components';
import { useRouteMatch, Route } from "react-router-dom";
import PortfolioItemSingle from '../Components/Different/PortfolioItemSingle';
import { useSelector } from "react-redux";

export default function Portfolio({ headerName }) {
    const [currentSort, setCurrentSort] = React.useState(0);
    const [portfolioNavigationButtons] = React.useState(['all', 'print', 'web', 'photoshop', 'wordpress']);
    const { url } = useRouteMatch();
    
    const { items } = useSelector(({ itemsReducer }) =>{
        return{
            items: itemsReducer.items,
        };
    });
    const [activeItems, setActiveItems] = React.useState(items);
    
    return(
    <div>
        
        <Route path={`${url}/:portId`}>
            <HeaderName blogItems={items}/>
            <PortfolioItemSingle portfolioItems={items} />
        </Route>

        <Route exact path={url}>
            <HeaderName headerName={headerName}/>
            <PortfolioContent portfolioNavigationButtons={portfolioNavigationButtons}
                setCurrentSort={setCurrentSort} currentSort={currentSort} portfolioItems={activeItems}
                setActiveItems={setActiveItems} items={items}
            />
        </Route>

    </div>
    )
};