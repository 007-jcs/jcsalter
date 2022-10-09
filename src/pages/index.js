import React from 'react';
import { Link } from 'gatsby';
import "../components/index.css"
import { navigate } from "gatsby"

const index = () => {
  return (
    <header className='hero'>
      <div className='heroContainer'>
        <div className='heroInfo'>
        <h1>Jeff C. Salter</h1>
        <p>Cybersecurity and Information Design</p>
        <button className='heroButton' onClick={()=>{navigate("/about")}}>How We Can Help</button>
        </div>
      </div>
    </header>
  );
}

export default index;
