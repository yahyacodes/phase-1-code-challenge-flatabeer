document.addEventListener("DOMContentLoaded", () => {});

const beerName = document.querySelector("#beer-name");
const beerImage = document.querySelector("#beer-image");
const beerDes = document.querySelector("#beer-description");
const reviewList = document.querySelector("#review-list");

fetch("http://localhost:3000/beers")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((beer) => {
      beerName.innerHTML = beer.name;
      beerImage.src = beer.image_url;
      beerDes.innerHTML = beer.description;
      reviewList.innerHTML = beer.reviews;

      const navMenu = () => {
        const navList = document.querySelector("#beer-list");

        for (const item of data) {
          const listItem = document.createElement("li");
          listItem.innerHTML = `${item.name}`;
          navList.appendChild(listItem);
        }
      };
      navMenu();
    })
  );
