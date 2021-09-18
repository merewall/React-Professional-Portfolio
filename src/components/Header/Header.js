// BRING IN REACT MODULE
import React from 'react';

// CONNECT NAVIGATION COMPONENT AND STYLESHEET
import Navigation from '../Navigation/Navigation';
import './header.css'

// HEADER COMPONENT WITH PROPS
export default function Header({currentPage, setCurrentPage}) {
  return (
    <header>
      <div className="header-opacity">
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />      
        <h1>Meredith Wall</h1>
      </div>
    </header>
  );
}