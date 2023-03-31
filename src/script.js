/**
 * if "Enter" key is pressed while typing in the search input,
 * search button is clicked
 */

$(document).ready(function(){
  /* press enter on search bar input */
  $('#search-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      $("#search-button").click();
    }
  });
});

/**
 * fetch the api url
 * @returns response in json format
 */

async function fetchAPI() {
    const url = "https://my-burger-api.herokuapp.com/burgers";

    const response = await fetch(url);
    return (await response.json());
}

/**
 * clears the items list
 */

function clearList() {
  $("#items").empty();
}

/**
 * clears the items list whether the search input is blank
 */

function clearListIfBlankInput() {
  const inputValue = document.getElementById("search-input").value;

  if ((inputValue) == "") {
    clearList();
  }
}

/**
 * adds a burger item to the items list
 * @param {*} element 
 */

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
}

/**
 * shows all the burgers
 * @param {*} jsonResponse 
 */

function showBurgersList(jsonResponse) {
  clearList();

  jsonResponse.forEach(element => {
    addBurger(element);
  });
}

/**
 * shows all the burgers with the specified filter
 * @param {*} jsonResponse 
 * @param {*} inputValue 
 */

function showBurgersListFiltered(jsonResponse, inputValue) {
    clearList();

    jsonResponse.forEach(element => {
      if(element.name.toUpperCase().includes(inputValue.toUpperCase()) ||
         element.restaurant.toUpperCase().includes(inputValue.toUpperCase())){
        addBurger(element);
      }
    });
}

/**
 * shows full items list
 */

async function showFullList() {
    const jsonResponse = await fetchAPI();

    showBurgersList(jsonResponse);
}

/**
 * shows all the itmes list with the specified filter
 * @returns nothing if inputValue is blank (stops the function)
 */

async function filterList() {
    const inputValue = document.getElementById("search-input").value;
    if (inputValue == "") return;
  
    const jsonResponse = await fetchAPI();

    showBurgersListFiltered(jsonResponse, inputValue);
}

/**
 * for each type in the search input, shows the burgers with the inputValue as a filter
 */

$("#search-input").on("input", function() {
  clearListIfBlankInput()
  
  filterList();
});