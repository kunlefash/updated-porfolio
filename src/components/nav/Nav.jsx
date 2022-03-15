import React from 'react'
import "./nav.css"
import {FcHome} from "react-icons/fc"
import {FcAbout} from "react-icons/fc"
import {GrUserExpert} from "react-icons/gr"
import {FcServices} from "react-icons/fc"
import {FcContacts} from "react-icons/fc"

const Nav = () => {
  return (
      <nav>
        <a href="#"><FcHome/></a>
        <a href="#about"><FcAbout/></a>
        <a href="#experience"><GrUserExpert/></a>
        <a href="#services"><FcContacts/></a>
        <a href="#contact"><FcContacts/></a>
      </nav>
    )
}

export default Nav