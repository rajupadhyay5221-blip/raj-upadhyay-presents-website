// script.js

// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.display = "none";

  }, 2000);

});

// CONTACT FORM WHATSAPP

document.getElementById("contactForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  let name =
  document.querySelector('input[type="text"]').value;

  let email =
  document.querySelector('input[type="email"]').value;

  let message =
  document.querySelector("textarea").value;

  let text =
  `Hello, I want video editing.%0A%0A` +
  `Name: ${name}%0A` +
  `Email: ${email}%0A` +
  `Message: ${message}`;

  let phoneNumber = "916295404996";

  let url =
  `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank");

});

// SCROLL ANIMATION

const cards = document.querySelectorAll(
".card,.price-card,.video-box"
);

cards.forEach(card=>{

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";

});

window.addEventListener("scroll", ()=>{

  cards.forEach(card=>{

    const position =
    card.getBoundingClientRect().top;

    const screen =
    window.innerHeight;

    if(position < screen - 100){

      card.style.opacity = "1";

      card.style.transform = "translateY(0)";

    }

  });

});