// Dynamic Content Exercise here
let header = $("h1").text("Shopping list");

let listItems = $("li").attr("class", "shopping-list-item");

let button = $("#log-me-button");
button.css("background-color", "lightgreen");

function afterClicked(event) {
  let favFood = $("#favorite-food-input").val();

  console.log(`The users favorite food is ${favFood}`);
}

button.on("click", afterClicked);
