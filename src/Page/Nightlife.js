import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RowCard from "../Components/RowCard";

/* images */
import bigdaddy from "../allimage/nightlife/big-daddy-casino.jpg";
import hammerzz from "../allimage/nightlife/hammerzz-the-state-of.jpg";
import deltin from "../allimage/nightlife/Deltin-Royale-casino.jpg";
import bagabeach from "../allimage/nightlife/baga beach.jpg";
import sinq from "../allimage/nightlife/Sinq-Night-Club-05_20180515112247.jpg";
import mandovi from "../allimage/nightlife/Mandovi-River.jpeg";
import candolim from "../allimage/nightlife/Candle Light Dinner In Candolim Goa.jpg";
import calangute from "../allimage/nightlife/Candle Light Dinner In Calangute, Goa.jpg";
import houseboat from "../allimage/nightlife/houseboat-cruises-in-goa.jpg";
import Gmap from "../Components/Gmap";

const Nightlife = () => {
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
        Night Life Spot in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={bigdaddy}
            name="Big Daddy Casino"
            heading_line="Big Daddy Casino is an offshore casino that constitutes a bizarre blend of grand gaming and high living experience in panaji Goa"
            info="Goa has been a hub for the people due to the diversity of activities that it has to offer. And if you are an enthusiast for casinos, Goa is certainly the place for you. Get your nights thrilled with the extraordinary experience and the never stopping fun at the Big Daddy Casino. Set off the coast of Mandovi river, Big Daddy Casino is an offshore casino that constitutes a bizarre blend of grand gaming and high living experience. The amusing neon lights, the eternal beat of the music, and the brook of games filled with entertainment are the ideal traits to define how this casino vibe you with Goa."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={hammerzz}
            name="Hammerzz Nightclub"
            heading_line="Embark on an energetic and fun-filled night out delight with your squad and spend great times at Hammerzz, devised to cater you some great thrills when you are in Goa"
            info="Embark on an energetic and fun-filled night out delight with your squad and spend great times at Hammerzz, devised to cater you some great thrills when you are in Goa. The club is an amalgamation of three entertainment zones that implies a state of art nightclub, a splendidly built rooftop restaurant and a brilliantly devised bar- perfectly blending you for some real party fun."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={deltin}
            name="Deltin Royale Casino"
            heading_line="The Deltin Royale is one of the best off-shore casino cruise, spread across an area of 50,000 sq. ft, sailing on the Mandovi river provides you with one of the best experiences to cherish for a lifetime."
            info="the Deltin Royale is one of the best off-shore casino cruise, spread across an area of 50,000 sq. ft, sailing on the Mandovi river provides you with one of the best experiences to cherish for a lifetime. Not to mention, the place buzzes with lively casino games such as American Roulette, Baccarat, Poker, Teen Patti, Andar Bahar, Sic Bo and so on.Make the most out of your time on Deltine Royale and enjoy the perfect ambience of dance, entertainment, along with a world-class dining experience and the soothing breezes from the river that pass by touching your soul."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={bagabeach}
            name="Baga Beach Candle Light Dinner Goa"
            heading_line="Baga Beach is one of the oldest and most famous places to have a Candle Light Dinner in North Goa."
            info="Baga Beach is one of the oldest and most famous places to have a Candle Light Dinner in North Goa. Candlelight dinner at a beach while feeling those soothing sea breezes is counted as one of the most romantic dates for any loving couple. Book this package and get to spend those cute moments to embrace with your partner under those dimly-lit candles and amazingly delicious multi-cuisine meals that also consist of the famous seafood of Goa."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={sinq}
            name="Sinq Nightclub"
            heading_line="Sinq night club, Goa offers to be that chic place for all the party lovers that fly to Goa and enjoy their trip to Goa completely."
            info="Get a chance to experience yet another fun-filled aspect of Goa and feel the buzz of Goa. Sinq night club, Goa offers to be that chic place for all the party lovers that fly to Goa and enjoy their trip to Goa completely. The property is a combination of four entertainment zones - a snazzy nightclub, a contemporary Goan Tavern, a poolside deck and lounge - all rolled into one to create the ultimate party venue. The place has an ambience that can vibe with most of the people. Get a chance to be a part of this Uber hip club in Goa, then Sinq is the place for you. The poolside deck and lounge created the best party venue in North Goa."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={mandovi}
            name="Dinner Cruise in Mandovi River Goa"
            heading_line="cruise in Goa's at Mandovi river is the most incredible thing to experience the divine beauty of Goa along with the authentic coastline engulfed by beautiful lush green landscapes."
            info="Goa is a place that offers a huge list of fantastic activities that are widely appreciated by many travel enthusiasts, and that's why it is one of the most famous tourist destinations in India and around the world. Among these, a dinner cruise in Goa's at Mandovi river is the most incredible thing to experience the divine beauty of Goa along with the authentic coastline engulfed by beautiful lush green landscapes."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={candolim}
            name="Candle Light Dinner In Candolim Goa"
            heading_line="candle light dinner is one of the most loved and famous activity in Goa"
            info="candle light dinner is one of the most loved and famous activity in Goa.Book yourself a romantic Candle Light Dinner In Candolim and enjoy an appetizing 3-course dinner with your loved one. Those dimly-lit candles and romantic setup with a charming ambience, will make sure that you enjoy the best of your time. Savour on delicious meals including starters, main course, and mouthwatering deserts and satisfy your taste buds."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={calangute}
            name="Candle Light Dinner In Calangute"
            heading_line="Calangute Beach is well known for its beachfront restaurants in Goa and serves as one of the best places to have a candlelight dinner in North Goa."
            info="Calangute Beach is well known for its beachfront restaurants in Goa and serves as one of the best places to have a candlelight dinner in North Goa.Calangute Beach Situated at the beachfront of Calangute Beach, Souza Lobo caters a large, airy, well laid out space, with an unhindered rustic charm where you can have your perfect memorable candlelight dinner. The tables with rattan woven benches, live music, solo/duo singing, along with the pleasure of wines and spirits - the ambience which is surely going to uplift your mood in seconds. Enjoy candlelight dinner with your partner with facilities at the beachside to make it a memorable experience for you."
            rating={4}
            location=""
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={houseboat}
            name="Goa Houseboat Trip"
            heading_line="Chapora is known to be the home to luxury houseboats in Goa. The river Cruise is a memorable and must-to-have experience in Panaji."
            info="Chapora is known to be the home to luxury houseboats in Goa. The river Cruise is a memorable and must-to-have experience in Panaji Enjoy the 5-hour dinner cruise in the houseboat along with sightseeing of Chapora river and sunset views. Along with the mesmerizing sunsets, you can also enjoy Bird Watching, Crocodile Spotting and Fishing. While on this boat ride, you can also get to catch a glimpse of the nearby villages churches, and farms that can help you get to know about this side of Goa as well. Relish the tasteful meals that include Welcome Drink and Snacks, Dinner Buffet, Desserts, etc."
            rating={4}
            location=""
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Nightlife;
