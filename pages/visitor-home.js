function VisitorHomePage() {
    console.log('Visitor Home Page');

    const findBtn = document.querySelector("#find-btn");
    findBtn.addEventListener("click", function() {
        const hash = location.hash;
        const visitorListingPage = document.querySelector("#visitor-listing-page");
        location.hash = "#visitor-listing-page";
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        moveSlide(1); 
    });

    document.getElementById('prevBtn').addEventListener('click', function () {
        moveSlide(-1); 
    });

    let currentSlide = 0; 
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    function moveSlide(direction) {
        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = totalSlides - 1; 
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0; 
        }

        document.querySelectorAll('.carousel-item').forEach((slide) => {
            slide.style.display = 'none';
        });

        document.querySelectorAll('.carousel-item')[currentSlide].style.display = 'block';
    }
}