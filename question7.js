// 7.1 Hämta användare (3p)
// Du ska använda Fetch för att hämta användarinformation
// från URL:en: https://jsonplaceholder.typicode.com/users.
// Visa endast användare som har ett användar-id som är
// högre än 5.
// Presentera användarnas namn, gatuadress (street) och
// företagsnamn på HTML-sidan.


const parentElement = document.getElementById("posts");

async function fetchJson(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()



const filteredPosts = data.filter((postar) => postar.userId <=5);

data.forEach((postar) => {
  console.log(postar);
  const text = document.createElement("div");
  text.innerHTML = `
  <p class="big">${postar.name}</p>
  <p>${postar.address.street}</p>
  <p>${postar.company.name}</p>
  `
  parentElement.appendChild(text);
});

};

fetchJson()



// 7.2 Styla varje användare (3p)
// Varje användare ska ha följande style:
// margin: 15px
// padding: 20px
// Texten på namnet ska vara bold och 24 pixlar
// Övrig text ska vara 16 pixlar
// Text-färgen ska ha färg-kod: #333333
// Backgrundsfärgen för varje användare ska ha färg-kod: #dddddd
// När man för muspekaren över en användare ska bakgrundsfärgen ändras till #eeeeee
// Visa användare i fyra kolumner för desktop och en kolumn för mobil
