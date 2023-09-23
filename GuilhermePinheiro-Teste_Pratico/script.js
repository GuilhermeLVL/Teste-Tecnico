//Passando o valor de forma dinâmica para coletar os dados da api
function loadData(category) {
    $.ajax({
      url: `https://swapi.dev/api/${category}/`,
      method: 'GET',
      success: function(data) {
        displayData(data.results, category);
      },
      error: function(error) {
        console.error(`Erro ao obter os dados da categoria ${category} da API SWAPI:`, error);
      }
    });
  }
  
  //Pegando a DIV pelo Id e Limpando o conteudo
  function displayData(data, category) {
    const dataContainer = document.getElementById('dados');
    dataContainer.innerHTML = ''; 
  
    //Verificando se há dados 
    if (data.length === 0) {
      dataContainer.innerHTML = `<p>Nenhum dado encontrado para a categoria ${category}.</p>`;
      return;
    }
  
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
  
      let displayText = '';
  
      // Exibe informações específicas para cada categoria
      if (category === 'people') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Gender:</strong> ${item.gender}, <strong>Height:</strong> ${item.height}`;
      } 
      
      else if (category === 'films') {
        displayText = `<strong>Title:</strong> ${item.title}, <strong>Episode:</strong> ${item.episode_id}, <strong>Director:</strong> ${item.director}`;
      } 
      
      else if (category === 'planets') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Climate:</strong> ${item.climate}, <strong>Population:</strong> ${item.population}`;
      }
      
      else if (category === 'species') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Classification:</strong> ${item.classification}, <strong>Language:</strong> ${item.language}`;
      } 
      
      else if (category === 'starships') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Model:</strong> ${item.model}, <strong>Manufacturer:</strong> ${item.manufacturer}`;
      } 
      
      else if (category === 'vehicles') {
        displayText = `<strong>Name:</strong> ${item.name}, <strong>Model:</strong> ${item.model}, <strong>Manufacturer:</strong> ${item.manufacturer}`;
      }
  
      itemElement.innerHTML = `
        <h2>${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
        ${displayText}
      `;
  
      dataContainer.appendChild(itemElement);
    });
  }
  