import React from 'react'
import "./about.css"
import ME from "../../assets/me.png"
import { FaAward, FaUsers, FaFolder } from "react-icons/fa"

const About = () => {
  return (
    <section id= "about">
      <h5 className='h5_wahala'>Get to Know</h5>
      <h2>About Adekunle</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className=" about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>2+ Years Experience</small>
          </article>

          <article className='about_card'>
            <FaUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>Working on that</small>
          </article>

          <article className='about_card'>
            <FaFolder className='about_icon'/>
            <h5>Projects</h5>
            <small>10+ projects completed</small>
          </article>
        </div>
      

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum ipsam molestiae saepe id inventore earum sapiente obcaecati, nesciunt quae quod a dolorem, dolores laudantium deserunt voluptate voluptates ipsum quo!
        </p>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
      </div>
    </div>
    </section>
  )
}

export default About