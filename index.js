let randomNumberOne = (Math.floor(Math.random() * 6) + 1);
let randomNumberTwo = (Math.floor(Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", `images/dice${randomNumberOne}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumberTwo}.png`);

randomNumberOne === randomNumberTwo ? document.querySelector("h1").textContent = "Draw!"
: randomNumberOne < randomNumberTwo ? document.querySelector("h1").textContent = "Player 2 WINS!!🏁"
: document.querySelector("h1").textContent = "Player 1 WINS!!🏁";