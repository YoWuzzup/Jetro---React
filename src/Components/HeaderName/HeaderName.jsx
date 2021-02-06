import React from 'react';
import styles from "./headerName.module.css";
import { useParams } from "react-router-dom";

export default function HeaderName({ topRef, headerName, blogItems }) {
    const { portId } = useParams();

    const titleItemName = () =>{
        return (
            blogItems.map((item, index)=>(item.id === Number(portId) ?
                <span key={`${item}_${index}`} 
                    className={`${styles.headerName_spans}`}
                >
                    {item.name}
                </span> : '' )))
    }

    const hName = () =>{
        return (headerName instanceof Array ? 
            headerName.map((name, index)=>(
                <span key={`${name}_${index}`} 
                    className={`${styles.headerName_spans}`}
                >
                    {name}
                </span>)) : headerName)
    }

    return( 
        <div className={`${styles.headerName}`}  ref={topRef}>
            <div className={`wrapper`}>
            
                <div className={`${styles.headerName_name}`}>
                    {blogItems ? titleItemName() : hName()}
                </div>

            </div>
        </div>
    )
};