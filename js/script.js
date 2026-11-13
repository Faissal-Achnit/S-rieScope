const series = [];

const cardes = document.querySelector("#cardes");

const inputrechrecher = document.querySelector("#rechreche");

const select = document.querySelector("#select");

async function fetchData() {
  const response = await fetch("https://api.tvmaze.com/shows?page=0");
   console.log(series);
   
  if (!response.ok) {
    console.log("no data ");
  }

  const data = await response.json();
  for (let i = 0; i < 20; i++) series.push(data[i]);

  AfficherLescarte(series);
}

fetchData();

function AfficherLescarte(series) {
  cardes.textContent = "";
  series.forEach((serie) => {
    const article = document.createElement("article");
    article.classList.add(
      "rounded-[14px]",
      "border",
      "border-[#393939]",
      "bg-[#191919]",
      "overflow-hidden",
    );
    const imgeContanire = document.createElement("div");
    imgeContanire.classList.add("flex", "flex-col");

    const image = document.createElement("img");
    image.textContent = serie.image;
    image.classList.add(
      "rounded-[9px]",
      "w-full",
      "aspect-video",
      "object-cover",
    );
    image.setAttribute(
      "src",
      serie.image?.original || serie.image?.medium || "main.svg",
    );

    const genres = document.createElement("div");
    genres.className = "p-2";

    const nameMovie = document.createElement("p");
    nameMovie.classList.add("text-[#FAFAFA]", "text-[15px]", "font-bold");
    nameMovie.textContent = serie.name;

    const genresContanire = document.createElement("div");

    genresContanire.className = "flex gap-2 flex-wrap";

    serie.genres.forEach((genre) => {
      const span = document.createElement("span");
      span.textContent = genre;
      span.className =
        "border-[#292929] p-1 bg-[#292929] border rounded-[9px] text-[#EEEEEE] text-[11px]";
      genresContanire.appendChild(span);
    });

    const descrption = document.createElement("div");
    descrption.className =
      "text-[9px] font-normal text-[#BABABA] leading-3 line-clamp-2 mt-2";

    const temp = document.createElement("div");
    temp.innerHTML = serie.summary || "";

    descrption.textContent = temp.textContent;

    imgeContanire.appendChild(image);
    genres.appendChild(nameMovie);
    genres.appendChild(genresContanire);
    genres.appendChild(descrption);

    article.appendChild(imgeContanire);
    article.appendChild(genres);

    cardes.appendChild(article);
  });

  series.forEach((element) => {
    element.genres.forEach((genre) => {
      let existe = false;

      document.querySelectorAll("#select option").forEach((option) => {
        if (option.value === genre) {
          existe = true;
        }
      });

      if (!existe) {
        const opt = document.createElement("option");

        opt.textContent = genre;
        opt.value = genre;

        select.appendChild(opt);
      }
    });
  });
}

function rechercherEtfiltter() {
  const nom = inputrechrecher.value.toLowerCase().trim();
  const genre = select.value;

  const resulta = series.filter((serie) => {
    const rechercheNom = serie.name.toLowerCase().includes(nom);

    const rechercheGenre =
      genre === "Tous les genres" || serie.genres.includes(genre);

    return rechercheNom && rechercheGenre;
  });

  AfficherLescarte(resulta);
}

inputrechrecher.addEventListener("input", triter);

select.addEventListener("change", triter);

const nomSerie = document.querySelector("#nom-serie");
const Genre = document.querySelector("#Genre");
const description = document.querySelector("#description");

const frmaulaireAjouter = document.querySelector("#frmaulaireAjouter");

function ajouterSeries() {
  const nomserie = nomSerie.value.toLowerCase().trim();
  const genre = Genre.value.toLowerCase().trim();
  const descriPtion = description.value.toLowerCase().trim();

  const nouvelleSerie = {
    name: nomserie,
    genres: [genre],
    summary: descriPtion,
  };
  series.unshift(nouvelleSerie);

  AfficherLescarte(series);

  frmaulaireAjouter.reset();
}

frmaulaireAjouter.addEventListener("submit", (e) => {
  e.preventDefault();
  ajouterSeries();
});
