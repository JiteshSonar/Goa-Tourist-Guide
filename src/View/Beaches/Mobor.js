import React from "react";
import View from "../../Components/View";
import mobor from "../../allimage/beaches/mobor beach.jpg";
import Gmap from "../../Components/Gmap";

const Mobor = () => {
  return (
    <div>
      <View
        img={mobor}
        infoone="One of the best beaches in South Goa for dolphin watching and fishing trips. Mobor beach is 49.1 km away from Panjim.This beach area has many spas and healing centers."
        infotwo="At Mobor beach you can enjoy water sports like jet skiing, windsurfing, parasailing and banana
        ride. One of the favourite activities here is biking in the sand. Most tourists come to this
        beach just for biking. At Mobor beach you can
        enjoy
        water sports like jet skiing, windsurfing, parasailing and banana ride. One of the favourite
        activities here is biking in the sand. Most tourists come to this beach just for biking. "
        infothree="There are some peaceful spots here where you won’t find many people and you can be at your own peace and enjoy nature. There are also secluded covers where you can relax."
        infofour="There are a lot of beach side shops where one can get gifts and handicrafts. There are also many stalls which sell fresh juices. The most common stalls here are the tender coconut stalls. Not to forget the beach shacks and restaurants
        which serve delicious food and drinks. If you want to spend the night, there are beach resorts and hotels with their private pools. Night rides are the best! Rent your vehicles on the Goa app at a reasonable price. </p>
        <p>Do not forget to watch the beautiful sunrise and visit healing centers. These are the most popular things to do here. Make the best use of your stay in Goa…."
        title="MOBOR BEACH"
      />
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20District%2C%20Goa%20Mobor+Beach%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Mobor;
