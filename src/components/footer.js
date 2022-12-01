import React from 'react'
import * as footerStyles from "./footer.module.css"


const Footer = () => {
    const year = new Date().getFullYear();
  
    return <p className={footerStyles.footer}>{`Copyright Jeff Salter ${year}`}</p>;
  };
  
  export default Footer;