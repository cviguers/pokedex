var searchBar = document.getElementById("searchBar");
var form = document.querySelector("form");
var resultDiv = document.getElementById("result");
var resultsEl = document.querySelector("#results-container");
var resultsTitleEl = document.querySelector("#results-title");
var resultsFormattingEl = document.querySelector(".results-formatting");
var userInput = document.querySelector(".user-input");
var searchBtn = document.querySelector("#searchButton");
var giphyEl = document.querySelector("#giphy-container")

var getSearchedHistory = function () {
  return JSON.parse(localStorage.getItem("searchedPoke"));
};

var setSearchedHistory = function (text) {
  var searchedPoke = getSearchedHistory() || [];
  searchedPoke.push(text);
  localStorage.setItem("searchedPoke", JSON.stringify(searchedPoke));
};

var renderPoke = function (data) {
  var resultsHeader = document.createElement("h3");
  var resultsFormatting = document.createElement("div");
  resultsHeader.textContent = "Results!";
  resultsHeader.classList.add("result-display");
  resultsFormatting.classList.add("results-formatting");
  resultsTitleEl.appendChild(resultsHeader);
  resultsFormattingEl.append(resultsFormatting);
  console.log(data);
  var name = data.name;
  var spriteUrl = data.sprites.front_default;
  var types = data.types.map(function (type) {
    return type.type.name;
  });
  var resultHTML = `
            <h2>${name}</h2>
            <img src="${spriteUrl}" alt="${name} sprite">
            <p>Types: ${types.join(", ")}</p>
          `;
  resultDiv.innerHTML = resultHTML;
};


var renderResults = function () {
  var resultsHeader = document.createElement("h3");
  resultsHeader.textContent = "Results!";
  resultsHeader.classList.add("result-display");
  resultsEl.appendChild(resultsHeader);
};

var renderGiphy = function(data) {
  console.log(data.data[0].images.original.url)
  var giphyCards = document.createElement('img');
  giphyCards.setAttribute("src", data.data[0].images.original.url);
  giphyEl.appendChild(giphyCards);
};

function fetchGiphy() {
  var searchValue = searchBar.value;
  var giphyURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    searchValue +
    "&api_key=Zyb70TwvbjBq2QCSKZGLohNeJx9WXcWC&limit=1";
  fetch(giphyURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderGiphy(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

searchBtn.addEventListener('click', fetchGiphy)

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var searchValue = searchBar.value.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderPoke(data);
    })
    .catch(function (error) {
      resultDiv.innerHTML = `<p>${error.message}</p>`;
    });
});
