// grab the required html elements
const currenyDropdown1 = document.querySelector("#currency-one");
const currenyDropdown2 = document.querySelector("#currency-two");

const amountInput1 = document.querySelector("#amount1");
const amountInput2 = document.querySelector("#amount2");

const swapBtn = document.querySelector(".swap-btn");
const rateText = document.querySelector(".rate-text");

// add event listeners
currenyDropdown1.addEventListener("change", calculateRate);
currenyDropdown2.addEventListener("change", calculateRate);
amountInput1.addEventListener("input", calculateRate);

// event listener when the website load
window.onload = calculateRate;

function calculateRate() {
  // grap the value of the first currency
  const currency1 = currenyDropdown1.value;

  // fetch the exchange rate
  // default method for fetch is GET
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then((res) => res.json())
    .then((data) => {
      // get the rates from the returned object
      const rates = data.rates;

      // grab the value of the second currency
      const currency2 = currenyDropdown2.value;

      // get the rate of the second currency using the API data
      const rate = rates[currency2];
      console.log({ rate });

      rateText.innerText = `1 ${currency1} = ${rate} ${currency2}`;

      // calculate the amount of the second currency
      const amount1 = amountInput1.value;

      const calculatedAmount = amount1 * rate;

      amountInput2.value = calculatedAmount;
    });
}

// swap the currency
swapBtn.addEventListener("click", () => {
  const temporary = currenyDropdown1.value;
  currenyDropdown1.value = currenyDropdown2.value;
  currenyDropdown2.value = temporary;

  calculateRate();
});
