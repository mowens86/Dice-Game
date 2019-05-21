let randomNumberOne = (Math.floor(Math.random() * 6) + 1);
let randomNumberTwo = (Math.floor(Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", `img/dice${randomNumberOne}.png`);
document.querySelector(".img2").setAttribute("src", `img/dice${randomNumberTwo}.png`);

randomNumberOne === randomNumberTwo ? document.querySelector("h1").textContent = "Draw!"
: randomNumberOne < randomNumberTwo ? document.querySelector("h1").textContent = "Player 2 WINS!!🏁"
: document.querySelector("h1").textContent = "Player 1 WINS!!🏁";