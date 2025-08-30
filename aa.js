const container = document.getElementById('cards-container');

    // Дані для кожної рослини
    const plants = [
      { name: "Фікус Бенджаміна", description: "Декоративна рослина з блискучим листям", link: "ficus.html", id: "ficus" },
      { name: "Драцена", description: "Екзотична рослина з довгим листям", link: "dracaena.html", id: "dracaena" },
      { name: "Сукулент Ехеверія", description: "Маленький сукулент з розеткою", link: "echeveria.html", id: "echeveria" },
      // Додай ще 17 рослин тут
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
