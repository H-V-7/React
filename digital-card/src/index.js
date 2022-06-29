import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Info from './info';
import About from './about';
import Intrests from './intrests';
import Footer from './footer';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className='container'>
      <Info />
      <About />
      <Intrests />
      <Footer />
    </div>
)
