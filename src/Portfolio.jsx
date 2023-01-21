import React from 'react'
import PortfolioItem from './Portfolio-item'
function Portfolio() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <PortfolioItem image="assets/img/portfolio/cabin.png"></PortfolioItem>

          <PortfolioItem image="assets/img/portfolio/cake.png"></PortfolioItem>
          <PortfolioItem image="assets/img/portfolio/circus.png"></PortfolioItem>

          <PortfolioItem image="assets/img/portfolio/game.png"></PortfolioItem>
          <PortfolioItem image="assets/img/portfolio/safe.png"></PortfolioItem>
          <PortfolioItem image="assets/img/portfolio/submarine.png"></PortfolioItem>

     
        </div>
      </div>
    </section>
  );
}

export default Portfolio