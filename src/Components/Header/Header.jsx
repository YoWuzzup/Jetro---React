import React from 'react';
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
    const [activeItem, setActiveItem] = React.useState(0);
    const [activelinks] = React.useState([
                   'home', 'aboutus', 'blog', 'portfolio', 'contactus']);
     
    const handleClick = (index)=>{
        setActiveItem(index);
    };

    return( 
        <div className={`${styles.header} wrapper`}>
           
            <Link to='/' 
                  onClick={() => handleClick(0)}>
                <div className={styles.header_logo}>
                    <span className={styles.header_logo_bright}>JET</span>
                    <span className={styles.header_logo_dark}>RO</span>
                </div>
            </Link>

            <nav className={styles.header_nav}>

                {activelinks.map((name, index)=>(
                    <Link to={`/${name !== 'home' ? name : ''}`} key={`${name}_${index}`} 
                        onClick={() => handleClick(index)}>

                        <div key={`${name}_${index}_nav`} 
                            className={`${styles.header_home} ${styles.nav_button} 
                                        ${activeItem === index ? styles.active : '' }`}
                                        >
                            {name}                 
                        </div>

                    </Link>))
                }

            </nav>

        </div>
    )
};