import React from 'react';
import { HeaderName, ContactContent } from '../Components';

export default function ContactUs({ headerName }) {
    return(
    <>
    <HeaderName headerName={headerName}/>
    <div>
        <ContactContent />
    </div>
    </>
    )
};