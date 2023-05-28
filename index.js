let p1_dice = document.querySelector(".p1_dice>img");
let p2_dice = document.querySelector(".p2_dice>img");
let paraElement = document.querySelector("p.lead");

function getResult() {
  let p1_random = Math.floor(Math.random() * 6);
  let p2_random = Math.floor(Math.random() * 6);

  let imgSrc1 = "./assets/images/dice_" + (p1_random + 1) + ".svg";
  let imgSrc2 = "./assets/images/dice_" + (p2_random + 1) + ".svg";

  p1_dice.setAttribute("src", imgSrc1);
  p2_dice.setAttribute("src", imgSrc2);

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
