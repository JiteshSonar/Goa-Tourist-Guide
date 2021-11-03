import React from "react";
import Gmap from "../../Components/Gmap";
import View from "../../Components/View";
import netravali from "../../allimage/waterfalls/netravaliwaterfalls.jpeg";

const Netravali = () => {
  return (
    <div>
      <View
        title="NETRAVALI WATERFALLS"
        img={netravali}
        infoone="Sprawling over a vast 211 sq kms of protected land area, Netravali Waterfalls is one of the most enchanting waterfalls of Goa. The waterfalls is situated into the wildlife sanctuary and preserved from exploitation. It is a popular
        attraction in Goa and remains especially crowded during weekends."
        infotwo="admire the majesty and grace of Netravali waterfall, spread over sprwaling 211 sq.km area Located and preserved as wildlife sanctuary of western ghat Range. Netravali waterfalls allures all nature lovers and enthusiasts."
        infothree=""
        infofour=""
      />
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20District%2C%20Goa%20NeturlemWaterfall%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Netravali;
