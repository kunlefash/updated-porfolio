import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../../src/assets/me.png"
import Socials from './Socials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello there</h5>
        <h1>I am Fasakin Adekunle</h1>
        <h5><div className="text-light">Frontend Developer</div></h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" />

        </div>
        <a href="#contact" className='scroll_down'>End of Page</a>
      </div>
    </header>
  )
}

export default Header