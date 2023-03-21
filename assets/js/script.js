var apiURL = "https://pokeapi.co/api/v2/";

  var toJSON = function (response) {
    return response.json();
  };

  var renderPinterestImage = function (data) {
    // RENDER IMAGE
  };

  var getPokePintrestImage = function (term) {
    fetch('https://somethingpin.com/?q=' + term, { headers: {
      Accept: 'application/json',
    }})
      .then(toJSON)
      .then(renderPinterestImage)
  }

  var renderPoke = function (data) {
    // TODO: DO SOMETHING
    getPokePintrestImage(data.name);
  };

  var getPoke = function () {
    fetch(apiURL, { headers: {
      Accept: 'application/json',
    }})
      .then(toJSON)
      .then(renderPoke)
  }

getPoke();