import React from "react";
import "../CSS/Gmap.css";

function Gmap({ maplink }) {
  return (
    <div>
      <div className="contact-map mt-60">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src={maplink}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Gmap;
/* https://maps.google.com/maps?q=Mission%20District%2C%20San%20moborbeach%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed */
