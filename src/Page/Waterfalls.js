import React from "react";
import RowCard from "../Components/RowCard";
/* images */
import netravali from "../allimage/waterfalls/netravaliwaterfalls.jpeg";
import bamanbudo from "../allimage/waterfalls/Bamanbudo_Waterfall.jpg";
import hivrem from "../allimage/waterfalls/hivrem.jpg";
import charmane from "../allimage/waterfalls/charmanewaterfalls.jpeg";
import shelop from "../allimage/waterfalls/shelopwaterfalls.jpeg";
import karmalya from "../allimage/waterfalls/karmalyawaterfalls.jpeg";
import mainapi from "../allimage/waterfalls/mainapiwaterfalls.jpeg";
import shiranguli from "../allimage/waterfalls/siranguliwaterfalss.jpeg";
import dudhsagar from "../allimage/waterfalls/dudhsagar.jpg";
import Gmap from "../Components/Gmap";
import { Link } from "react-router-dom";

const Waterfalls = () => {
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
        Waterfalls in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <Link to="/netravali">
            <RowCard
              image={netravali}
              name="Netravali Waterfall"
              heading_line="One of the best beaches in South Goa for dolphin watching "
              info="Sprawling over a vast 211 sq kms of protected land area, Netravali Waterfalls is one of the most enchanting waterfalls of Goa. The waterfalls is situated into the wildlife..."
              rating={4}
              location="south goa"
            />
          </Link>
        </div>
        <div className="col-lg-4 sm-12">
          <Link to="/bamanbudo">
            <RowCard
              image={bamanbudo}
              name="Bamanbudo Waterfall"
              heading_line="Most famous beach in south Goa. The beach is .."
              info="the water slides down the rocks, there is no well at the bottom and      bathing is fun due to the force of the water.Untouched and unexploited are the words which..."
              rating={4}
              location="south goa"
            />
          </Link>
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={hivrem}
            name="Hivrem Waterfall"
            heading_line="The best time to visit Majorda beach is in.."
            info="Hivrem Waterfall is one of the top and best destinations for family and friends in the field of park, Water Parks and resort category in Sindhudurg. It is Al... "
            rating={4}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={charmane}
            name="Charmane Waterfall"
            heading_line="Charavane waterfalls also called as..."
            info="This place comes in the western ghat. Charavane waterfalls provide a breathtaking view of the lush green forest along with the gushing flow of the river..."
            rating={4}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={shelop}
            name="Shelop Waterfalls"
            heading_line="The waterfall is undoubtedly the..."
            info="Budruk is blessed by four waterfalls which exhibit the identity through their flow. However they offer marvelous sight of the waterfalls..."
            rating={4}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={karmalya}
            name="Karmalya Waterfall"
            heading_line="Karmalya Waterfall or Mini ..."
            info="Karmalya Waterfall is placed inside the scenic village of Karmalya. This is a lesser-acknowledged spot and is not usually crowded. There are..."
            rating={3}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={mainapi}
            name="Mainapi Waterfall "
            heading_line="One of the hidden..."
            info="Mainapi waterfall is around 14km from Netravali village. When most waterfalls of the Western Ghats reduce to trickle during the peak..."
            rating={3}
            location="south goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={shiranguli}
            name="Siranguli Waterfall"
            heading_line="A delightful 3 km..."
            info="Siranguli is in the south-eastern side of North Goa District and is roughly 2 km from Assodem. Cotorem is nearly 4 km south-west..."
            rating={5}
            location="north goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={dudhsagar}
            name="Dudhsagar Waterfall"
            heading_line="Trek to Dudhsagar Falls..."
            info="Located on the Mandovi River, Dudhsagar Falls is situated inside a 240 sq km protected area, Bhagwan Mahaveer Sanctuary and Mollem National"
            rating={4}
            location="south goa"
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Waterfalls;
