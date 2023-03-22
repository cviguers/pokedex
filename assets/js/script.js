var pokeURL = "https://pokeapi.co/api/v2/pokemon?limit=60&offset=60";
// var pinterestURL = "https://api.pinterest.com/v5/pins/";
var pokeInfoEl = document.querySelector("#pokeInfo");
var buttonEl = document.querySelector("#button");

// get local storage
var getSearchedPoke = function() {
  return JSON.parse(localStorage.getItem('searchedPoke')) || [];
};

// set local storage
var setSearchedPoke = function() {
  var searchedPoke = getSearchedPoke();
  searchedPoke.push(text);
  localStorage.setItem('searchedPoke', JSON.stringify(searchedPoke));
};

var toJSON = function (response) {
  console.log(response)
  return response.json();
};

// var renderPinterestImage = function (data) {
//   // RENDER IMAGE
// };

// var getPokePintrestImage = function (term) {
//   fetch("pintrestURL" + term, {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then(toJSON)
//     .then(renderPinterestImage);
// };

var renderPoke = function (data) {
  for (var i = 0; 0 < data.results.length; i++)
  console.log(data.results[i])
  var resultPoke = document.createElement('div');
  resultPoke.textContent = data.results[i];
  // getPokePintrestImage(data.name);
};

var fetchPoke = function () {
  fetch(pokeURL)
    .then(toJSON)
    .then(renderPoke);
};

fetchPoke();
