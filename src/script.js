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

/* function searchContact(){
    var a, i, txtValue;
    var input = document.getElementById('searchedId');
    var filter = input.value.toUpperCase();
    var list = document.getElementById("list");
    var contact = list.getElementsByClassName('bg');

    // scorre la lista dei contatti e mostra solo quelli che contengono lettere cercate
    for (i = 0; i < contact.length; i++) {
        a = contact[i].getElementsByClassName("contact")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            contact[i].style.display = "";
        } else {
            contact[i].style.display = "none";
        }
    }
} */