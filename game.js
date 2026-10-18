const runsperkey = {KeyQ: 1,KeyA:2,KeyW:3,KeyS:4,KeyE:5,KeyD:6,Space:10};

let latestrun = null;

document.addEventListener ("keydown", function(press) {
if (press.repeat === true){
	return; }
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
