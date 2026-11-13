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
const blomsterFrimaerke = document.querySelector(".blomster-frimaerke");
if (blomsterFrimaerke) {
  const params = new URLSearchParams(window.location.search);

  const navn = params.get("navn");
  const farve = params.get("farve");
  const personlighed = params.get("personlighed");
  const omgivelser = params.get("omgivelser");
  const arstid = params.get("arstid");
  const miljo = params.get("miljo");

  /************* BLOMSTER **************/
  const blomster = [
    {
      navn: "Koral Dahlia",
      beskrivelse:
        "Du har en stærk personlighed og en kreativ sjæl. Du elsker at udtrykke dig selv og sætter pris på de små detaljer, der gør livet lidt mere farverigt.",
      billede: "./imgs/dahlia.png",
    },
    {
      navn: "Solsikke",
      beskrivelse:
        "Du er fuld af liv, varme og positiv energi. Du elsker solrige dage, gode oplevelser og mennesker omkring dig.",
      billede: "./imgs/solsikke.png",
    },
    {
      navn: "Ærteblomst",
      beskrivelse:
        "Du har en blid og drømmende personlighed. Du finder skønhed i de små detaljer og sætter pris på nærvær og kærlighed.",
      billede: "./imgs/aerteblomst.png",
    },
    {
      navn: "Anemone",
      beskrivelse:
        "Du er en fri sjæl med en nysgerrighed på verden omkring dig. Du elsker nye oplevelser og finder glæde i at gå på opdagelse.",
      billede: "./imgs/anemone.png",
    },
    {
      navn: "Rosa haverose",
      beskrivelse:
        "Du er romantisk af natur og har hjertet på rette sted. Du sætter pris på kærlighed, skønhed og de særlige øjeblikke.",
      billede: "./imgs/rose.png",
    },
    {
      navn: "Månelilje",
      beskrivelse:
        "Du er en rolig og harmonisk sjæl, der finder skønhed i stilheden og de små detaljer.",
      billede: "./imgs/manelilje.png",
    },
    {
      navn: "Blå valmue",
      beskrivelse:
        "Du er en unik og fantasifuld sjæl med et blik for det usædvanlige. Du elsker det eventyrlige og har modet til at være helt din egen.",
      billede: "./imgs/valmue.png",
    },
  ];

  // Point til Koral Dahlia
  let dahliaPoint = 0;

  if (farve === "rod" || farve === "orange" || farve === "rosa") {
    dahliaPoint++;
  }

  if (personlighed === "energisk") {
    dahliaPoint++;
  }

  if (omgivelser >= 60) {
    dahliaPoint++;
  }

  if (arstid === "efteraar" || arstid === "sommer") {
    dahliaPoint++;
  }

  if (miljo === "slotseng" || miljo === "have") {
    dahliaPoint++;
  }

  const brugerNavn = document.querySelector("#bruger-navn");

  brugerNavn.textContent = navn;
}
