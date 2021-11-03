import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RowCard from "../Components/RowCard";

/* images */
import fontainhas from "../allimage/RomanticPlaces/Fontainhas-Panjim.jpg";
import aguada from "../allimage/RomanticPlaces/AguadaFort.jpg";
import la from "../allimage/RomanticPlaces/La Plage.jpg";
import riverside from "../allimage/RomanticPlaces/Riverside – The Leela.jpg";
import vagator from "../allimage/RomanticPlaces/VagatorBeach.jpg";
import charao from "../allimage/RomanticPlaces/Charao Island.jpg";
import waterfront from "../allimage/RomanticPlaces/Waterfront Terrace And Bar – The Marriot.jpg";
import tuscany from "../allimage/RomanticPlaces/Tuscany Gardens.jpg";
import arambol from "../allimage/RomanticPlaces/Arambol Beach.jpg";
import Gmap from "../Components/Gmap";

const RomanticPlaces = () => {
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
        Romantic Places in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={fontainhas}
            name="Fontainhas-Panjim"
            heading_line="The narrow lanes with heritage houses make for picture-perfect moments, while the little bakeries"
            info="Fontainhas is a beautiful heritage neighbourhood located in Panjim, Goa Probably one of the most romantic places in Goa with the old-fashioned neighbourhood, one..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={aguada}
            name="Aguada Fort"
            heading_line="Fort Aguada is a well-preserved seventeenth-century Portuguese fort"
            info="Built-in 1612, Fort Aguada is a picturesque fort situated on Sinquerim beach in Goa. Aguada is a Portuguese word which means “Watering Place” and the fort was built by..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={la}
            name="La Plage"
            heading_line="You cannot find a better spot to treat both your eyes and your taste buds than La Plage."
            info="The shack pulls most of the crowd of the Ashwem Beach and is famous for its cuisine which is a mixture of Italian, American, and French. This is one of the best shacks... "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={riverside}
            name="Riverside - The Leela"
            heading_line="Centred in the middle of gorgeous salmon-hued flowers and waters"
            info="Centred in the middle of gorgeous salmon-hued flowers and waters, the restaurant in Goa almost looks like one situated in the midst of clouds with its sheer beauty..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={vagator}
            name="Vagator Beach"
            heading_line="It is one of the most serene beaches in Goa that remains clean and peaceful since it is a relatively offbeat destination."
            info="Vagator Beach is located 22 kms from the capital city of Panaji. It is one of the most serene beaches in Goa that remains clean and peaceful since it is a relatively... "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={charao}
            name="Charao Island"
            heading_line="Do not miss to explore the beautiful and spellbinding Charao Island, located on Mandovi River."
            info="Do not miss to explore the beautiful and spellbinding Charao Island, located on Mandovi River. Enclosed by verdant mangrove vegetation, this island is a part of Salim..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={waterfront}
            name="Waterfront Terrace And Bar - The Marriot"
            heading_line="This Waterfront Terrace inevitably makes it to our list of romantic restaurants in Goa due to obvious reasons."
            info="With the most spectacular view, you can get in the Goan territory, stands the Marriot. Gorgeous edge of the seaside seating and a vast ocean and sky open right in front... "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={tuscany}
            name="Tuscany Gardens"
            heading_line="Tuscany Gardens is a family run restaurant in Candolim, Goa"
            info="Tuscany Gardens is a family run restaurant in Candolim, Goa. Avi from Goa and Line from Denmark started this place together in 2007. This outdoor restaurant has a very ..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={arambol}
            name="Arambol Beach"
            heading_line="Arambol Beach is considered to be the most beautiful beaches in Goa,"
            info="Beautiful and serene, this beach has a boho vibe to it that doesn’t exist in any of the Goa beaches anymore. It provides solitude for the tourists that are looking for some..."
            rating={4}
            location=""
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default RomanticPlaces;
