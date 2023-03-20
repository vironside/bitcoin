const API_KEY = `ODMAOAvToG/11HOdGb7vKQ==w4FN3QFFLM0aXW1r`;
const API_URL = `https://api.api-ninjas.com/v1/cryptoprice?symbol=BTCUSD`;

const PRICE_ELEMENT = document.getElementById('price');
let previousPrice, className;
async function getBitcoinPrice() {
    const response = await fetch(API_URL, {
        headers: {
            'X-Api-Key': API_KEY
        }
    });
    if (response) {
        const data = await response.json();
        let currentPrice = Number(data.price);
        if (currentPrice >= previousPrice) {
        className = "green";
        } else {
            className = "red";

        }
        previousPrice = currentPrice;
        PRICE_ELEMENT.className = className;
        PRICE_ELEMENT.innerHTML = currentPrice.toFixed(2);
    } else {
        console.log(`Something weird happened`);
    }
}

getBitcoinPrice();

setInterval(
    () => {
        getBitcoinPrice();
    }, 
   5000
)