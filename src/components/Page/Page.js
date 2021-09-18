import React from 'react';

import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

function Page({currentPage}) {
        
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

export default Page;
