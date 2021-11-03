import React from "react";
import RowCard from "../Components/RowCard";
import "bootstrap/dist/css/bootstrap.min.css";

/* images */
import mahadev from "../allimage/religiuos/mahadeva temple.jpeg";
import mahalsa from "../allimage/religiuos/mahalsa temple.jpeg";
import rudreshwar from "../allimage/religiuos/rudratemple.jpeg";
import lady from "../allimage/religiuos/ourladyoftheimmconception.jpg";
import alex from "../allimage/religiuos/st.alex.jpeg";
import deus from "../allimage/religiuos/mae de deus chuch.jpeg";
import cajetan from "../allimage/religiuos/church of st.cajeton.jpeg";
import ganeshpuri from "../allimage/religiuos/ganeshpuri teml.jpeg";
import mahalaxmi from "../allimage/religiuos/mahalaxmi temple.jpeg";
import Gmap from "../Components/Gmap";
import { Link } from "react-router-dom";

const Religion = () => {
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
        Religion in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={mahadev}
            name="Mahadeva Temple"
            heading_line="Mahadeva Temple, Tambdi Surla is a 12th-century Shaivite temple"
            info="The temple is dedicated to Lord Shiva and is reminiscent of the temples at Aihole in neighbouring Karnataka. There is a linga (symbo"
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <Link to="/mahalsa">
            <RowCard
              image={mahalsa}
              name="Mahalsa Temple"
              heading_line="Shri Mahalasa Narayani’s temple at Mardol in the West coastal"
              info="Shri Mahalasa Narayani’s temple at Mardol in the West coastal state of Goa in India needs no introduction to Shri Mahalasa’s Kulavis and other devotees. This is Her most well-known temple and even"
              rating={4}
              location=""
            />
          </Link>
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={rudreshwar}
            name="Shree Rudreshwar Temple"
            heading_line="The Shree Rudreshwar Temple is newly built on the site"
            info="The temple of Rudreshwar is located in the Bicholim Taluka at a distance of 45 kms from Panaji. Shri Rudreshwar Temple is newly built on the site"
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={lady}
            name="Our Lady Of The Immaculate conception"
            heading_line="The Our Lady of the Immaculate Conception Church is located in Panjim"
            info="The temple of Rudreshwar is located in the Bicholim Taluka at a distance of 45 kms from Panaji. Shri Rudreshwar Temple is newly built on the site of an ancient site and is a"
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={alex}
            name="st. Alex Church"
            heading_line="St. Alex church is situated in Calangute and famous among locals"
            info="The existing church was built in 1741 by the Communidades (village communities) with the help of donations. The towers were erected in 1765. "
            rating={4}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={deus}
            name="Mae De Deus Church"
            heading_line="St. Cajetan's Church ... Undisputedly one of the most beautiful churches in Goa"
            info="St. Cajetan Church, also known as the Church of Divine Providence, is a church of the Roman Catholic Archdiocese of Goa and Daman located in Old Goa. The church was completed in 1661 "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={ganeshpuri}
            name="Ganeshpuri Temple"
            heading_line="the Ganeshpuri Temple is a fine example of the union of the people of Ganeshpuri."
            info="Established in 1993, the Ganeshpuri Temple is a fine example of the union of the people of Ganeshpuri. It is located on Assagao Plateau"
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={cajetan}
            name="Church Of st. Cajetan"
            heading_line="St. Cajetan's Church ... Undisputedly one of the most beautiful churches in Goa"
            info="St. Cajetan Church, also known as the Church of Divine Providence, is a church of the Roman Catholic Archdiocese of Goa and Daman located in Old Goa. The church was completed in"
            rating={5}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={mahalaxmi}
            name="Mahalaxmi Temple"
            heading_line="The temple of Goddess Mahalaxmi"
            info="The temple of Goddess Mahalaxmi has been in existence since at least the year 1413, when information about the rituals of the temple is found on stone plaques​ . The temple is situated in the village"
            rating={4}
            location=""
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Religion;
