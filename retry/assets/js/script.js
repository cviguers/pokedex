
var searchBar = document.getElementById('searchBar');
var form = document.querySelector('form');
var resultDiv = document.getElementById('result');

form.addEventListener('submit', event => {
    event.preventDefault();
    var searchValue = searchBar.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
        .then(response => response.json())
        .then(data => {
            var name = data.name;
            var spriteUrl = data.sprites.front_default;
            var types = data.types.map(type => type.type.name);
            var resultHTML =  `
            <h2>${name}</h2>
            <img src="${spriteUrl}" alt="${name} sprite">
            <p>Types: ${types.join(', ')}</p>
          `;
          resultDiv.innerHTML = resultHTML;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>${error.message}</p>`;
        });
});