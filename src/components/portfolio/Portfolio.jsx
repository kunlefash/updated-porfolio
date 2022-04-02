import React from 'react'
import "./portfolio.css"
import  IMG1 from "../../assets/image1.jpg"
import  IMG2 from "../../assets/image2.jpg"
import  IMG3 from "../../assets/image3.jpg"
import  IMG4 from "../../assets/image4.jpg"
import  IMG5 from "../../assets/image5.jpg"
import  IMG6 from "../../assets/image6.jpg"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='h5_wahala'>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" className='the_images'/>
          </div>
          <h3>Ethereum Transaction Crawler</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/kunlefash" className='btn btn-primary primary' target="_blank">Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" className='the_images' />
          </div>
          <h3>A simple Netflix Clone</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/kunlefash" className='btn btn-primary primary' target="_blank">Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" className='the_images'/>
          </div>
          <h3>A Blockchain Based E-Voting Web App</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/kunlefash" className='btn btn-primary primary' target="_blank">Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" className='the_images'/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/kunlefash" className='btn btn-primary primary' target="_blank">Github</a>
          </div>
        </article>
    
      </div>
    </section>
  )
}

export default Portfolio