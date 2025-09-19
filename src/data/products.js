// src/data/products.js

// Add cache-busting timestamp to force image refresh
const cacheBuster = Date.now();

const products = [
  {
    ean: "7613036047166",
    name: "Gerber Organic for Baby - Mazăre, Broccoli și Dovlecel, 125 g",
    image: process.env.PUBLIC_URL + `/images/GerberMazareBrocoliDovlecel_p1.jpg?v=${cacheBuster}`,
    Disponibilitate: {
      Barbu: 3,
      Dristor: 5,
      Plaza: 1,
    },
  },
  {
    ean: "8445291761292",
    name: "Gerber Organic for Baby - Morcovi și Cartofi Dulci, 125 g",
    image: process.env.PUBLIC_URL + `/images/GerberMorcoviCartofiDulci_p1.jpg?v=${cacheBuster}`,
    Disponibilitate: {
      Barbu: 1,
      Dristor: 4,
      Plaza: 2,
    },
  },
  {
    ean: "7613036047227",
    name: "Gerber Organic for Baby - Măr și Sfeclă Roșie, 125 g",
    image: process.env.PUBLIC_URL + `/images/GerberMarSfeclaRosie_p1.jpg?v=${cacheBuster}`,
    Disponibilitate: {
      Barbu: 9,
      Dristor: 5,
      Plaza: 7,
    },
  },
  {
    ean: "7613036047517",
    name: "Gerber Organic for Baby - Măr, Caisă și Piersică, 125 g",
    image: process.env.PUBLIC_URL + `/images/GerberMarCaisaPiersica_p1.jpg?v=${cacheBuster}`,
    Disponibilitate: {
      Barbu: 6,
      Dristor: 3,
      Plaza: 4,
    },
  },
];

export default products;
