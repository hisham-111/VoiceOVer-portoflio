import React, { useState } from "react";
import Data from "./working-data";
import ScrollCarousel from "scroll-carousel-react";

import "./index.css";
function Worked() {
  const [workingData, setworkingData] = useState(Data);
  return (
    <div className="carousel-working-box">
      <ScrollCarousel
        autoplay
        autoplaySpeed={8000}
        speed={8000}
        // onReady={() => console.log("I am ready")}>
        >
        {workingData.map((item, id) => (
          <div key={id}>
            <img
              className="working-img"
              src={item.image}
              alt={item.alt}
              width="90"
              height="90"
            />
          </div>
        ))}
      </ScrollCarousel>
      <div className="title-carousel">I worked on Projects For</div>
    </div>
  );
}

export default Worked;
