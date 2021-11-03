import React from "react";
import RowCard from "../Components/RowCard";
import "bootstrap/dist/css/bootstrap.min.css";

/* images */
import caculo from "../allimage/shopping/caculo mall.jpeg";
import big from "../allimage/shopping/BIG G.jpeg";
import osia from "../allimage/shopping/osia shopping mall.jpg";
import aj from "../allimage/shopping/aj super market.jpeg";
import newtons from "../allimage/shopping/newtons supermarket.jpeg";
import colva from "../allimage/shopping/calva beach market.jpeg";
import calangute from "../allimage/shopping/calangute market square.jpeg";
import baga from "../allimage/shopping/baga street market.jpeg";
import little from "../allimage/shopping/lilltreasure.jpeg";
import Gmap from "../Components/Gmap";

const Shopping = () => {
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
        Shopping in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={caculo}
            name="Caculo Mall"
            heading_line="Straightforward shopping complex offering international chain stores & restaurants, plus a cinema."
            info="The Caculo Group of Companies was founded by the visionary late Shri Mahadeva S.B.Caculo in the early 1900’s. A very prominent business family, the Caculo Group has only grow"
            rating={3}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={big}
            name="BIG G"
            heading_line="Big G Shopping Centre Margaon in Margao"
            info="Big G shopping mall was started from 2005 which established by Gosalia Group. Big G is shopping mall which is popular for restaurant, branded clorthes, jewelleries and shoes. People "
            rating={3}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={osia}
            name="Osia Shopping Mall"
            heading_line="Osia Shopping MallOsia Mall Margao-RSI"
            info="Osia Shopping MallOsia Mall Margao-RSI is one of the well-known service centers you can visit for all your device related damages be it..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={aj}
            name="AJ Supermarket"
            heading_line="AJ Supermarket, is renowned as one of the Best Supermarkets  in Siolim,Goa."
            info="AJ Supermarket, is renowned as one of the Best Supermarkets  in Siolim,Goa.It is a one stop destination for all grocery and other house"
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={newtons}
            name="Newtons Supermarket"
            heading_line="Newtons Supermarket- From swiss cheese to fresh fruits"
            info="Newtons Supermarket- From swiss cheese to fresh fruits, from the local wine feni to green teas and flavoured coffee, Newtons has everything you need. Locate"
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={colva}
            name="Colva Beach Market"
            heading_line="It is a perfect place for street shopping in Goa"
            info="Another popular market place in south Goa is the Colva beach market. It is a perfect place for street shopping in Goa as you can purchase beautiful hippie outfits,"
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={calangute}
            name="Calangute Market Square"
            heading_line="CALANGUTE MARKET SQUARE, NORTH GOA"
            info="CALANGUTE MARKET SQUARE, NORTH GOA - Calangute Market Square is a popular market place to purchase different types of clothes beach wear, casual, trinkets, hand"
            rating={3}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={baga}
            name="The Baga Street Market"
            heading_line="In the Baga Beach Market one can get various commodities"
            info="The Baga Beach, located 10 kms west of Mapusa along the west coast of Goa, is a small but wonderful beach located between two famous beaches, Colva and Calangute..."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={little}
            name="Little Treasures"
            heading_line="In-store shopping"
            info="Little Treasures in St Inez, Goa - Little Treasures in Goa is one of the leading businesses in the Toy Shops. Also known for Toy Shops, Soft Toy Dealers, Battery Operated Toy Ca"
            rating={4}
            location=""
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Shopping;
