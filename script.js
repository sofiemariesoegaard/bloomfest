// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

if (svgPlaceholder) {
  const krans = document.querySelector("#details-krans");
  const bod = document.querySelector("#details-bod");
  const drinks = document.querySelector("#details-drinks");

  krans.addEventListener("toggle", updateSvgPosition);
  bod.addEventListener("toggle", updateSvgPosition);
  drinks.addEventListener("toggle", updateSvgPosition);

  function updateSvgPosition() {
    console.log("updateSvgPosition");
    const openDetails = document.querySelector(".accordion-item[open]");

    if (openDetails) {
      // Hvis en drop-down er åben, sæt data-position (krans, bod eller drinks) på containeren
      svgPlaceholder.dataset.position = openDetails.dataset.position;
    } else {
      // Hvis ingen er åbne, fjern data-position igen
      delete svgPlaceholder.dataset.position;
    }
  }
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
