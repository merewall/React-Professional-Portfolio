// BRING IN REACT MODULE
import React from 'react';

// CONNECT COMPONENTS
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

// PAGE COMPONENT
export default function Page({currentPage}) {
    
    // CONDITIONAL FOR NAVBAR LINKS TO RENDER CORRESPONDING COMPONENTS
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    return <About />;
    
}
