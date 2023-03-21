var apiURL = "https://pokeapi.co/api/v2/";
    fetch(apiURL, { headers: {
      Accept: 'application/json',
    }})
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.log(err);
      });