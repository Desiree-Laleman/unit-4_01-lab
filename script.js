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
  totalParagraph.textContent = `Total: $${total}.00`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}.00`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}.00`;
});
fruit.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}.00`;
});

// CHALLENGE #2
const money = document.querySelector("#money");
const coinContainer = document.querySelector("#coin-container");

money.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = document.querySelector("#amount");
  const coinList = document.querySelector("#coinList");
  for (let i = 0; i < parseInt(amount.value); i++) {
    const coin = document.createElement("li"); // <li></li>
    coin.textContent = coinList.value; //<li>Penny</li>
    coin.classList.add("coin", coinList.value); // adds an extra class to the coinList's content - class name = coin + container.value
    coin.addEventListener("click", () => {
      coin.remove();
    });
    coinContainer.append(coin); //adds to the HTML
  }
  amount.value = "";
  coinList.value = "";
});

// CHALLENGE #3
const lightBulb = document.querySelector("#lightBulb");
const lightSwitches = document.querySelectorAll("#light-switches button");
const onSwitch = document.querySelector("#onSwitch");
const offSwitch = document.querySelector("#offSwitch");
const toggleSwitch = document.querySelector("#toggleSwitch");
const endSwitch = document.querySelector("#endSwitch");

onSwitch.addEventListener("click", () => {
  lightBulb.classList.add("on");
});
offSwitch.addEventListener("click", () => {
  lightBulb.classList.remove("on");
});
toggleSwitch.addEventListener("click", () => {
  lightBulb.classList.toggle("on");
});
endSwitch.addEventListener("click", () => {
  lightBulb.remove();
  lightSwitches.forEach((item) => {
    item.disabled = true;
  });
});
