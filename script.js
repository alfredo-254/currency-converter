// Assuming this code is in a function or an async block

let api = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json

async function fetchCurrencies() {
  try {
    const response = await fetch(api+".json");
    const currencies = await response.json();

    const fromDropDown = document.getElementById("fromCurrency");
    const toDropDown = document.getElementById("toCurrency");

    // create a dropdown for the currency array
    Object.keys(currencies).forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.text = currency.toUpperCase();
      fromDropDown.add(option);
    });

    // repeat the same procedure with the toDropDown array
    Object.keys(currencies).forEach((currency) => {
      const option = document.createElement("option");
      option.value = currency;
      option.text = currency.toUpperCase();
      toDropDown.add(option);
    });
    // setting default value
      fromDropDown.value = 'USD';
      toDropDown.value = 'EUR';
  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
}

// Call the function to fetch and populate dropdowns
fetchCurrencies();


async function fetchExchangeRate() {
  try {

    const amount = document.querySelector("#amount").value;
    const fromCurrency = document.querySelector("#fromCurrency").value;
    const toCurrency = document.querySelector("#toCurrency").value;
    
    const response = await fetch(api+"/"+fromCurrency+"/"+toCurrency+".json");
    const exchangeRate = await response.json();
    
    if (amount !== 0) {
      const convertedAmount = amount * exchangeRate[toCurrency];
      document.querySelector("#result").innerText = `${amount} ${fromCurrency.toUpperCase()} =${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
  } else {
      alert("Please input a valid number");
  }
  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
}
// Corrected event listener for the "convert" button
document.querySelector("#convert-button").addEventListener("click", fetchExchangeRate);
