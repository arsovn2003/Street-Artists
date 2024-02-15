function VisitorListingPage() {
  console.log("Visitor Listing Page");

  const fullscreen = document.querySelector("#fullscreen-content");
  const logo = document.querySelector("#logoImage");

  function drawArt(art) {
    const artHolder = document.createElement("div");
    artHolder.classList.add("art");

    const artistAndPriceContainer = document.createElement("div");
    artistAndPriceContainer.style.display = "flex";
    artistAndPriceContainer.style.justifyContent = "space-between";
    artistAndPriceContainer.style.padding = "0px 20px";

    const artistContainer = document.createElement("div");
    artistContainer.style.padding = "0px 20px";

    const image = document.createElement("img");
    image.setAttribute("src", art.image);

    const artist = document.createElement("span");
    artist.innerText = art.artist;
    artist.style.fontSize = "32px";
    artist.style.fontFamily = "'Reenie Beanie', cursive";

    const title = document.createElement("p");
    title.innerText = art.title;
    title.style.fontSize = "22px";

    const desc = document.createElement("p");
    desc.innerText = art.description;
    desc.style.fontSize = "18px";

    const price = document.createElement("p");
    price.innerText = `${art.price}$`;
    price.style.fontSize = "18px";
    price.style.backgroundColor = "#a0695f";
    price.style.color = "#ecd5bc";
    price.style.padding = "8px";
    price.style.borderRadius = "5px";
    price.setAttribute("class", "price-container");

    artHolder.appendChild(image);
    artHolder.appendChild(artistAndPriceContainer);
    artHolder.appendChild(artistContainer);
    artistAndPriceContainer.appendChild(artist);
    artistAndPriceContainer.appendChild(price);
    artistContainer.appendChild(title);
    artistContainer.appendChild(desc);

    return artHolder;
  }

  // Display all cards
  displayAllCards();

  function displayAllCards() {
    const filteredArtContainer = document.getElementById(
      "filtered-art-container"
    );
    filteredArtContainer.innerHTML = "";

    localStorage.getItem("publishedItems");
    const publishedItems = items.filter(item => item.isPublished);
    publishedItems.forEach(art => {
      const artHolder = drawArt(art);
      filteredArtContainer.appendChild(artHolder);
    });
  }

  // Filter by Title
  function filterByTitle() {
    const input = document.getElementById("byTitle").value.toLowerCase();
    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(input)
    );

    displayFilteredArt(filteredItems);
  }

  const select = document.querySelector("#byArtist");
  const container = document.getElementById("filtered-art-container");
  const selectedArtist = select.value;

  const uniqueArtists = items.map(item => item.artist);
  uniqueArtists.forEach(artist => {
    const option = document.createElement("option");
    option.value = artist;
    option.text = artist;
    select.appendChild(option);
  });

  // Filter by Artist
  function filterByArtist(selectedArtist) {
    const filteredItems = items.filter(
      item => selectedArtist === "" || item.artist === selectedArtist
    );

    displayFilteredArt(filteredItems);
  }

  // Filter by Price
  function filterByPrice() {
    const minPrice = parseInt(document.getElementById("Minimum").value);
    const maxPrice = parseInt(document.getElementById("Maximum").value);

    const filteredItems = items.filter(
      item => item.price >= minPrice && item.price <= maxPrice
    );

    displayFilteredArt(filteredItems);
  }

  function displayFilteredArt(filteredItems) {
    const filteredArtContainer = document.getElementById(
      "filtered-art-container"
    );
    filteredArtContainer.innerHTML = "";

    filteredItems.forEach(art => {
      const artHolder = drawArt(art);
      filteredArtContainer.appendChild(artHolder);
    });
  }

  //Filter by Type
  const typeSelect = document.getElementById("byType");

  itemTypes.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeSelect.appendChild(option);
  });

  const selectedType = typeSelect.value;

  function filterByType() {
    if (selectedType === "choose") {
      displayAllCards();
    } else {
      const filteredItems = items.filter(item => item.type === selectedType);
      displayFilteredArt(filteredItems);
    }
  }

  // show fullscreen
  const filter = document.querySelector("#filter");
  filter.addEventListener("click", () => {
    const fullscreen = document.querySelector("#fullscreen-content");
    fullscreen.style.display = "block";
    logo.style.display = "none";
    const buttonClose = document.querySelector("#close-fullscreen-button");
    buttonClose.style.display = "block";
    buttonClose.addEventListener("click", () => {
      fullscreen.style.display = "none";
      logo.style.display = "block";
    });
  });

  // filter button
  const searchBtn = document.getElementById("filter-done");
  searchBtn.addEventListener("click", () => {
    fullscreen.style.display = "none";
    logo.style.display = "block";

    const input = document.getElementById("byTitle").value;
    const selectedArtist = document.querySelector("#byArtist").value;
    const minPrice = parseInt(document.getElementById("Minimum").value);
    const maxPrice = parseInt(document.getElementById("Maximum").value);

    if (input !== "") {
      filterByTitle();
    } else if (selectedArtist !== "") {
      filterByArtist(selectedArtist);
    } else if (minPrice !== "" && maxPrice !== "") {
      filterByPrice();
    } else if (selectedType !== "") {
      filterByType();
    } else {
      displayAllCards();
    }
  });
}
