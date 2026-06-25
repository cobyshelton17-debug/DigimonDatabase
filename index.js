// https://digimon-api.vercel.app/api/digimon

// document.addEventListener("DOMContentLoaded", function() { getData();});

// let allDigimon = [];

// async function getData() {
//     const data = await fetch(`https://digimon-api.vercel.app/api/digimon`)
//     const newData = await data.json();

//     allDigimon = newData;
//     displayDigimon(allDigimon);
// }

// function displayDigimon(digimonList){
//     const dataListEl = document.querySelector(".landing__row");
    
//     dataListEl.innerHTML = digimonList
//     .map(
//         (digimon) =>
//             `<div class="landing__card">
//                     <h2>DIGIMON NAME:</h2>
//                     <p>${digimon.name}</p>
//                     <img class="landing__img" src="${digimon.img}" alt="image placeholder">
//                     <h2>Rank:</h2>
//                     <p>${digimon.level}</p>
//                 </div>`
//     )
//     .join("");
// }

// function onSearchChange(event) {
//     const name = event.target.value;
//     const filteredDigimon = allDigimon.filter((digimon)=>
//         digimon.name.toLowerCase().includes(name.toLowerCase())
//     );

//     displayDigimon(filteredDigimon);
// }

// const selectElement = document.getElementById('sort-options');
// const itemList = document.getElementById('allDigimon');

// selectElement.addEventListener('change', (event) => {
//     const selectedValue = event.target.value;
//     sortItems(selectedValue);
// });

// function sortItems(order) {
//     const items = Array.from(itemList.children);

//     if (order === 'a-z') {
//         items.sort((a, b) => a.textContent.localeCompare(b.textContent));
//     } else if (order === 'z-a') {
//         items.sort((a, b) => b.textContent.localeCompare(a.textContent));
//     }

//     itemList.innerHTML = '';
//     items.forEach(item => itemList.appendChild(item));
// }

document.addEventListener("DOMContentLoaded", function() { getData();});

let allDigimon = [];
let currentSearchTerm = "";

async function getData() {
    const data = await fetch(`https://digimon-api.vercel.app/api/digimon`)
    const newData = await data.json();

    allDigimon = newData;
    applyFiltersAndSort();
}

function displayDigimon(digimonList){
    const dataListEl = document.querySelector(".landing__row");
    
    dataListEl.innerHTML = digimonList
    .map(
        (digimon) =>
            `<div class="landing__card">
                    <h2>DIGIMON NAME:</h2>
                    <p>${digimon.name}</p>
                    <img class="landing__img" src="${digimon.img}" alt="image placeholder">
                    <h2>Rank:</h2>
                    <p>${digimon.level}</p>
                </div>`
    )
    .join("");
}

function onSearchChange(event) {
    currentSearchTerm = event.target.value;
    applyFiltersAndSort();
}

const selectElement = document.getElementById('sort-options');

selectElement.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    sortItems(selectedValue);
});

function sortItems(order) {
    const filteredDigimon = allDigimon.filter((digimon) =>
        digimon.name.toLowerCase().includes(currentSearchTerm.toLowerCase())
    );

    if (order === 'a-z') {
        filteredDigimon.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'z-a') {
        filteredDigimon.sort((a, b) => b.name.localeCompare(a.name));
    }

    displayDigimon(filteredDigimon);
}

function applyFiltersAndSort() {
    sortItems(selectElement.value);
}