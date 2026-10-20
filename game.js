const runsperkey = {KeyQ: 1,KeyA:2,KeyW:3,KeyS:4,KeyE:5,KeyD:6,Space:10};

const allComputerShots = [1,2,3,4,5,6,10]

let ballInProgress = false;
let latestrun = null;
let timeLeft = null;
let timerId = null;
let computerShots = null;
let totalScore = 0;
let ballsCount = 0;
let inningOver = false;
let strikes = 0;

document.addEventListener ("keydown", function(press) {
if (press.repeat === true){
	return; }
if (ballInProgress === false) {
	return;
}
	const runs = runsperkey[press.code];
if (runs === undefined) {
	console.log("keys hai chuche nahi! randomly mat daba, rules padhke aa....");
document.getElementById("invalid").textContent = 'Invalid key:Pick again';
return;
} else{
	console.log("you pressed:", runs);
document.getElementById("invalid").textContent = 'Invalid key: None';
}
latestrun= runs;
document.getElementById("pick").textContent = `Your pick: ${latestrun} runs`;
console.log("latest run:", latestrun);
});


document.addEventListener("keydown", function(press) {
	console.log("key pressed:", press.code, "shift held?", press.shiftKey, "repeatedly pressed?", press.repeat)
});

function bowling() {
if (inningOver === true) {
	return;
}
if (ballInProgress === true) {
	document.getElementById("bowl").blur();
	console.log("ball in progress");
	return;
}
ballInProgress = true;
document.getElementById("bowl").blur();
document.getElementById("bowl").disabled = true;
const i = Math.floor(Math.random() * allComputerShots.length);
computerShots = allComputerShots[i];
console.log("Computer pick:", computerShots);
latestrun = null;
document.getElementById("pick").textContent = `Your pick: none`;
 document.getElementById("result").textContent = "";
console.log("ball thrown");
timeLeft =3;
document.getElementById("countdown").textContent = `Time Left: ${timeLeft} seconds until next pick`;
timerId = setInterval(function () {
  timeLeft = timeLeft - 1;
document.getElementById("countdown").textContent = `Time Left: ${timeLeft} seconds until next pick`;
console.log("time left:", timeLeft);
  if (timeLeft === 0) {
	endBall();
}
}, 1000);
}

function endBall() {
	clearInterval(timerId);
	ballInProgress = false;
	console.log("ball over, next ball");
ballsCount += 1;
if (latestrun === null) {
	console.log("Dot ball. Eyes on the ball mf, focus!");
	 document.getElementById("result").textContent = `Dot ball! Computer picked ${computerShots}. Eyes on the ball, focus!`;
	strikes += 1;
	if (strikes === 3) {
		document.getElementById("result").textContent = `3 dot balls, what a loser! Total Score: ${totalScore} off ${ballsCount} balls`;
inningOver = true;
} 
}
else if (latestrun === computerShots) {
	console.log("out ho gaya rabba rabba. Your last attempt was for runs:", latestrun);
	 document.getElementById("result").textContent = `Done him, bowled him and shattered the stumps too. He saw that you were going for ${latestrun} runs. Total Score: ${totalScore} off ${ballsCount} balls`;
inningOver = true;
console.log("Target:", totalScore);
}
else {
	console.log("Computer picked:", computerShots);
	console.log("You scored:", latestrun);
 document.getElementById("result").textContent = `You scored ${latestrun}. And computer picked ${computerShots}`;
totalScore += latestrun;
strikes = 0;
}
document.getElementById("score").textContent = `Current score: ${totalScore} off ${ballsCount} balls`;
setTimeout (bowling, 2500);
}

document.getElementById("bowl").addEventListener("click", bowling);