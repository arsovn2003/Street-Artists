function HomePage() {
  console.log('Home Page');

  const select = document.querySelector("#selected");

 fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    const uniqueArtists = data.map((user) => user.name);

    uniqueArtists.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.text = name;
      select.appendChild(option);
    });
  })

  select.addEventListener("change", function() {
      const selectedArtist = select.value;
      if(selectedArtist !== "") {
        localStorage.setItem("selectedArtist", selectedArtist);
      }

      if(selectedArtist) {
        const hash = location.hash;
        const artistHomePage = document.querySelector("#artist-home-page");
        location.hash = "#artist-home-page";
      }
  });
};