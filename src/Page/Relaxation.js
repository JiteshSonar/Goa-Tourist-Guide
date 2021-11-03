import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RowCard from "../Components/RowCard";
/* images */
import ubon from "../allimage/relax/ubonThaiSpa.jpg";
import theropy from "../allimage/relax/theropy.jpg";
import Gmap from "../Components/Gmap";

const Relaxation = () => {
  return (
    <div>
      <h2
        class="dark"
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "800",
          fontSize: "4rem",
          padding: "30px",
        }}
      >
        Relax Your Body And Mind
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={ubon}
            name="Ubon Thai Spa"
            heading_line="Ubon Thai spa is the destination for wellness and rejuvebation..."
            info="Ubon Thai spa is the destination for wellness and rejuvebation, Ubon thai spa in calangute is a recognised beauty aps, UBON believes in holistic treatments for detoxing, destressing stimulate and beauty the body and a mind."
            rating={5}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={theropy}
            name="Aline's Beauty Care & Spa"
            heading_line="A Spa and salon combination in candolim goa india"
            info="A Spa and salon combination in candolim goa india. We offer a wide range of treatmens from hair to face to body / beauty to relaxation to rejuvantion. we are a on stop for all that you are looking for to have a better feel."
            rating={4}
            location="north goa"
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Relaxation;
