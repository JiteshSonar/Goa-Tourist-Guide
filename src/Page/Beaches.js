import React from "react";
import RowCard from "../Components/RowCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Gmap from "../Components/Gmap";

/* image */
import mobor from "../allimage/beaches/mobor beach.jpg";
import colva from "../allimage/beaches/colva-beach.jpg";
import majorda from "../allimage/beaches/majorda beach.jpg";
import candolim from "../allimage/beaches/candolim-beach.jpg";
import morjim from "../allimage/beaches/morjim beach.jpg";
import mandrem from "../allimage/beaches/Mandrem-Beach.jpg";
import miramar from "../allimage/beaches/miramar beach.jpg";
import agonda from "../allimage/beaches/agona beach.jpg";
import cabo from "../allimage/beaches/cabo de rama beach.jpg";
import { Link } from "react-router-dom";

const Beaches = () => {
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
        Beaches in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <Link to="/moborbeach">
            <RowCard
              image={mobor}
              name="Mobor Beach"
              heading_line="Mobor Beach is one of the pristine beaches in South Goa"
              info="One of the best beaches in South Goa for dolphin watching and fishing trips. Mobor beach is 49.1 km away from Panjim.This beach area has many spas and healing centers."
              rating={4}
              location="south goa"
            />
          </Link>
        </div>
        <div className="col-lg-4 sm-12">
          <Link to="/colvabeach">
            <RowCard
              image={colva}
              name="Colva Beach"
              heading_line="Most famous beach in south Goa."
              info="Most famous beach in south Goa. The beach is well known for the delectable food and pubs. Colva beach is 34.4 km from Panjim, and the best way to reach there is by a bike to avoid traffic and narrow"
              rating={4}
              location="South Goa"
            />
          </Link>
        </div>

        <div className="col-lg-4 sm-12">
          <RowCard
            image={majorda}
            name="Majorda Beach"
            heading_line="One of the prettiest beaches of Goa"
            info="One of the prettiest beaches of Goa is Majorda that sits on a wide 25 km stretch of sand, spread with roofed parasols and  lapped by the warm Arabian Sea. On the northern side of the beach, there"
            rating={4}
            location="Salcette"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={candolim}
            name="Candolim Beach"
            heading_line="Candolim is just north of the Mandovi river"
            info="Candolim is a small town in the western Indian state of Goa. Standing on the shores of the Arabian Sea, it’s known for Candolim Beach and, to the north, lively Calangute Beach. In the south, the sturdy "
            rating={4}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={morjim}
            name="Morjim Beach"
            heading_line="Morjim is definitely among the best beach"
            info="Morjim Beach in Goa is one of the best beaches to visit in the course of your holiday. The scenic beauty of changing colours of the sky and setting sun defines this place. The Morjim beach is ac"
            rating={5}
            location="morjim"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={mandrem}
            name="Mandrem Beach"
            heading_line="Mandrem is a small beach in the northernmost"
            info="Upmarket Mandrem is known for its 2 quiet beaches, home to tucked-away cafes, yoga retreats and resort hotels. Mandrem Beach offers high-end accommodation in a secluded setting, while indie boutiques at"
            rating={4}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={miramar}
            name="Miramar Beach"
            heading_line="Miramar is the beach area of the Goan"
            info="Located in the heart of Goa’s capital, Miramar Beach in Panjim is the longest beach in the state. Stretching as far as 2 kilometers, the beach sits on the confluence of the Mandovi River and the Arabian sea"
            rating={5}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={agonda}
            name="Agonda Beach"
            heading_line="Agonda Beach is a carpet of white sand"
            info="Agonda Beach is a carpet of white sands dotted with colourful shacks giving the authentic Goan vibes. The Arabian Sea on this part is passionately touching the shores of the shining beach dotted with lush green coconut and palm trees. It is on"
            rating={4}
            location="south goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={cabo}
            name="Cabo de Rama Beach"
            heading_line="Cabo de Rama Beach, also known among local citizens as Cab de Ram"
            info="Cabo de Rama is a wonderful beach in the beautiful beaches of Goa. This is an attractive beach located south of Goa. This is a run of life in the city and a peaceful place away from valor. At this beach, you will rarely find a crowd"
            rating={5}
            location="south goa"
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Beaches;
