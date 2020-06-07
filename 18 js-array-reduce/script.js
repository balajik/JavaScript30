const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.map((node) => {
  return node.dataset.time;
})
.map((times) => {
  const [mins, secs] = times.split(":").map(parseFloat);
  return (mins * 60) + secs;
})
.reduce((total, vidSeconds) => {
  return total + vidSeconds;
});

let secondsLeft = seconds;
const hour = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft /60);
secondsLeft = secondsLeft % 60;

const totalTime = document.querySelector('.total-time');
totalTime.innerHTML = `<span>${hour} hour(s) ${mins} minute(s) ${secondsLeft} second(s)</span>`;