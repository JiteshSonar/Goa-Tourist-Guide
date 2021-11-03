import React, { useEffect } from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Beaches from "./Page/Beaches";
import Navbars from "./Components/Navbar";
import Waterfalls from "./Page/Waterfalls";
import Shopping from "./Page/Shopping";
import Religion from "./Page/Religion";
import RomanticPlaces from "./Page/RomanticPlaces";
import PicnicSpot from "./Page/PicnicSpot";
import WineStore from "./Page/WineStore";
import Nightlife from "./Page/Nightlife";
import Relaxation from "./Page/Relaxation";

import Mobor from "./View/Beaches/Mobor";
import Colvabeach from "./View/Beaches/Colvabeach";
import Bamanbudo from "./View/Waterfalls/Bamanbudo";
import Netravali from "./View/Waterfalls/Netravali";
import Mahalsa from "./View/Religion/Mahalsa";

import Login from "./Login";
import Restuarants from "./Page/Restuarants";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <BrowserRouter> */}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/beaches">
            <Navbars />
            <Beaches />
          </Route>
          <Route path="/Waterfalls">
            <Navbars />
            <Waterfalls />
          </Route>
          <Route path="/Shopping">
            <Navbars />
            <Shopping />
          </Route>
          <Route path="/Religion">
            <Navbars />
            <Religion />
          </Route>
          <Route path="/RomanticPlaces">
            <Navbars />
            <RomanticPlaces />
          </Route>
          <Route path="/PicnicSpot">
            <Navbars />
            <PicnicSpot />
          </Route>
          <Route path="/WineStores">
            <Navbars />
            <WineStore />
          </Route>
          <Route path="/Nightlife">
            <Navbars />
            <Nightlife />
          </Route>
          <Route path="/Relaxation">
            <Navbars />
            <Relaxation />
          </Route>
          <Route path="/Restuarants">
            <Navbars />
            <Restuarants />
          </Route>
          <Route path="/moborbeach">
            <Navbars />
            <Mobor />
          </Route>
          <Route path="/colvabeach">
            <Navbars />
            <Colvabeach />
          </Route>
          <Route path="/bamanbudo">
            <Navbars />
            <Bamanbudo />
          </Route>
          <Route path="/netravali">
            <Navbars />
            <Netravali />
          </Route>
          <Route path="/mahalsa">
            <Navbars />
            <Mahalsa />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
