import React from 'react';
import { HeaderName, AboutContent } from '../Components';

export default function AboutUs({ headerName }) {
    return(
    <div>
        <HeaderName headerName={headerName}/>
        <AboutContent />
    </div>
    )
};