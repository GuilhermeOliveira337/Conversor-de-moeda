const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 4.99;
    const euroToday = 5.89;
    const libraToday = 6.77;
    const bitcoinToday = 373809.42;

    if (currencySelect.value === "dolar") { // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value === "euro") { // Se o select estiver selecionao o valo de euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value === "libra") { // Se o select estiver selecionao o valo de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value === "bitcoin") { // Se o select estiver selecionao o valo de bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
     }
     if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
     }
     if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
     }
     if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
     }
  

     convertCurrency()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);