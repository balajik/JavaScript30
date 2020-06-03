const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach((panel) => {
    if(panel.className === this.className) {
      this.classList.toggle('open');
    } else {
      panel.classList.remove('open');
    }
  });
}

function toggleOpenActive(event) {
  if(event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleOpenActive);
});