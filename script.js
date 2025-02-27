document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let currentPara = document.getElementById(this.dataset.current);
            let nextPara = document.getElementById(this.dataset.next);

            if (currentPara) currentPara.classList.add("hidden");
            if (nextPara) nextPara.classList.remove("hidden");

            this.classList.add("hidden");
            if (nextPara) nextPara.nextElementSibling.classList.remove("hidden");
        });
    });

    document.getElementById("endStory").addEventListener("click", function () {
        document.getElementById("storyContainer").classList.add("hidden");
        document.getElementById("happyEnd").classList.remove("hidden");

        setTimeout(() => {
            document.getElementById("happyEnd").classList.add("hidden");
            document.getElementById("slideshow").classList.remove("hidden");
            startSlideshow();
        }, 3000);
    });

    function startSlideshow() {
        let slides = document.querySelectorAll(".slide");
        let index = 0;

        function showSlide() {
            slides.forEach(slide => slide.classList.add("hidden"));
            slides[index].classList.remove("hidden");

            index++;
            if (index < slides.length) {
                setTimeout(showSlide, 3000);
            } else {
                setTimeout(() => {
                    document.getElementById("slideshow").classList.add("hidden");
                    document.getElementById("proposal").style.display = "block";
                }, 3000);
            }
        }

        showSlide();
    }

    document.getElementById("yesButton").addEventListener("click", function () {
        document.body.innerHTML = `<h1 class="glow">Muzya Pata Tha 
        I Love You DOBO ❤️</h1>`;
    });

    document.getElementById("noButton").addEventListener("mouseover", function () {
        this.style.position = "absolute";
        this.style.left = Math.random() * (window.innerWidth - 100) + "px";
        this.style.top = Math.random() * (window.innerHeight - 50) + "px";
    });
});
