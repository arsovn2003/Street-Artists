function ArtistHomePage() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
        
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    const selectedArtist = localStorage.getItem("selectedArtist");
    if(selectedArtist) {
        const artistParagraph = document.querySelector("#artistParagraph");
        artistParagraph.textContent = selectedArtist;
    }

    const artistItems = items.filter((item) => item.artist === selectedArtist);

    let itemsNumber = document.querySelector('#itemsNumber');
    itemsNumber.innerHTML = selectedArtist.length;

    let soldItems = artistItems.filter((item) => item.priceSold > 0);

    let itemsSold = document.querySelector("#itemsSold");
    itemsSold.innerHTML = `${soldItems.length}`;

    let soldPrice = []
    for (let i = 0; i < itemsSold.length; i++) {
        soldPrice.push(itemsSold[i].priceSold)
    }

    const sumOfSoldItems = soldItems.reduce((acc, item) => acc + item.priceSold, 0)
    let totalIncome = document.querySelector('#total');
    totalIncome.innerHTML = `${sumOfSoldItems}`;

}