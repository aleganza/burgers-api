$(document).ready(function(){
  /* press enter on search bar input */
  $('#search-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      $("#search-button").click();
    }
  });
});

async function fetchAPI() {
    const url = "https://my-burger-api.herokuapp.com/burgers";

    const response = await fetch(url);
    return (await response.json());
}

function addBurger(element) {
  const item = document.createElement("div");
  $(item).addClass("item").appendTo("#items");

  const item_left = document.createElement("div");
  $(item_left).addClass("item-left").appendTo(item);

  const name = document.createElement("div");
  $(name).addClass("name").appendTo(item_left);
  $(document.createElement("h2")).text(element.name).appendTo(name);

  const restaurant = document.createElement("div");
  $(restaurant).addClass("restaurant").text(element.restaurant).appendTo(item_left);

  const web = document.createElement("div");
  $(web).addClass("website").appendTo(item_left);
  $(document.createElement("a"))
  .attr("href", element.web)
  .attr("target", "_blank")
  .text("Website")
  .appendTo(web);

  const description = document.createElement("div");
  $(description).addClass("description").text(element.description).appendTo(item_left);

  const item_right = document.createElement("div");
  $(item_right).addClass("item-left").appendTo(item);

  /* document.getElementById("items").innerHTML += element.name + " - "; */
}

async function showBurgersList(jsonResponse, inputValue) {
    $("#items").empty();

    jsonResponse.forEach(element => {
      if(inputValue == ""){
        addBurger(element);
      }
      
      if(inputValue.toUpperCase() == element.name.toUpperCase() ||
         inputValue.toUpperCase() == element.restaurant.toUpperCase()) {
        addBurger(element);
      }
    });
}

async function filter() {
    const inputValue = document.getElementById("search-input").value;
    const jsonResponse = await fetchAPI();

    /* console.log(jsonResponse); */

    showBurgersList(jsonResponse, inputValue);
}