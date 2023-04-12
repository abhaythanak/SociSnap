// variables
const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");

const apiURL = "https://api.lyrics.ovh";

// input value
form .addEventListener("submit", e => {
    e.preventDefault();
    let searchValue = search.value.trim();

    if(!searchValue) {
        alert("Nothing to Search")
    } else {
        beginSearch(searchValue)
    }
})

//Create Search Function

async function beginSearch(searchValue) {
    const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`);
    const data = await searchResult.json();
    console.log(data)
   // displayData(data);
}

// Display Search Result
function displayData(data) {
    result.innerHTML = `
    <ul class="songs">
    +
    </ul>`
}