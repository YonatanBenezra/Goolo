import React from "react";
import Flickity from "react-flickity-component";
import "../../Recommendations/Flickity.css";

function Carousel() {
  return (
    <Flickity>
      <img class='recommendedImg' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />
      <img class='recommendedImg' alt='img' src="https://images.asos-media.com/products/asos-design-spray-on-jeans-with-power-stretch-in-light-wash-blue/21222765-1-lightwashblue" />

    </Flickity>
  );
}

export default function RecommendedBag2() {
  return (
    <div>
      <p>Recommended Pants</p>
    <div className="PantsFlickity">
      <Carousel />
    </div>
    </div>
  );
}