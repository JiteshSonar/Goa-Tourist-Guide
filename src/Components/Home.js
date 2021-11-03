import React from "react";
import "../CSS/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaCity,
  FaHamburger,
  FaPlaneDeparture,
  FaTrain,
  FaBus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
/* images */
import MyCard from "./Card";
import Gallery from "./Gallery";
import agonabeach from "../cardImage/agonabeach.jpg";
import shopping from "../cardImage/shopping.jpg";
import waterfall from "../cardImage/waterfall.png";
import religion from "../cardImage/religion.jpeg";
import romanticplace from "../cardImage/romanticplace.jpg";
import picnincspot from "../cardImage/picnicspot.jpeg";
import backg from "../cardImage/backg.jpg";
import back from "../cardImage/back.jpeg";
import wine from "../allimage/wine/wine.jpg";
import night from "../allimage/nightlife/night.jpg";
import theropy from "../allimage/relax/theropy.jpg";
import olive from "../allimage/restua/olive.jpg";

import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Home = () => {
  /* const [{ user }, dispatch] = useStateValue();

  /* ---------------------Authenticate signin - out name---------------*/
  /* const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } 
  }; */
  return (
    <div className="Home">
      <section className="background-container">
        <div className="row">
          <div className=" col-1">
            <div className="left-side">
              <div className="logo">
                <h3 style={{ fontWeight: "700", color: "white" }}>Goa</h3>
              </div>

              <div className="side-bar white">
                <a href="https://www.makemytrip.com/hotels/">
                  <div className="waves-effect">
                    <FaCity className="icons-left" />
                    <p style={{ color: "white" }}>Hotels</p>
                  </div>
                </a>

                <a href="https://www.makemytrip.com/flights/">
                  <div className="waves-effect">
                    <FaPlaneDeparture className="icons-left" />
                    <p style={{ color: "white" }}>Airlines</p>
                  </div>
                </a>

                <a href="https://www.makemytrip.com/railways/mumbai-goa-train-tickets.html">
                  <div className="waves-effect">
                    <FaTrain className="icons-left" />
                    <p style={{ color: "white" }}>Trains</p>
                  </div>
                </a>

                <a href="https://www.makemytrip.com/bus-tickets/">
                  <div className="waves-effect">
                    <FaBus className="icons-left" />
                    <p style={{ color: "white" }}>Bus</p>
                  </div>
                </a>

                <Link to="/Restuarants">
                  <div className="waves-effect">
                    <FaHamburger className="icons-left" />
                    <p style={{ color: "white" }}>Restaurent</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="middle-side col-5">
            <form action="">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Destination,attraction,hotels etc."
                />
              </div>
            </form>
            {/* card */}
            <div className="routeCards" style={{ overflowY: "scroll" }}>
              <Link to="/beaches">
                <MyCard
                  image={agonabeach}
                  title="Beaches"
                  tag="explore the amazing beaches in goa"
                />
              </Link>
              <Link to="/Waterfalls">
                <MyCard
                  image={waterfall}
                  title="Waterfall"
                  tag="explore the amazing Waterfalls in goa."
                />
              </Link>
              <Link to="/Shopping">
                <MyCard
                  image={shopping}
                  title="Shopping"
                  tag="explore the amazing Waterfalls in goa."
                />
              </Link>
              <Link to="/Religion">
                <MyCard
                  image={religion}
                  title="Religion"
                  tag="Feel God much closely and deeply.."
                />
              </Link>
              <Link to="/RomanticPlaces">
                <MyCard
                  image={romanticplace}
                  title="Romantic Places"
                  tag="It Seemed Like A Good Idea At The Time."
                />
              </Link>
              <Link to="/PicnicSpot">
                <MyCard
                  image={picnincspot}
                  title="Picnic Spot"
                  tag="Spring is nature’s way of saying let’s party."
                />
              </Link>
              <Link to="/WineStores">
                <MyCard
                  image={wine}
                  title="Wines Store"
                  tag="Good Wine for Good Moments."
                />
              </Link>
              <Link to="/Restuarants">
                <MyCard
                  image={olive}
                  title="Restuarants"
                  tag="Good Food Good Mood"
                />
              </Link>
              <Link to="/Nightlife">
                <MyCard
                  image={night}
                  title="Night Life in Goa"
                  tag="Your Favourite Club for Fun"
                />
              </Link>
              <Link to="/Relaxation">
                <MyCard
                  image={theropy}
                  title="Relax your Body and Mind"
                  tag="Relax, Renew, Refresh"
                />
              </Link>
            </div>
          </div>
          <div className="right-side col-lg-6">
            <section
              id="image-container"
              style={{
                backgroundImage: `url(${backg})`,
                borderRadius: "30px",
                height: "730px",
                width: "100%",
              }}
            >
              <Link to="/login">
                {/* {!user && "/login"} */}
                <div class="profil-tab">
                  <img
                    style={{
                      margin: "5px",
                      width: "50px",
                      height: "50px",
                      borderRadius: "100px",
                      marginRight: "20px",
                    }}
                    src={back}
                    alt="02"
                  />

                  {/* <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne">
                      {user ? user.email : "Hello Guest"}
                    </span>
                    <span className="header_optionLineTwo">
                      {user ? "Sign Out" : "Sign In"}
                    </span>
                  </div> */}

                  <div>
                    <p style={{ paddingTop: "18px" }}>
                      hello,
                      <span>Guest</span>
                      <span></span>
                    </p>
                  </div>
                </div>
              </Link>
              <div className="tag-lines">
                <div className="a">
                  <p>Live as if</p>
                  <h1>The Paradise</h1>
                  <p>is on earth</p>
                </div>
              </div>
              <div class="galary">
                <Gallery />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
