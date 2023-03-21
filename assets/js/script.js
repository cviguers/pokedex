var pokeURL = "https://pokeapi.co/api/v2/";
var pinterestURL = "https://developers.pinterest.com/";
var pokeInfoEl = document.querySelector('pokeInfo')
var buttonEl = document.querySelector("#button");

var displayPoke = function (text) {
  pokeInfoEl.textContent = text;
};

var renderButtons = function() {

};

var getSearchedPoke = function() {
  return JSON.parse(localStorage.getItem('searchedPoke')) || [];
};

var setSearchedPoke = function() {
  var searchedPoke = getSearchedPoke();
  searchedPoke.push(text);
  localStorage.setItem('searchedPoke', JSON.stringify(searchedPoke));
};

var toJSON = function (response) {
  return response.json();
};

var renderPinterestImage = function (data) {
  // RENDER IMAGE
};

var getPokePintrestImage = function (term) {
  fetch("pintrestURL" + term, {
    headers: {
      Accept: "application/json",
    },
  })
    .then(toJSON)
    .then(renderPinterestImage);
};

var renderPoke = function (data) {
  // TODO: DO SOMETHING
  getPokePintrestImage(data.name);
};

var getPoke = function () {
  fetch(pokeURL, {
    headers: {
      Accept: "application/json",
    },
  })
    .then(toJSON)
    .then(renderPoke);
};

getPoke();
