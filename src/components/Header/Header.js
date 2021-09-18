import React from 'react';
import Navigation from '../Navigation/Navigation';
import './header.css'


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