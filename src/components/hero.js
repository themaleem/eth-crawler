import React from "react";

const Hero = () => {
  return (
    <section className="hero-section py-3 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 pt-3 mb-5 mb-lg-0">
            <h1 className="site-headline font-weight-bold mb-3 text-dark">
              Your 1-stop place for everything{" "}
              <span className="hero-fancy-text">Ethereum</span>
            </h1>
            <div className="site-tagline mb-4">
              Designed for small business owners, and entrepreneurs
            </div>
          </div>
          <div className="col-12 col-lg-6 d-lg-block d-none  text-center">
            <img className="img-fluid" src="/img/side-image.img" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
