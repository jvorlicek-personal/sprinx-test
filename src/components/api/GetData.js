import Source1 from "./Source1";

export function whatDataToUse(fakeData) {
  if (fakeData) {
    const fakeResult = [
      {
        id: 1,
        name: "Name of product",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nisi odio. Suspendisse potenti. Aenean euismod, erat vel maximus consectetur, lacus dolor egestas elit, in malesuada felis ipsum eu dui. Phasellus in sem condimentum, condimentum lacus eget, vulputate sapien. Vestibulum dui justo, sodales vel ullamcorper eget, iaculis ut orci. Cras ac diam sit amet lacus dapibus sollicitudin.",
        img: "https://picsum.photos/id/237/300/200",
        features: ["Feat 1", "Feat 2", "Feat 3", "Feat 3", "Feat 3", "Feat 3"],
        quantity: 25,
        period: 3,
        price: 50457,
      },
      {
        id: 2,
        name: "Name 2 the namening",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nisi odio. Suspendisse potenti. Aenean euismod, erat vel maximus consectetur.",
        img: "https://picsum.photos/id/238/300/200",
        features: ["Feat 11", "Feat 21", "Feat 31"],
        quantity: 29,
        period: 2,
        price: 708,
      },
    ];

    return fakeResult;
  } else {
    Source1.get("/", {
      headers: {
        Authorization: "Bearer some authorization",
      },
    })
      .then((response) => {
        console.log("api call response " + response);
        // sent upwards result for maping etc
      })
      .catch((error) => {
        console.log("api call error " + error);
        // some error behaviour  popups etc
      });
  }
}

export function sendOrNotToSent(thatIsTheQuestion, period, quantity) {
  if (thatIsTheQuestion) {
    console.log(thatIsTheQuestion + " " + period + " " + quantity);
  } else {
    Source1.post("/somewhere",
    {
      period,
      quantity,
    },
     {
      headers: {
        Authorization: "Bearer some authorization",
      },
    })
      .then((response) => {
        console.log("api call response " + response);
        // show confirmation
      })
      .catch((error) => {
        console.log("api call error " + error);
        // some error behaviour  popups etc
      });
  }
}

export default whatDataToUse;
