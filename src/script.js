async function fetchAPI() {
    var url = "https://my-burger-api.herokuapp.com/burgers";

    const response = await fetch(url);
    const jsonResponse = await response.json();

    console.log(jsonResponse);

    for (var i=0; i<28; i++) {
        var section = document.getElementById("id").innerHTML += jsonResponse[i].name + " - ";
    }
}