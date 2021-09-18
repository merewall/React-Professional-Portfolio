import React, { useState } from 'react';
// import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Page from './components/Page/Page'
import './index.css'


function App() {

  const [currentPage, setCurrentPage] = useState('About')

  return (
    <div>
      <Header  currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Page currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
