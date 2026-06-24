// https://digimon-api.vercel.app/api/digimon

// https://external-preview.redd.it/my-latest-digimon-design-the-9-crests-v0-UJkTm0XpzKERIKyMaW_qK4wJ12h5iIBfiiNyVG21P50.jpg?width=640&crop=smart&auto=webp&s=1abbea5289c9a750f8aa61ca0a41be4f5c443e62
// use this image for the loading state



async function onSearchChange(event) {
    const name = event.target.value;
    const names = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
    const namesData = await names.json();
    const nameListEl = document.querySelector(".landing__row");
    console.log(namesData)
    nameListEl.innerHTML = namesData
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

async function rankDisplay(event){
    const level = event.target.value;
    const ranks = await fetch (`https://digimon-api.vercel.app/api/digimon/level/${level}`);
    const ranksData = await ranks.json();
    const rankListEl = document.querySelector(".main__row");
    console.log(ranksData)
    rankListEl.innerHTML = ranksData
    .slice(0, 10)
    .map(
        (rank) => 
        `<div class="main__card">
        <h2>DIGIMON NAME:</h2>
        <p>${rank.name}</p>
        <img src="${rank.img}">
        <h2>Rank:</h2>
        <p>${rank.level}</p>
        </div>`
    )
    .join("");
}

// THIS WAS FROM DUCK (DID NOT WORK)
    // document.getElementById('searchButton').addEventListener('click', function()) {
    //     const query = document.getElementById('searchInput').value;
    //     const apiUrl = `https://digimon-api.vercel.app/api/digimon`

    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             const resultsContainer = document.getElementById('resultsContainer');
    //             resultsContainer.innerHTML = '';

    //             data.results.forEach(item => {
    //                 const resultDiv = document.createElement('div');
    //                 resultDiv.innerHTML = `<h2>${item.name}<img>${item.img}<p>${item.level}</p>`;
    //                 resultsContainer.appendChild(resultDiv);
    //             })
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         })
    // }