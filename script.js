// Load Lottie animation into the hero card on index page
const lottieContainer = document.getElementById("lottie-hero");

if (lottieContainer && typeof lottie !== "undefined") {
  lottie.loadAnimation({
    container: lottieContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    // Make sure this matches your JSON file name
    path: "animation.json"
  });
}

// Set year in footer (for all pages that have #year)
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
