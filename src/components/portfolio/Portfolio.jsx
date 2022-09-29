import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/image1.jpg";
import IMG2 from "../../assets/image2.jpg";
import IMG3 from "../../assets/image3.jpg";
import IMG4 from "../../assets/image4.jpg";
import IMG5 from "../../assets/image5.jpg";
import IMG6 from "../../assets/image6.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="h5_wahala">My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" className="the_images" />
          </div>
          <h3>Ethereum Transaction Crawler</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://63315e48b1a933558c3b32fe--eth-crawler.netlify.app/"
              className="btn btn-primary primary"
              target="_blank"
            >
              Click Here
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" className="the_images" />
          </div>
          <h3>A simple Netflix Clone</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/kunlefash/Netflix-React"
              className="btn btn-primary primary"
              target="_blank"
            >
              Click Here
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" className="the_images" />
          </div>
          <h3>A Calendar App </h3>
          <div className="portfolio_item-cta">
            <a
              href="https://calendar-5mhfjacdm-kunlefash.vercel.app/"
              className="btn btn-primary primary"
              target="_blank"
            >
              Click Here
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" className="the_images" />
          </div>
          <h3>A Simple Video Chat App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://video-chat-fr9spqofl-kunlefash.vercel.app/"
              className="btn btn-primary primary"
              target="_blank"
            >
              Click Here
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
