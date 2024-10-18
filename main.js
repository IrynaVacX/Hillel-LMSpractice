"use strict";
document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;

    const slidesArr = document.querySelectorAll(".slides-container img");
    const dotsContainer = document.getElementById("dotsId");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    slidesArr.forEach((slide, index) => {
        const dot = document.createElement("label");
        const inp = document.createElement("input");
        const span = document.createElement("span");
        dot.classList.toggle("custom-radio", true);
        inp.type = "radio";
        inp.name = "radio";
        inp.value = index;
        inp.checked = index === currentSlide;
        span.classList.toggle("radio-mark", true);
        span.after(index === currentSlide);
        dot.appendChild(inp);
        dot.appendChild(span);
        dot.addEventListener("click", () => {
            currentSlide = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    updateSlider();

    function updateSlider() {
        slidesArr.forEach((slide, index) => {
            slide.classList.remove("active");
            dotsContainer.children[index].classList.remove("active");
        });

        slidesArr[currentSlide].classList.add("active");
        dotsContainer.children[currentSlide].children[0].checked = true;

        prevBtn.classList.toggle("hidden-btn", currentSlide === 0);
        nextBtn.classList.toggle("hidden-btn", currentSlide === slidesArr.length - 1);
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    }
    function nextSlide() {
        if (currentSlide < slidesArr.length - 1) {
            currentSlide++;
            updateSlider();
        }
    }
});
