var searchBar = document.getElementById('searchBar');
var form = document.querySelector('form');
var resultDiv = document.getElementById('result');

var getSearchedHistory = function() {
    return JSON.parse(localStorage.getItem('searchedPoke'));
};

var setSearchedHistory = function(text) {
    var searchedPoke = getSearchedHistory() || [];
    searchedPoke.push(text);
    localStorage.setItem('searchedPoke', JSON.stringify(searchedPoke));
};


form.addEventListener('submit', function(event) {
    event.preventDefault();
    var searchValue = searchBar.value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var name = data.name;
            var spriteUrl = data.sprites.front_default;
            var types = data.types.map(function(type) {
                return type.type.name;
            });
            var resultHTML =  `
            <h2>${name}</h2>
            <img src="${spriteUrl}" alt="${name} sprite">
            <p>Types: ${types.join(', ')}</p>
          `;
          resultDiv.innerHTML = resultHTML;
        })
        .catch(function(error) {
            resultDiv.innerHTML = `<p>${error.message}</p>`;
        });
});
