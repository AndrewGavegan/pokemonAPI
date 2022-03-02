
const wrapper = document.querySelector(".wrapper")
const searchbar = document.getElementById("searchbar")


searchbar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;

    Url = "https://pokeapi.co/api/v2/pokemon",
    Id = searchString

let apiUrl = Url + "/" + Id + "/";

response = fetch(apiUrl)
    .then (response => {
      return  response.json();
    })
    .then (data => {
        generateHtml(data) ;
    })

    const generateHtml = (data) => {
        console.log(data);

        if (data.types.length == 1) {
            const html = `
            <div class="name">Name: ${data.name}</div>
            <div class="ID">ID: ${data.id}</div>
            <img id="image" src=${data.sprites.front_default}>
            <div class="details">
                <div class="type">Type: ${data.types[0].type.name}</div>
                <div class="height">Height: ${data.height}</div>
                <div class="weight">Weight: ${data.weight}</div>
            </div>
        `
    wrapper.innerHTML = html
    } else if (data.types.length == 2) {
            const html = `
            <div class="name">Name: ${data.name}</div>
            <div class="ID">ID: ${data.id}</div>
            <img id="image" src=${data.sprites.front_default}>
            <div class="details">
                <div class="type">Type: ${data.types[0].type.name} ${data.types[1].type.name} </div>
                <div class="height">Height: ${data.height}</div>
                <div class="weight">Weight: ${data.weight}</div>
            </div>
        `
    wrapper.innerHTML = html
    }
    }
})





