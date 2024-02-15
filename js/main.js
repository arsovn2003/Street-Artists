window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
const homePage = document.querySelector("#home-page");
const artistHomePage = document.querySelector("#artist-home-page");
const visitorHomePage = document.querySelector("#visitor-home-page");
const visitorListingPage = document.querySelector("#visitor-listing-page");
const artistItemsPage = document.querySelector("#artist-items-page");
const auctionPage = document.querySelector("#auction-container");

const visitorContainer = document.querySelector(".visitor-container");
visitorContainer.addEventListener("click", () => {
    location.hash = "visitor-home-page";
});

const goToAuc = document.querySelector(".gotoauc");
goToAuc.addEventListener("click", () => {
    location.hash = "auction-container";
})

const clickDiv = document.querySelector(".click-div")
clickDiv.addEventListener("click", () => {
    location.hash = "";
})

function handleRoute() {
    const hash = location.hash;
    
    switch (hash) {
        case "": {
            homePage.style.display = "block";
            artistHomePage.style.display = "none";
            visitorHomePage.style.display = "none";
            visitorListingPage.style.display = "none";
            artistItemsPage.style.display = "none";
            auctionPage.style.display = "none";
            HomePage();
            break;
        }
        case "#artist-home-page": {
            homePage.style.display = "none";
            artistHomePage.style.display = "block";
            visitorHomePage.style.display = "none";
            visitorListingPage.style.display = "none";
            artistItemsPage.style.display = "none";
            auctionPage.style.display = "none";
            ArtistHomePage();
            break;
        }
        case "#visitor-home-page": {
            homePage.style.display = "none";
            artistHomePage.style.display = "none";
            visitorHomePage.style.display = "block";
            visitorListingPage.style.display = "none";
            artistItemsPage.style.display = "none";
            auctionPage.style.display = "none";
            VisitorHomePage();
            break;
        }
        case "#visitor-listing-page": {
            homePage.style.display = "none";
            artistHomePage.style.display = "none";
            visitorHomePage.style.display = "none";
            visitorListingPage.style.display = "block";
            artistItemsPage.style.display = "none";
            VisitorListingPage();
            break;
        }
        case "#artist-items-page": {
            homePage.style.display = "none";
            artistHomePage.style.display = "none";
            visitorHomePage.style.display = "none";
            visitorListingPage.style.display = "none";
            artistItemsPage.style.display = "block";
            auctionPage.style.display = "none";
            ArtistItems();
            break;
        }
        case "#auction-container": {
            homePage.style.display = "none";
            artistHomePage.style.display = "none";
            visitorHomePage.style.display = "none";
            visitorListingPage.style.display = "none";
            artistItemsPage.style.display = "none";
            auctionPage.style.display = "block";
            ArtistItems();
            break;
        }
        default: {
            location.hash = "";
            break;
        }
    }
}

