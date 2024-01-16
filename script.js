// Assuming this code is in a function or an async block

let api = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json

async function fetchCurrencies() {
  try {
    const response = await fetch(api+".json");
    const currencies = await response.json();

    const fromDropDown = document.getElementById("from-currency-select");
    const toDropDown = document.getElementById("to-currency-select");

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
  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
}

// Call the function to fetch and populate dropdowns
fetchCurrencies();
