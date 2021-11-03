import React from "react";
import RowCard from "../Components/RowCard";
/* images */
import diamand from "../allimage/Wine stores/diamond wine store.jpg";
import good from "../allimage/Wine stores/good luck wine shop.jpg";
import casa from "../allimage/Wine stores/casa barreto wine store.jpg";
import old from "../allimage/Wine stores/old goa wine shop.jfif";
import winepalace from "../allimage/Wine stores/wine palace goa.jfif";
import royalwine from "../allimage/Wine stores/royal wine mart.jpg";
import ramesh from "../allimage/Wine stores/ramesh wine store.jpg";
import golden from "../allimage/Wine stores/golden-wine-store-and-kaju-depot.jpg";
import keni from "../allimage/Wine stores/keni wines.jpg";
import Gmap from "../Components/Gmap";

const WineStore = () => {
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
        Wine Store in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={diamand}
            name="Diamond  wine Store"
            heading_line="Liquor wholesaler"
            info="Diamond Wine Store in Panjim has a wide range of products and / or services to cater to the varied requirements of their customers. The staff at this establishment are courteous and prompt at providing any assistance."
            rating={4}
            location="south goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={good}
            name="Good luck Wine Shop"
            heading_line=" Liquor Shop"
            info="Located right at the Vagator-Anjuna crossing, this is a new kid on the block. Despite that, they have some of the finest collection of Indian and foreign brands we have spotted in the area. The shop is housed in the..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={casa}
            name="Casa Barreto Wine Store"
            heading_line="Wine store "
            info="You can easily locate the establishment as it is in close proximity to Nr Municipal Garden"
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={old}
            name="Old Goa Wine Shop"
            heading_line=" Wine store"
            info="Established in the year 1996, Old Goa Wine Store in Velhegave, Goa is a top player in the category Wine Retailers in the Goa. This well-known establishment acts as a one-stop destination servicing customers both... "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={winepalace}
            name="Wine Palace"
            heading_line=" Liquor Shop"
            info="Established in the year 2012, Wine Palace in Panjim, Goa is a top player in the category Wine Retailers in the Goa. This well-known establishment acts as a one-stop destination servicing customers both local and "
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={royalwine}
            name="Royal Wine Mart"
            heading_line="wine store "
            info="Royal Wine Mart in Goa is one of the leading businesses in the Wine Retailers,Established in the year 1980, Royal Wine Mart in Panjim, Goa is a top player in the category Wine Retailers in the Goa, it is in close "
            rating={5}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={ramesh}
            name="Ramesh Wine Stores"
            heading_line="wine store "
            info="Ramesh Wine Store in Mapusa, Goa is a top player in the category Wine Retailers in the Goa. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Goa."
            rating={5}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={golden}
            name="Golden Wine Store And Kaju Depot"
            heading_line="wine store "
            info="Established in the year 2011, Keni Wine in Mapusa, Goa is a top player in the category Wine Retailers in the Goa. This well-known establishment acts as a one-stop destination servicing customers both local and from"
            rating={5}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={keni}
            name="Keni Wines"
            heading_line="wine store "
            info="Established in the year 2011, Keni Wine in Mapusa, Goa is a top player in the category Wine Retailers in the Goa. This well-known establishment acts as a one-stop destination servicing customers both local and from other "
            rating={4}
            location=""
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default WineStore;
