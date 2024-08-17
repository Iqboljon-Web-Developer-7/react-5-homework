import React, { Component, memo } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/carousel/img-1.jpg";
import img2 from "../../assets/carousel/img-2.jpg";
import img3 from "../../assets/carousel/img-3.jpg";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
    );
  }
}

export default memo(DemoCarousel);
