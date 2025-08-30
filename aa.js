// Генерація 20 карток
    const container = document.getElementById('cards-container');
    for (let i = 1; i <= 20; i++) {
      const card = document.createElement('div');
      card.className = 'plant-card';
      card.innerHTML = `
        <div class="photo">фото</div>
        <h3 class="name">назва ${i}</h3>
        <p class="description">короткий опис про рослину ${i}</p>
      `;
      container.appendChild(card);
    }

    // Пошук
    document.getElementById('search').addEventListener('input', function () {
      const query = this.value.toLowerCase();
      document.querySelectorAll('.plant-card').forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase();
        card.style.display = name.includes(query) ? 'block' : 'none';
      });
    });

    // Меню
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    menuToggle.addEventListener('click', () => {
      sideMenu.classList.toggle('show');
    });