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

function calculateRate() {
  // grap the values of the currency dropdowns
  const currency1 = currenyDropdown1.value;
  const currency2 = currenyDropdown2.value;

  // grab the values of the input amount
  const amount1 = amountInput1.value;

  // fetch the exchange rate
  // default method for fetch is GET
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  console.log({
    currency1,
    currency2,
    amount1,
  });
}

// methods for calling an API
// 1. GET; for fetching data
// 2. POST: for creating data
// 3. PUT/PATCH: for updating data
// 4. DELETE: for deleting data

// json -> JAVA SCRIPT OBJECT NOTATION

// normal function
// function add(a, b) {
//   return a + b;
// }

// arrow function
// const add = (a, b) => {
//   return a + b;
// };