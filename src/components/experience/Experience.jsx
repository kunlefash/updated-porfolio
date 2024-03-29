import React from "react";
import "./experience.css";
import { BsBookmarkCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5 className="h5_wahala">Skills</h5>
      <div className="container experience_container">
        <div className="container frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="container backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>Node Js</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>Express Js</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>REST API</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsBookmarkCheckFill className="experience_details-icon" />
              <div>
                <h4>GRAPHQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
