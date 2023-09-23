function loadData(category) {
    $.ajax({
      url: `https://swapi.dev/api/${category}/`,
      method: 'GET',
      success: function(data) {
        if (category === 'films') {
          displayFilms(data.results);
        } else {
          displayData(data.results, category);
        }
      },
      error: function(error) {
        console.error(`Erro ao obter os dados da categoria ${category} da API SWAPI:`, error);
      }
    });
  }
  
  function displayData(data, category) {
    const dataContainer = document.getElementById('dados');
    dataContainer.innerHTML = '';  // Limpa o conteúdo anterior
  
    if (data.length === 0) {
      dataContainer.innerHTML = `<p>Nenhum dado encontrado para a categoria ${category}.</p>`;
      return;
    }
  
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
  
      let displayText = '';
  
      if (category === 'people') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Gender:</strong> ${item.gender}, <strong>Height:</strong> ${item.height}`;
      } else if (category === 'planets') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Climate:</strong> ${item.climate}, <strong>Population:</strong> ${item.population}`;
      } else if (category === 'species') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Classification:</strong> ${item.classification}, <strong>Language:</strong> ${item.language}`;
      } else if (category === 'starships') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Model:</strong> ${item.model}, <strong>Manufacturer:</strong> ${item.manufacturer}`;
      } else if (category === 'vehicles') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Model:</strong> ${item.model}, <strong>Manufacturer:</strong> ${item.manufacturer}`;
      }
  
      itemElement.innerHTML = `
  <h2>${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
        ${displayText}
      `;
  
      dataContainer.appendChild(itemElement);
    });
  }
  
  function displayFilms(films) {
    const dataContainer = document.getElementById('dados');
    dataContainer.innerHTML = '';  // Limpa o conteúdo anterior
  
    if (films.length === 0) {
      dataContainer.innerHTML = '<p>Nenhum filme encontrado.</p>';
      return;
    }
  
    films.forEach(film => {
      const filmElement = document.createElement('div');
      filmElement.classList.add('item');
      filmElement.innerHTML = `

        <h2>${film.title}</h2>
        <strong>Title:</strong> ${film.title}<br>
        <strong>Episode:</strong> ${film.episode_id}<br>
        <strong>Director:</strong> ${film.director}<br>
        <strong>Producer:</strong> ${film.producer}<br>
        <strong>Release Date:</strong> ${film.release_date}
      `;
  
      dataContainer.appendChild(filmElement);
    });
  }
  