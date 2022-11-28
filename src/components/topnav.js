import React from 'react'
import { Link } from "gatsby"
import * as topStyles from "./topnav.module.css"

const Topnav = () => {
  return (
    <div className={topStyles.navWrapper} >
        <div className={topStyles.mainNav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery Page</Link>
        </div>
    </div>
  )
}

export default Topnav