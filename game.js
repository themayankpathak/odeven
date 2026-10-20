const runsperkey = {KeyQ: 1,KeyA:2,KeyW:3,KeyS:4,KeyE:5,KeyD:6,Space:10};

const allComputerShots = [1,2,3,4,5,6,10]

let ballInProgress = false;
let latestrun = null;
let timeLeft = null;
let timerId = null;
let computerShots = null;

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
if (ballInProgress === true) {
	document.getElementById("bowl").blur();
	console.log("ball in progress");
	return;
}
ballInProgress = true;
document.getElementById("bowl").blur();
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
if (latestrun === null) {
	console.log("Dot ball. Eyes on the ball mf, focus!");
	 document.getElementById("result").textContent = `Dot ball! Computer picked ${computerShots}. Eyes on the ball, focus!`;
}
else if (latestrun === computerShots) {
	console.log("out ho gaya rabba rabba. Your last attempt was for runs:", latestrun);
	 document.getElementById("result").textContent = `Done him, bowled him and shattered the stumps too. He saw that you were going for ${latestrun} runs.`;
}
else {
	console.log("Computer picked:", computerShots);
	console.log("You scored:", latestrun);
 document.getElementById("result").textContent = `You scored ${latestrun}. And computer picked ${computerShots}`;
}
}
document.getElementById("bowl").addEventListener("click", bowling);