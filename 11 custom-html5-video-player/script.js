const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function handleProgress() {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercent}%`;
}

function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener('click', skip);
});

ranges.forEach((range) => {
  range.addEventListener('change', handleRange);
});

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => {
  if(mouseDown) {
    scrub(event);
  }
});
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);