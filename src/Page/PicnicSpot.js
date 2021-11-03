import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RowCard from "../Components/RowCard";

/* images */
import dona from "../allimage/Picnic spots/dona paula beach3.jpg";
import chapora from "../allimage/Picnic spots/chapora fort.jpg";
import mayem from "../allimage/Picnic spots/mayem-lake.jpg";
import spice from "../allimage/Picnic spots/spice garden.jpeg";
import cansaulim from "../allimage/Picnic spots/casaulim monte.jfif";
import dudhsagar from "../allimage/Picnic spots/dudhsagar.jpg";
import kakolem from "../allimage/Picnic spots/kakolem beach.jfif";
import bondla from "../allimage/Picnic spots/bondla wildlife sanctuary.jpg";
import palolem from "../allimage/Picnic spots/palolim beach2.jpg";
import Gmap from "../Components/Gmap";

const PicnicSpot = () => {
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
        Picnic Spot in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={dona}
            name="Dona Paula Beach"
            heading_line="Amazing place to spend some good time. situated in north Goa"
            info="Located 7 kilometers from Panaji, Dona Paula, also known as Lover’s Paradise is frequented by many tourists. This blue and tranquil spot.. "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={chapora}
            name="Chorla-Ghat"
            heading_line="Chorla Ghat is an Indian nature destination, locate.."
            info="Once a vast, commanding structure, the site of many battles, passed from the hands of the Portuguese to the Indians and back several..."
            rating={4}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={mayem}
            name="Mayem Lake"
            heading_line="Mayem Lake, also known as Maya Lake, is located in Mayem, near Bicholim, North Goa."
            info=" Mayem Lake, also known as Maya Lake, is located in Mayem, near Bicholim, North Goa. It’s a lovely freshwater lake and a favorite picnic..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={spice}
            name="Spice Garden"
            heading_line="Neo Majestic Hotelaberdeen, Alto- Betim Porvorim, Bardez, Goa"
            info="A tour of the Spice Garden is always recommended for tourists in Goa. Here you can see various spices and herbs, the medicinal... "
            rating={5}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={cansaulim}
            name="Cansaulim Monte"
            heading_line="Cansaulim is a small village located in the southern part of Goa."
            info="Cansaulim is a small village located in the southern part of Goa. It is perched on the top of a hill on the coast of South Goan... "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={dudhsagar}
            name="Dudhsagar Waterfalls"
            heading_line="Dudhsagar Waterfalls is a four-stage waterfall on the Mandovi River"
            info="Dudhsagar Waterfalls is a four-stage waterfall on the Mandovi River. It derives its name from the foam formed by the gushing... "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={kakolem}
            name="Kakolem Beach"
            heading_line="Kakolem Beach is one of Goa’s most remote and beautiful beaches."
            info="Kakolem Beach is one of Goa’s most remote and beautiful beaches. Despite being secluded with a relatively small crowd, which makes..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={bondla}
            name="Bondla Wildlife Sanctuary"
            heading_line="Bondla Wildlife Sanctuary is the smallest wildlife sanctuary in Goa and one of Goa’s most popular tourist attractions."
            info="Bondla Wildlife Sanctuary is the smallest wildlife sanctuary in Goa and one of Goa’s most popular tourist attractions. Besides seeing..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={palolem}
            name="Palolem Beach"
            heading_line="Palolem Beach is a stretch of white sand on a bay in Goa, South India"
            info="Located in Canacon in southern Goa, Palolem Beach is a natural bay. It is nestled between lofty headlands and lined with coconut palms... "
            rating={5}
            location=""
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default PicnicSpot;
