const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  console.log(auto);
  // get current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    // add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

const prevSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.previousElementSibling) {
    // add current to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

// button event
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// auto slide
if (auto) {
  // run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
