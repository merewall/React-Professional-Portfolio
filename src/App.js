// BRING IN REACT AND USESTATE MODULES
import React, { useState } from 'react';
// CONNECT COMPONENTS AND STYLESHEET TO APP
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Page from './components/Page/Page'
import './index.css'

// APP COMPONENT
export default function App() {

  // SET STATE FOR CURRENT PAGE, DEFAULT IS ABOUT ME PAGE
  const [currentPage, setCurrentPage] = useState('About')

  // APP COMPONENT IS A HEADER, PAGE CONTENTS AND FOOTER
  return (
    <div>
      <Header  currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Page currentPage={currentPage}/>
      <Footer />
    </div>
  );
}
