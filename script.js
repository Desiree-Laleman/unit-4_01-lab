"use sctrict";
// CHALLENGE #1
let total = 0;
const totalParagraph = document.querySelector("#challenge1 p");
const cola = document.querySelector("#cola");
const peanuts = document.querySelector("#peanuts");
const chocolate = document.querySelector("#chocolate");
const fruit = document.querySelector("#fruit");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `$${total}.00`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `$${total}.00`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `$${total}.00`;
});
fruit.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `$${total}.00`;
});

// CHALLENGE #2
const money = document.querySelector("#money");
const coinContainer = document.querySelector("#coin-container");

money.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = document.querySelector("#amount");
  const coinList = document.querySelector("#coinList");
  for (let i = 0; i < parseInt(amount.value); i++) {
    const coin = document.createElement("li");
    coin.classList.add("coin", coinList.value);
    coin.textContent = coinList.value;
    coinContainer.append(coin);
  }
  amount.value = "";
  coinList.value = "";
});
coinContainer.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = coinContainer.value; i == parseInt(coinContainer.value); i--) {
    const coinLoss = document.remove("li"); // <li></li>
    coin.classList.remove("coin", coinContainer.value);
    coin.textContent = coinList.value;
    coinContainer.remove(coinLoss);
  }
});

// CHALLENGE #3
const lightBulb = document.querySelector("#light-bulb");
const lightSwitches = document.querySelector("#light-switches");

lightSwitches.addEventListener("click", (event) => {
  event.preventDefault();
  //   if () {

  //   } else if() {

  //   } else if() {

  //   } else if() {

  //   };
});
