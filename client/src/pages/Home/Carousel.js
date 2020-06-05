import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import data from "./data.json";
import "./App.css";

class Carousel extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log("New Slide");
      }
    };
    M.Carousel.init(this.Carousel, options);
  }

  renderThis = () => {
    return data.map(i => (
      <a key={i.url} className="carousel-item">
        <img src={i.url} alt="carouselImages" />
      </a>
    ));
  };

  render() {
    return (
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className="carousel"
      >
        {this.renderThis()}
      </div>
    );
  }
}

export default Carousel;