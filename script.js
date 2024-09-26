const bitCoin = document.getElementById('bitcoin');
const ethereumCoin = document.getElementById('ethereum');
const dogeCoin = document.getElementById('dogecoin');

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=zar')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

 
async function fetchData() {

    try {
        let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=zar');
        let data = await response.json();

        bitCoin.innerHTML = data.bitcoin.zar;
        dogeCoin.innerHTML = data.dogecoin.zar;
        ethereumCoin.innerHTML = data.ethereum.zar;
        console.log(data);

    } catch (error) {
        console.error(error);
    }
    
}