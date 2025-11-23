const contactCard = document.getElementById("contactCard");

window.addEventListener("mousemove", (event) => {
  const x = (window.innerWidth / 2 - event.clientX) / 25;
  const y = (window.innerHeight / 2 - event.clientY) / 25;

  contactCard.style.transform =
    `rotateX(${y}deg) rotateY(${-x}deg) translateZ(10px)`;
});

window.addEventListener("mouseleave", () => {
  contactCard.style.transform = "rotateX(0) rotateY(0) translateZ(0)";
});
