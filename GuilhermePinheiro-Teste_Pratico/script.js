let currentPage = 1;
let currentCategory = '';
let maxItemsToShow = 6;  // Defina o número máximo de itens a serem exibidos

const loadingContainer = document.getElementById('loading-container');
  loadingContainer.innerHTML = '<div class="spinner-border text-warning" role="status" id="loading-spinner"><span class="visually-hidden">Carregando...</span></div>';

  loadingContainer.style.display = 'none';
  

function loadData(category) {
  currentCategory = category;
  currentPage = 1;
  fetchData(category, currentPage);
}

function loadNextPage() {
  currentPage++;
  fetchData(currentCategory, currentPage);
  
}

function loadPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    fetchData(currentCategory, currentPage);
  }
}

function fetchData(category, page) {
  

    loadingContainer.style.display = 'block';
  $.ajax({
    url: `https://swapi.dev/api/${category}/?page=${page}`,
    method: 'GET',
    success: function(data) {
      displayData(data.results, category);
      loadingContainer.style.display = 'none';
    },
    error: function(error) {
      console.error(`Erro ao obter os dados da categoria ${category} da API SWAPI:`, error);
      loadingContainer.style.display = 'none';
    }
  });
}

function displayData(data, category) {
  const dataContainer = document.getElementById('dados');
  const dataBtn = document.getElementById('btn-dados');
  dataContainer.innerHTML = '';
  

  if (data.length === 0) {
    dataContainer.innerHTML = `<p>Nenhum dado encontrado para a categoria ${category}.</p>`;
   
    return;
  }

  // Limita a exibição apenas à quantidade máxima de itens
  const limitedData = data.slice(0, maxItemsToShow);

  limitedData.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('transparent-bg');
    card.classList.add('my-3');
    const collapseId = `${category}-collapse-${index}`;
    
    if (category === 'films') {
      card.innerHTML = `
        <div class="card-header " id="heading${collapseId}">
          <h5 class="mb-0">
            <button class="btn  btn-outline-warning w-100" data-toggle="collapse" data-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
              ${item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </button>
          </h5>
        </div>

        <div id="${collapseId}" class="collapse " aria-labelledby="heading${collapseId}" data-parent="#dados">
          <div class="card-body text-white ">
            ${generateCardContent(item, category, collapseId)}
          </div>
        </div>
      `
      dataBtn.innerHTML = ``;
    } else {
      card.innerHTML = `
        <div class="card-header " id="heading${collapseId}">
          <h5 class="mb-0">
            <button class="btn  btn-outline-warning w-100" type="button" data-toggle="collapse" data-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
              ${item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </button>
          </h5>
        </div>

        <div id="${collapseId}" class="collapse " aria-labelledby="heading${collapseId}" data-parent="#dados">
          <div class="card-body text-white">
            ${generateCardContent(item, category, collapseId)}
          </div>
        </div>
      `
      dataBtn.innerHTML = ` <button type="button" class="btn btn-outline-danger" onclick="loadPreviousPage()">Página Anterior</button>


    <button type="button" class="btn btn-outline-success" onclick="loadNextPage()">Próxima Página</button> `
   
      ;
    }

    

    dataContainer.appendChild(card);
  });
}

function generateCardContent(item, category, collapseId) {
  let content = '';

  if (category === 'people') {
    
    content = `
    <strong>Name:</strong> ${item.name}<br>
    <strong>Gender:</strong> ${item.gender}<br> 
    <strong>Height:</strong> ${item.height}<br>
    <strong>Mass:</strong> ${item.mass}<br>
    <strong>Birth Year:</strong> ${item.birth_year}<br>
    `;
    
  } else if (category === 'planets') {
    content = `<strong>Name:</strong> ${item.name}<br> 
    <strong>Climate:</strong> ${item.climate}<br> 
    <strong>Population:</strong> ${item.population}<br>
    <strong>Diameter:</strong> ${item.diameter}<br>
    <strong>Terrain:</strong> ${item.terrain}<br>
    `;
  } else if (category === 'species') {
    content = `
    <strong>Name:</strong> ${item.name}<br>       
    <strong>Classification:</strong> ${item.classification}<br> 
    <strong>Language:</strong> ${item.language}<br>
    <strong>Average Lifespan:</strong> ${item.average_lifespan}<br>
    <strong>Average Height:</strong> ${item.average_height}<br>
    `;
  } else if (category === 'starships' || category === 'vehicles') {
    content = `<strong>Name:</strong> ${item.name}<br>
    <strong>Model:</strong> ${item.model}<br>
    <strong>Manufacturer:</strong> ${item.manufacturer}<br>           
    <strong>Cargo Capacity:</strong> ${item.cargo_capacity}<br>
    `;
  } else if (category === 'films') {
    content = `
      <strong>Title:</strong> ${item.title}<br>
      <strong>Episode:</strong> ${item.episode_id}<br>
      <strong>Director:</strong> ${item.director}<br>
      <strong>Producer:</strong> ${item.producer}<br>
      <strong>Release Date:</strong> ${item.release_date}
    `;
  }

  return content;
}
