const container = document.getElementById("cards-container");

const plants = [
  {
    name: "Фікус Бенджаміна",
    description:
      "Елегантне деревце з густою кроною та маленькими блискучими листочками.",
    link: "ficusbenjemin.html",
    id: "ficus",
    photo:"photo/фікус бенджаміна.png"
  },
  {
    name: "Фікус Лірата",
    description:
      "великі, глянцеві листки у формі скрипки роблять його «зіркою інтер’єру»",
    link: "ficuslirata.html",
    id: "dracaena",
    photo:"photo/фікус лірата.png"
  },
  {
    name: "Монстера делікатесна",
    description: "Великі розрізані листки, справжня класика",
    link: "monsteradeli.html",
    id: "echeveria",
    photo:"photo/монстера делікатесна.png"
  },
  {
    name: "Бегонія королівська",
    description: "Декоративне листя з фантастичними візерунками",
    link: "fic.html",
    id: "fic",
    photo:"photo/бегонія королівська.jpg"
  },
  {
    name: "Цикламен перський",
    description: "Яскраві квіти, довготривале цвітіння",
    link: "fic.html",
    id: "ficus",
    photo:"photo/цигламен перський.jpg"
  },
  {
    name: "Фікус Еластика",
    description:
      "має товсті, темно-зелені або строкаті листки. Дуже витривалий і простий у догляді",
    link: "ficus.html",
    id: "fic",
    photo:"photo/фікус еластіка.jpg"
  },
  {
    name: "Монстера варієгатна",
    description: "Біла чи кремова варіація на листках, рідкість",
    link: "ficus.html",
    id: "fic",
    photo:"photo/монстера варієгатна.jpg"
  },
  {
    name: "Бегонія вічноквітуча",
    description: "Квітує цілий рік",
    link: "fic.html",
    id: "ficus",
    photo:"photo/бегонія вічноквітуча.jpg"
  },
  {
    name: "Міні-цикламени",
    description: "Компактні та милі, ідеально для подарунків",
    link: "fic.html",
    id: "ficus",
    photo:"photo/міні цикламени.jpg "
  },
  {
    name: "Товстянка Хобіт",
    description: "Оригінальні трубчасті листки",
    link: "fic.html",
    id: "ficus",
    photo:"photo/товстянка хоббіт.png"
  },
  {
    name: "Хавортія купчаста",
    description: "Листки прозорі на кінчиках, виглядає дуже ефектно",
    link: "fic.html",
    id: "ficus",
    photo:"photo/хавортія купчаста.jpg"
  },
  {
    name: "Хавортія маргарітіфера",
    description: "Великі білі крапки на темно-зелених листках",
    link: "fis.html",
    id: "ficus",
    photo:"photo/хавортія маргарітіфера.png"
  },
];

plants.forEach((plant) => {
  const card = document.createElement("a");
  card.href = plant.link;
  card.className = "card-link";
  card.innerHTML = `
        <div class="plant-card" id="${plant.id}">
          <img class="photoplants" src="${plant.photo}">
          <h3 class="name">${plant.name}</h3>
          <p class="description">${plant.description}</p>
        </div>
      `;
  container.appendChild(card);
});

document
  .getElementById("search")
  .addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll(".plant-card").forEach((card) => {
      const name = card
        .querySelector(".name")
        .textContent.toLowerCase();
      card.parentElement.style.display = name.includes(query)
        ? "block"
        : "none";
    });
  });

const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

let menuOpen = false;
menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;
  sideMenu.classList.toggle("show", menuOpen);
});


  document.addEventListener("click", (event) => {
    if (
      menuOpen &&
      !sideMenu.contains(event.target) &&
      event.target !== menuToggle
    ) {
      menuOpen = false;
      sideMenu.classList.remove("show");
    }
  });


  const themeSwitch = document.getElementById('theme-switch');

  // Перевірка збереженої теми
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
