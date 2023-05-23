"use strict";
const diceBtn = document.querySelector(".circle");
const adviceID = document.querySelector(".id");
const quote = document.querySelector(".quote");
const patternImg = document.querySelector(".pattern-img");

function changeTextContent(id, advice) {
  adviceID.textContent = id;
  quote.textContent = advice;
}

async function randomAdvice() {
  try {
    const fetchData = await fetch(`https://api.adviceslip.com/advice`);
    const data = await fetchData.json();
    const { id, advice } = data.slip;
    console.log(id, advice);
    changeTextContent(id, advice);
  } catch (error) {
    console.error(error);
  }
}

diceBtn.addEventListener("click", function (e) {
  if (e.target.closest(".circle")) {
    randomAdvice();
  }
  return;
});

if (window.innerWidth <= 600) {
  patternImg.setAttribute("src", "./images/pattern-divider-mobile.svg");
}
