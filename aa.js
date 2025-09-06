const container = document.getElementById('cards-container');

    // Дані для кожної рослини
    const plants = [
      { name: "Фікус Бенджаміна", description: "Елегантне деревце з густою кроною та маленькими блискучими листочками.", link: "ficusbenjemin.html", id: "ficus" },
      { name: "Фікус Лірата", description: "великі, глянцеві листки у формі скрипки роблять його «зіркою інтер’єру»", link: "dracaena.html", id: "dracaena" },
      { name: "Монстера делікатесна", description: "Великі розрізані листки, справжня класика", link: "echeveria.html", id: "echeveria" },
      { name: "Бегонія королівська", description: "Декоративне листя з фантастичними візерунками", link: "ficus.html", id: "ficus" },
      {name: "Цикламен перський", description: "Яскраві квіти, довготривале цвітіння", link: "ficus.html", id: "ficus" },
    { name: "Фікус Еластика", description: "має товсті, темно-зелені або строкаті листки. Дуже витривалий і простий у догляді", link: "ficus.html", id: "ficus" },
     { name: "Монстера варієгатна", description: "Біла чи кремова варіація на листках, рідкість", link: "ficus.html", id: "ficus" },
    { name: "Бегонія вічноквітуча", description: "Квітує цілий рік", link: "ficus.html", id: "ficus" },
    { name: "Міні-цикламени", description: "Компактні та милі, ідеально для подарунків", link: "ficus.html", id: "ficus" },
    { name: "Товстянка Хобіт", description: "Оригінальні трубчасті листки", link: "ficus.html", id: "ficus" },
     { name: "Хавортія купчаста", description: "Листки прозорі на кінчиках, виглядає дуже ефектно", link: "ficus.html", id: "ficus" },
    { name: "Хавортія маргарітіфера", description: "Великі білі крапки на темно-зелених листках", link: "ficus.html", id: "ficus" },
    ];

    plants.forEach(plant => {
      const card = document.createElement('a');
      card.href = plant.link;
      card.className = 'card-link';
      card.innerHTML = `
        <div class="plant-card" id="${plant.id}">
          <div class="photo">фото</div>
          <h3 class="name">${plant.name}</h3>
          <p class="description">${plant.description}</p>
        </div>
      `;
      container.appendChild(card);
    });

    // Пошук
    document.getElementById('search').addEventListener('input', function () {
      const query = this.value.toLowerCase();
      document.querySelectorAll('.plant-card').forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase();
        card.parentElement.style.display = name.includes(query) ? 'block' : 'none';
      });
    });

    // Меню відкриття/закриття
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    let menuOpen = false;
    menuToggle.addEventListener('click', () => {
      menuOpen = !menuOpen;
      sideMenu.classList.toggle('show', menuOpen);
    });

