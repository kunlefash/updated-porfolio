import React from 'react'
import "./header.css"
import CTA from "./CTA"
import Socials from './Socials'
import { BiCheck } from "react-icons/bi"

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

        </div>
        <a href="#contact" className='scroll_down'><BiCheck/></a>
      </div>
    </header>
  )
}

export default Header