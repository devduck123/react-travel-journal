/*
 * this file acts like an API endpoint
 * in which we'd normally get our data from
 */

import cardImage1 from "./images/cardImage1.jpg";
import cardImage2 from "./images/cardImage2.jpg";
import cardImage3 from "./images/cardImage3.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 1,
    title: "Kailua-Kona",
    location: "Hawaii",
    maps: "https://goo.gl/maps/NPc8wd3wUnNy7L28A",
    img: cardImage1,
    startdate: "June 2014",
    enddate: "July 2014",
    description:
      "In the beautiful region of Hawaii, Mark Zuckerburg and I went to see the unique fish and shrimp in the sandy beaches of Kailua-Kona. It was a great experience getting to fish with a sweet and sensational man like him.",
  },
  {
    id: 2,
    title: "Tijuana",
    location: "Mexico",
    maps: "https://goo.gl/maps/ocxhSrzpc95NqbXm9",
    img: cardImage2,
    startdate: "April 2016",
    enddate: "July 2016",
    description:
      "In Tijuana, Eddie and I went to taste the excellent, and affordable tacos that Mexico has to offer. I was stunned at the amazing prices, and the elegance of the street vendors. This was a truly inspiring trip.",
  },
  {
    id: 3,
    title: "Hue",
    location: "Vietnam",
    maps: "https://goo.gl/maps/pcstJj88QAJoQCQ58",
    img: cardImage3,
    startdate: "February 2020",
    enddate: "March 2020",
    description:
      "I went to go visit one of my long-time friends, Quang, in his hometown. I loved the foods and drinks -- there was such cool flavors! He was getting married the week that I came, so we got to meet some of his local family, which really exposed me to different aspects and perspectives of life.",
  },
];
