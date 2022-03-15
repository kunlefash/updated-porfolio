import React from 'react'
import "./nav.css"
import {FcHome} from "react-icons/fc"
import {FcAbout} from "react-icons/fc"
import {GrUserExpert} from "react-icons/gr"
import {FcServices} from "react-icons/fc"
import {FcContacts} from "react-icons/fc"

import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
      <nav>
        <a href="#" onClick={() => setActiveNav('#')}className={activeNav==='#' ? 'active' : ''}><FcHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav==="#about" ? "active": ""}><FcAbout/></a>
        <a href="#experience"><GrUserExpert/></a>
        <a href="#services"><FcContacts/></a>
        <a href="#contact"><FcContacts/></a>
      </nav>
    )
}

export default Nav