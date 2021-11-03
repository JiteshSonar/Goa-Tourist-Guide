import React from "react";
import View from "../../Components/View";
import mahalsa from "../../allimage/religiuos/mahalsa temple.jpeg";
import Gmap from "../../Components/Gmap";

const Mahalsa = () => {
  return (
    <div>
      <View
        title="MAHALSA TEMPLE"
        infoone="Shri Mahalasa Narayani’s temple at Mardol in the West coastal state of Goa in India needs no introduction to Shri Mahalasa’s Kulavis and other devotees. This is Her most well-known temple and even if we visit other temples, we cannot
        avoid visiting Her beautiful temple at Mardol, at least once in our lifetime."
        infotwo="Lakhs of devotees and tourists visit the 450-year old temple every year to solicit blessings of the Divine Deity."
        infothree="The Mardol temple has some unique features to its credit viz, the tallest Samai (lamp) or the Dnyandeepa, and the Deepasthambha (see photo below), which is famous all over the world thanks to it being highlighted in posters of the
        Goa Tourism Development Corporation; a full-granite Sabha Mantapa, copper roof to the main temple, historic bell with legal sanctity and many more interesting things."
        infofour="A very special feature in Mardol temple is the appearance of Shri Mahalasa in various Alankaars at various periods, sometimes during various times of the day.
       AARATI TIMINGS: Daily: 12:30 pm & 8:30 pm"
        img={mahalsa}
      />
      <Gmap maplink="https://maps.google.com/maps?q=Mission%20District%2C%20Goa%20mahalsatemple%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed" />
    </div>
  );
};

export default Mahalsa;
