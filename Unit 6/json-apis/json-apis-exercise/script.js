// JSON APIs Exercise here
$.getJSON("https://jsonplaceholder.typicode.com/users/6", function (response) {
  console.log(response);
});

function getUser(userID) {
  $.getJSON(`https://jsonplaceholder.typicode.com/users/${userID}`, function (response) {
    console.log(response);
  });
}

getUser(3);
