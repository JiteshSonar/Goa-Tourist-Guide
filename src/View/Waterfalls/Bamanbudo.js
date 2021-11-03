import React from "react";
import Gmap from "../../Components/Gmap";
import View from "../../Components/View";
import bamanbudo from "../../allimage/waterfalls/Bamanbudo_Waterfall.jpg";

const Bamanbudo = () => {
  return (
    <div>
      <View
        img={bamanbudo}
        infoone="This spectacular waterfall is located in Gaodongrem, Canacona. Bamanbudo waterfall flows down along the rocks looking more like a waterslide than a waterfall. The waterfall flows right by the roadside and is easily accessible. Since
        the water slides down the rocks, there is no well at the bottom and bathing is fun due to the force of the water."
        infotwo=" Untouched and unexploited are the words which perfectly describe the Bamanbudo Waterfall. One of the most pristine waterfalls lying in the vicinity of Old Goa. This waterfall flows in the backdrop of serene Amba Ghat."
        infothree="The waterfall is undoubtedly the picture-perfect spot, with water falling down through the lush green hillock. The sound of the water, freshness in the air and, everything beautiful contributes to the significance of the place. This
        waterfall is located on the main road and one cannot trek to this splendid destination."
        infofour="Location: MDR34, Gordongram, Goa 403702
        Timings: 24 Hrs
         Entry Fee: Free"
        title="BAMANBUDO WATERFALLS"
      />
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20District%2C%20Goa%20bamanbudoWaterfall%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Bamanbudo;
