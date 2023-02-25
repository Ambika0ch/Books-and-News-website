import React from 'react';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import './Components/style.css';
import News from './Components/News/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/Contact.js' element={<Contact />} />
          <Route path='/News/News' element={<News />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>





      {/* <News pageSize={3} category="health" /> */}
    </>
  );
}

export default App;
