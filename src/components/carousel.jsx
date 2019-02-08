import React, { Component } from "react";

const CarouselFP = () => {
  return (
    // <div  className="carousel-container">
    //   <div className="carousel slide carousel-fade" data-ride="carousel">
    //     <div className="carousel-inner">
    //       <div className="carousel-item active" data-interval="5000">
    //         <img
    //           src="https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
    //           className="d-block w-100"
    //           alt="first-carousel-pic"
    //         />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h2 className="">Welcome to Rolling Wok</h2>
    //           <p>Currently under construction...</p>
    //         </div>
    //       </div>
    //       <div className="carousel-item" data-interval="5000">
    //         <img
    //           src="https://images.unsplash.com/photo-1504670555658-db8fb2e908ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //           className="d-block w-100"
    //           alt="second-carousel-pic"
    //         />
    //       </div>
    //       <div className="carousel-item" data-interval="5000">
    //         <img
    //           src="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=758&q=80"
    //           className="d-block w-100"
    //           alt="third-carousel-pic"
    //         />
    //       </div>
    //     </div>
    //     <a
    //       className="carousel-control-prev"
    //       href="#carouselExampleInterval"
    //       role="button"
    //       data-slide="prev"
    //     >
    //       <span className="carousel-control-prev-icon" aria-hidden="true" />
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a
    //       className="carousel-control-next"
    //       href="#carouselExampleInterval"
    //       role="button"
    //       data-slide="next"
    //     >
    //       <span className="carousel-control-next-icon" aria-hidden="true" />
    //       <span className="sr-only">Next</span>
    //     </a>
    //   </div>
    // </div>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="landing-text">Welcome to Rolling Wok</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1504670555658-db8fb2e908ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=758&q=80"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselFP;
