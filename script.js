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
  // HTML-elementer på opsamlingssiden
  const brugerNavn = document.querySelector("#bruger-navn");
  const resultatBillede = document.querySelector(".resultat-billede");
  const resultatNavn = document.querySelector(".resultat-navn");
  const resultatBeskrivelse = document.querySelector(".resultat-beskrivelse");

  /************* BLOMSTER **************/
  const blomster = [
    {
      navn: "Koral Dahlia",
      beskrivelse:
        "Du har en stærk personlighed og en kreativ sjæl. Du elsker at udtrykke dig selv og sætter pris på de små detaljer, der gør livet lidt mere farverigt.",
      billede: "./formular_imgs/dahlia.png",
    },
    {
      navn: "Solsikke",
      beskrivelse:
        "Du er fuld af liv, varme og positiv energi. Du elsker solrige dage, gode oplevelser og mennesker omkring dig. Du har en evne til at sprede glæde, og din tilstedeværelse får ofte andre til at smile. Du minder os om at vende ansigtet mod lyset og nyde de små øjeblikke.",
      billede: "./formular_imgs/solsikke.png",
    },
    {
      navn: "Ærteblomst",
      beskrivelse:
        "Du har en blid og drømmende personlighed. Du finder skønhed i de små detaljer og sætter pris på nærvær, kærlighed og de øjeblikke, der får tiden til at stå stille. Du har en særlig evne til at skabe varme omkring dig og se det eventyrlige i hverdagen.",
      billede: "./formular_imgs/aerteblomst.png",
    },
    {
      navn: "Anemone",
      beskrivelse:
        "Du er en fri sjæl med en nysgerrighed på verden omkring dig. Du elsker nye oplevelser og finder glæde i at gå på opdagelse. Du trives bedst, når der er plads til at drømme, udforske og følge din egen vej. Du minder os om, at der altid venter noget nyt lige om hjørnet.",
      billede: "./formular_imgs/anemone",
    },
    {
      navn: "Rosa haverose",
      beskrivelse:
        "Du er romantisk af natur og har hjertet på rette sted. Du sætter pris på kærlighed, skønhed og de særlige øjeblikke, der gør livet værdifuldt. Du elsker stemningsfulde omgivelser og har sans for de små detaljer. For dig ligger magien ofte i det nære og det personlige.",
      billede: "./formular_imgs/rose.png",
    },
    {
      navn: "Månelilje",
      beskrivelse:
        "Du er en rolig og harmonisk sjæl, der finder skønhed i stilheden og de små detaljer. Du sætter pris på balance, fordybelse og smukke omgivelser. Der er noget særligt ved din måde at være i verden på – du behøver ikke fylde meget for at efterlade et indtryk.",
      billede: "./formular_imgs/manelilje.png",
    },
    {
      navn: "Blå valmue",
      beskrivelse:
        "Du er en unik og fantasifuld sjæl med et blik for det usædvanlige. Du elsker det eventyrlige og har en særlig evne til at se muligheder, hvor andre måske ikke gør. Du lader dig inspirere af verden omkring dig og har modet til at være helt din egen.",
      billede: "./formular_imgs/valmue.png",
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

  // Point til Solsikke
  let solsikkePoint = 0;

  if (farve === "gul" || farve === "orange") {
    solsikkePoint++;
  }

  if (personlighed === "energisk") {
    solsikkePoint++;
  }

  if (omgivelser <= 40) {
    solsikkePoint++;
  }

  if (arstid === "sommer") {
    solsikkePoint++;
  }

  if (miljo === "strand" || miljo === "slotseng") {
    solsikkePoint++;
  }

  // Point til Ærteblomst
  let aerteblomstPoint = 0;

  if (farve === "rosa" || farve === "lilla" || farve === "hvid") {
    aerteblomstPoint++;
  }

  if (personlighed === "rolig" || personlighed === "romantisk") {
    aerteblomstPoint++;
  }

  if (omgivelser >= 60) {
    aerteblomstPoint++;
  }

  if (arstid === "foraar") {
    aerteblomstPoint++;
  }

  if (miljo === "have" || miljo === "slotshave") {
    aerteblomstPoint++;
  }

  // Point til Anemone
  let anemonePoint = 0;

  if (farve === "lilla" || farve === "hvid" || farve === "rod") {
    anemonePoint++;
  }

  if (personlighed === "eventyrlig") {
    anemonePoint++;
  }

  if (omgivelser <= 40) {
    anemonePoint++;
  }

  if (arstid === "foraar") {
    anemonePoint++;
  }

  if (miljo === "skov" || miljo === "slotseng") {
    anemonePoint++;
  }

  // Point til Rosa haverose
  let rosePoint = 0;

  if (farve === "rosa" || farve === "rod" || farve === "hvid") {
    rosePoint++;
  }

  if (personlighed === "romantisk") {
    rosePoint++;
  }

  if (omgivelser >= 60) {
    rosePoint++;
  }

  if (arstid === "sommer") {
    rosePoint++;
  }

  if (miljo === "slotshave" || miljo === "have") {
    rosePoint++;
  }

  // Point til Månelilje
  let maneliljePoint = 0;

  if (farve === "hvid" || farve === "lilla") {
    maneliljePoint++;
  }

  if (personlighed === "rolig") {
    maneliljePoint++;
  }

  if (omgivelser <= 40) {
    maneliljePoint++;
  }

  if (arstid === "vinter") {
    maneliljePoint++;
  }

  if (miljo === "skov" || miljo === "slotshave") {
    maneliljePoint++;
  }

  // Point til Blå valmue
  let valmuePoint = 0;

  if (farve === "lilla" || farve === "hvid" || farve === "gron") {
    valmuePoint++;
  }

  if (personlighed === "eventyrlig" || personlighed === "rolig") {
    valmuePoint++;
  }

  if (omgivelser >= 60) {
    valmuePoint++;
  }

  if (arstid === "foraar") {
    valmuePoint++;
  }

  if (miljo === "skov" || miljo === "slotshave") {
    valmuePoint++;
  }

  // pointberegning

  // Find blomsten med flest point
  let hojestePoint = dahliaPoint;
  let valgtBlomst = blomster[0];

  if (solsikkePoint > hojestePoint) {
    hojestePoint = solsikkePoint;
    valgtBlomst = blomster[1];
  }

  if (aerteblomstPoint > hojestePoint) {
    hojestePoint = aerteblomstPoint;
    valgtBlomst = blomster[2];
  }

  if (anemonePoint > hojestePoint) {
    hojestePoint = anemonePoint;
    valgtBlomst = blomster[3];
  }

  if (rosePoint > hojestePoint) {
    hojestePoint = rosePoint;
    valgtBlomst = blomster[4];
  }

  if (maneliljePoint > hojestePoint) {
    hojestePoint = maneliljePoint;
    valgtBlomst = blomster[5];
  }

  if (valmuePoint > hojestePoint) {
    hojestePoint = valmuePoint;
    valgtBlomst = blomster[6];
  }

  // Vis brugerens navn
  brugerNavn.textContent = navn;

  // Vis blomstens resultat
  resultatBillede.src = valgtBlomst.billede;
  resultatBillede.alt = valgtBlomst.navn;
  resultatNavn.textContent = "Du er en " + valgtBlomst.navn;
  resultatBeskrivelse.textContent = valgtBlomst.beskrivelse;

  // griv frimærket brugerens valgte farve
  blomsterFrimaerke.dataset.color = farve;
}
