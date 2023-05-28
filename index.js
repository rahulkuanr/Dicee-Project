let p1_dices = document.querySelectorAll(".p1_dicees>img");
let p2_dices = document.querySelectorAll(".p2_dicees>img");
let paraElement = document.querySelector("p.lead");

function hideDices() {
  hideAllDices();

  p1_dices[5].classList.remove("display");
  p2_dices[5].classList.remove("display");
}

function getResult() {
  hideAllDices();

  let p1_random = Math.floor(Math.random() * p1_dices.length);
  let p2_random = Math.floor(Math.random() * p1_dices.length);

  p1_dices[p1_random].classList.remove("display");
  p2_dices[p2_random].classList.remove("display");

  if (p1_random > p2_random) {
    paraElement.innerHTML =
      '<p class="display-5 lead"> Player <span class="display-5" style="color: #F24405;"> 1 </span> wins!</p>';
  } else if (p2_random > p1_random) {
    paraElement.innerHTML =
      '<p class="display-5 lead"> Player <span class="display-5" style="color: #F24405;"> 2 </span> wins!</p>';
  } else {
    paraElement.innerHTML =
      '<p class="display-5 lead"> Its a <span class="display-5" style="color: #F24405;"> draw. </span> Roll again!</p>';
  }
}

function hideAllDices() {
  for (let img of p1_dices) {
    img.classList.add("display");
  }

  for (let img of p2_dices) {
    img.classList.add("display");
  }
}
