// LOADER

window.addEventListener("load", () => {

  document.getElementById("loader").style.display = "none";

});

// DARK MODE

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {

    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

  } else {

    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

  }

});

// SCROLL REVEAL

const elements = document.querySelectorAll(
  ".card,.timeline-item,.gallery-item"
);

const reveal = () => {

  elements.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";

    }

  });

};

elements.forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "0.7s";

});

window.addEventListener("scroll", reveal);

reveal();