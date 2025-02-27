document.addEventListener("DOMContentLoaded", function () {
    function showElement(id) {
        document.getElementById(id).classList.remove("hidden");
    }

    document.getElementById("readNote").addEventListener("click", function () {
        showElement("note");
    });

    document.getElementById("findCandles").addEventListener("click", function () {
        showElement("candles");
    });

    document.getElementById("confrontShadow").addEventListener("click", function () {
        showElement("shadow");
    });

    document.getElementById("exploreFurther").addEventListener("click", function () {
        showElement("darkHallway");
    });

    document.getElementById("run").addEventListener("click", function () {
        showElement("caught");
    });

    document.getElementById("hide").addEventListener("click", function () {
        showElement("caught");
    });

    document.getElementById("finalChoice").addEventListener("click", function () {
        showElement("happyEnd");
        startSlideshow();
    });

    function startSlideshow() {
        let slideIndex = 0;
        function showSlides() {
            let slides = document.querySelectorAll(".slide");
            slides.forEach(slide => (slide.style.display = "none"));
            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000);
        }
        showSlides();
    }
});
