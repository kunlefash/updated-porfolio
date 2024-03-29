import React from "react";
import "./about.css";
import { FaAward, FaUsers, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5 className="h5_wahala">Get to Know</h5>
      <h2>About Adekunle</h2>
      <div className="container about__container">
        <div className=" about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" />
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>5+ projects completed</small>
            </article>
          </div>
          <p>
            A result-oriented frontend developer passionate about developing
            fully into a Software Engineer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
