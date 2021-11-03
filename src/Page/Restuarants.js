import React from "react";
import RowCard from "../Components/RowCard";
import "bootstrap/dist/css/bootstrap.min.css";

/* images */
import black from "../allimage/restua/black.jpg";
import burger from "../allimage/restua/burger.jpg";
import fishman from "../allimage/restua/fisherman.jpg";
import gunpowder from "../allimage/restua/gunpowder.jpg";
import olive from "../allimage/restua/olive.jpg";
import pavsada from "../allimage/restua/pavsada.jpg";
import susi from "../allimage/restua/susi.jpg";
import thalsa from "../allimage/restua/thalsa.jpg";
import vinayak from "../allimage/restua/vinayak.jpg";
import Gmap from "../Components/Gmap";

const Restuarants = () => {
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
        Restuarants in Goa
      </h2>
      <hr />

      <div className="row" style={{ margin: "0px" }}>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={gunpowder}
            name="Gunpowder"
            heading_line="Gunpowder’s Toddy Shop Meen Curry and Soondal have really stood the test of time"
            info="Gunpowder’s Toddy Shop Meen Curry and Soondal have really stood the test of time"
            rating={4}
            location=" North Goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={vinayak}
            name="Vinayak Family Restaurant"
            heading_line=" It’s a great way to see an unusually hectic side of Goa with a well-stocked bar and a view of the nearby fields in tow."
            info="Another classic restaurant from Assagao, Vinayak Family Restaurant is quite popular with both tourists and locals, who swear by its legendary fish thali. Lunch time is frenzied, and expecting servers to take notice of you "
            rating={4}
            location=" Goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={susi}
            name="Suzie’s"
            heading_line="Suzie’s is a recent addition to Assagao’s already-exploding food scene that dares to do things differently."
            info="Suzie’s is a recent addition to Assagao’s already-exploding food scene that dares to do things differently. A whimsical take on fine-dining, the chef lovingly curates a different menu every six weeks, working with seasonal ingredients. "
            rating={4}
            location=" North Goa"
          />
        </div>

        <div className="col-lg-4 sm-12">
          <RowCard
            image={pavsada}
            name="Pousada By The Beach"
            heading_line="Even if you didn’t know that Priyanka Chopra Jonas and Nick Jonas were often spotted here"
            info="Even if you didn’t know that Priyanka Chopra Jonas and Nick Jonas were often spotted here, you should still add this one to your list of best restaurants in Goa for Chai and Biscuit - the restaurant’s cuddly resident Labradors. Pousada"
            rating={5}
            location="Calangute"
          />
        </div>

        <div className="col-lg-4 sm-12">
          <RowCard
            image={fishman}
            name="Fisherman’s Wharf"
            heading_line="Perched by the riverside, with sea breeze and live music filling the air, this spot is always abuzz. "
            info="It will be a shame if you make a list of best Goa restaurants and don’t include this one in it. Especially the one located in Cavelossim, South Goa. Perched by the riverside, with sea breeze and live music filling the air, this spot is always abuzz."
            rating={4}
            location="South Goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={black}
            name="The Black Sheep Bistro"
            heading_line="This modern, boutique restaurant located in Panaji, prides itself on using locally-sourced seasonal produce"
            info="This modern, boutique restaurant located in Panaji, prides itself on using locally-sourced seasonal produce and that is exactly what makes all the difference. With an eclectic menu that doesn’t play by the rules, there’s one thing that’s constant:"
            rating={4}
            location="Panjim, Goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={olive}
            name="Olive Bar & Kitchen"
            heading_line="This restaurant has introduced the Goa family brunches to a whole lot of sangria"
            info="How do you handle the expectations that come with being as iconic as Olive? Well, you take what they’re best known for and drop it on the beach. What makes this Vagator restaurant timeless is how it keeps the OG’s love for all things pretty and pizza "
            rating={4}
            location=" Anjuna, Goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={thalsa}
            name="Thalassa"
            heading_line="Hands down one of the most famous restaurants in Goa"
            info="Hands down one of the most famous restaurants in Goa, this Greek restaurant grew from being a modest beachside cafe to a full-fledged taverna, and it’s now enjoying sunsets at its new location in Siolim. Who would have thought that they’d seamlessly "
            rating={4}
            location="Vaddy Siolim, Goa"
          />
        </div>
        <div className="col-lg-4 sm-12">
          <RowCard
            image={burger}
            name="Burger Factory"
            heading_line="One of the best places to eat in Goa, Burger Factory in Anjuna"
            info="One of the best places to eat in Goa, Burger Factory in Anjuna is a known for its giant, cheesy burgers and stunning views. If you’re staying in North Goa, bookmark this for an evening of guzzling beer and doubling down on their Double Cheddar, Bacon "
            rating={3}
            location=" Anjuna, Goa"
          />
        </div>
      </div>
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20state%2C%20San%20Goa%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Restuarants;
