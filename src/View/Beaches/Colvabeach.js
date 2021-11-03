import React from "react";
import View from "../../Components/View";
import colva from "../../allimage/beaches/colva-beach.jpg";
import Gmap from "../../Components/Gmap";

const Colvabeach = () => {
  return (
    <div>
      <View
        title="COLVA BEACH"
        infoone="Most famous beach in south Goa. The beach is well known for the delectable food and pubs. Colva beach is 34.4 km from Panjim, and the best way to reach there is by a bike to avoid traffic and narrow roads. You can book your ride on
        the Goa app at some amazing prices! How to make the best of your visit?"
        infotwo="Try out various water sports like parasailing, scuba diving, wave surfing, bungee jumping and many more. Book on the Goa app for better rates.
        Not to forget the beach shacks which are famous for Goan as well as continental cuisine. Some well known shacks are Sucorina beach shack, pina colada beach shack and sandPat shack. These shacks serve the most delicious seafood."
        infothree="You can spend your stay at the beach resorts like La Ben Resort, OYO Graciano cottage, with a swimming pool and a beautiful beach view.
        Explore the market which is right outside the beach. Have a look at the beautiful souvenirs and accessories. If in case you forgot your swimming clothes, not to worry. These small shops have everything you require for a swim!"
        infofour="Sit with a chilled bottle of beer and watch the beautiful sunset… Walk by the shore and spend your evening peacefully, meditate and listen to the waves gushing and the birds chirping while they fly back home.
        Love parties? Head up to some of Goa’s popular night clubs like Club Margarita and party all night!"
        img={colva}
      />
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20District%2C%20Goa%20colaBeach%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Colvabeach;
