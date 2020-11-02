const Chuck  = require('chucknorris-io'),
      client = new Chuck();

// Retrieve a random chuck joke
client.getRandomJoke().then(function (response) {
  console.log(response.value)
}).catch(function (err) {
    // handle error
});