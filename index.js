// https://digimon-api.vercel.app/api/digimon

// https://external-preview.redd.it/my-latest-digimon-design-the-9-crests-v0-UJkTm0XpzKERIKyMaW_qK4wJ12h5iIBfiiNyVG21P50.jpg?width=640&crop=smart&auto=webp&s=1abbea5289c9a750f8aa61ca0a41be4f5c443e62
// use this image for the loading state

document.addEventListener("DOMContentLoaded", function() { getData();});

let allDigimon = [];

async function getData() {
    const data = await fetch(`https://digimon-api.vercel.app/api/digimon`)
    const newData = await data.json();

    allDigimon = newData;
    displayDigimon(allDigimon);
}

function displayDigimon(digimonList){
    const dataListEl = document.querySelector(".landing__row");
    
    dataListEl.innerHTML = digimonList
    .map(
        (name) =>
            `<div class="landing__card">
                    <h2>DIGIMON NAME:</h2>
                    <p>${name.name}</p>
                    <img src="${name.img}" alt="image placeholder">
                    <h2>Rank:</h2>
                    <p>${name.level}</p>
                </div>`
    )
    .join("");
}

function onSearchChange(event) {
    const name = event.target.value;
    const filteredDigimon = allDigimon.filter((digimon)=>
        digimon.name.toLowerCase().includes(name.toLowerCase())
    );

    displayDigimon(filteredDigimon);
}

async function rankDisplay(event){
    const level = event.target.value;
    const ranks = await fetch (`https://digimon-api.vercel.app/api/digimon/level/${level}`);
    const ranksData = await ranks.json();

    displayDigimon(ranksData);
}