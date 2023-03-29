/* press enter on input */
var input = document.getElementById("search-input");
var button = document.getElementById("search-button");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

async function fetchAPI() {
    var url = "https://my-burger-api.herokuapp.com/burgers";

    const response = await fetch(url);
    const jsonResponse = await response.json();

    console.log(jsonResponse);

    for (var i=0; i<28; i++) {
        document.getElementById("items").innerHTML += jsonResponse[i].name + " - ";
    }
}