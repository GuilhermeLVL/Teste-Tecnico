$(document).ready(function() {
    $.ajax({
      url: 'https://swapi.dev/api/people/',
      method: 'GET',
      success: function(data) {
        displayData(data.results);
      },
      error: function(error) {
        console.error('Erro ao obter os dados da API SWAPI:', error);
      }
    });
  });
  
  function displayData(data) {
    const dataContainer = document.getElementById('dados');
    dataContainer.innerHTML = '';  // Limpa o conteúdo anterior
  
    if (data.length === 0) {
      dataContainer.innerHTML = '<p>Nenhum dado encontrado.</p>';
      return;
    }
  
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <h2>${item.name}</h2>
        <p>Gênero: ${item.gender}</p>
        <p>Altura: ${item.height}</p>
        <p>Peso: ${item.mass}</p>
        <p>Cor dos olhos: ${item.eye_color}</p>
        <p>Cor do cabelo: ${item.hair_color}</p>
      `;
  
      dataContainer.appendChild(itemElement);
    });
  }